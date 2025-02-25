var oAppEnablementConnectorInstance;

// Shorthand syntax to check if the namespace already exists, if not create an empty Object.
var comGkSoftwareGkrAppEnablement = comGkSoftwareGkrAppEnablement || {};

/**
 * @class
 * @classdesc App Enablement Connector class for all general functionalities that should not
 * be accessible via the API. These are only private helper functions.
 * @author mluzius
 * @since 2.0.0
 * @private
 * @name com.gk_software.gkr.app_enablement.ConnectorPrivateClass
 */
comGkSoftwareGkrAppEnablement.ConnectorPrivateClass = ( function () {
  "use strict";

  /**
   * @summary This function provides the value for a given URL parameter key.
   *
   * @author mluzius (Last modified by: mluzius)
   * @since 2.0.0
   * @name com.gk_software.gkr.app_enablement.ConnectorPrivateClass._fnGetParameter
   * @param {string} sParameterName
   *            Name of the URL parameter for which you want to get the value.
   * @private
   * @function
   * @returns (string) Returns the value for the requested URL parameter key.
   */
  var _fnGetParameter = function(sParameterName) {
    var sResult = "",
        aTmp = null,
        aItems = window.location.search.substr(1).split("&"),
        index = 0,
        iItemsLength = (aItems) ? aItems.length : 0;

    for (index; index < iItemsLength; index++) {
      aTmp = aItems[index].split("=");
      if (aTmp[0] === sParameterName) {
        sResult = decodeURIComponent(aTmp[1]);
      }
    }

    return sResult;
  };

  var _sAppToken = _fnGetParameter("appToken");
  var _sPosToken = _fnGetParameter("posToken");
  var _sPosOrigin = _fnGetParameter("posOrigin");

  /**
   * @summary This function validates the origins and tokens of the host and the app.
   *
   * @author mluzius (Last modified by: mluzius)
   * @since 2.0.0
   * @name com.gk_software.gkr.app_enablement.ConnectorPrivateClass._fnValidateOrigin
   * @param {Object} oEvent
   *            Object of the receiveMessage event with for example origin, token and event name.
   * @private
   * @function
   * @returns (boolean) Returns true or false if the domain origins and tokens of host and app match.
   */
  var _fnValidateOrigin = function(oEvent) {
    return (oEvent.origin === _sPosOrigin && oEvent.token === _sPosToken);
  };

  /**
   * @summary A function to process messages received by the global window via postMessage.
   *
   * @author mluzius (Last modified by: mluzius)
   * @since 2.0.0
   * @name com.gk_software.gkr.app_enablement.ConnectorPrivateClass._fnReceiveMessage
   * @param {Object} oEvent
   *            Object of the receiveMessage event with for example origin, token and event name.
   * @private
   * @function
   */
  var _fnReceiveMessage = function (oEvent) {

    // Do we trust the sender of this message?
    if (_fnValidateOrigin(oEvent)) {
      return;
    }

    if (oEvent && typeof oEvent !== "undefined"
      && oEvent.data && typeof oEvent.data !== "undefined"
      && oEvent.data.fnCall && typeof oEvent.data.fnCall !== "undefined"
      && oEvent.data.fnData && typeof oEvent.data.fnData !== "undefined") {

      var fn = window[oEvent.data.fnCall](oEvent.data.fnData);
      if (typeof fn === 'function') {
        fn();
      }

    }
  };

  // Setup an event listener that calls _fnReceiveMessage() when the window
  // receives a new MessageEvent.
  window.addEventListener('message', _fnReceiveMessage);

  window._fnHandshakeWithConnectorSuccess = function (result) {
    oAppEnablementConnectorInstance._connector = result;
  };

  /**
   * @summary This function will do a handshake between host and client app to make sure that everything was
   * initialized and to identify the host type (Java or JavaScript). This function will be
   * executed automatically if the class is accessed.
   *
   * @author mluzius (Last modified by: mluzius)
   * @since 2.0.0
   * @name com.gk_software.gkr.app_enablement.ConnectorPrivateClass._fnDoHandshake
   * @private
   * @function
   */
  var _fnDoHandshake = function() {
    if (_sPosOrigin && typeof _sPosOrigin !== "undefined" && _sPosOrigin !== null) {
      var oMessage = {};

      oMessage.origin = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
      oMessage.token = _sAppToken;
      oMessage.version = "mobilePOS_5.5.1";

      oMessage.onResult = "_fnHandshakeWithConnectorSuccess";
      oMessage.onError = "";

      oMessage.fnCall = "handshake";
      oMessage.fnData = "app";

      window.parent.postMessage(oMessage, _sPosOrigin);
    }
  };

  _fnDoHandshake();

  return {
    /**
     * @summary This function will provide the string for the app token. This value is read-only  for users
     * of the API.
     *
     * @author mluzius (Last modified by: mluzius)
     * @since 2.0.0
     * @name com.gk_software.gkr.app_enablement.ConnectorPrivateClass.getAppToken
     * @function
     */
    getAppToken: function () {
      return _sAppToken;
    },

    /**
     * @summary This function will provide the string for the host domain origin. This value is read-only for users
     * of the API.
     *
     * @author mluzius (Last modified by: mluzius)
     * @since 2.0.0
     * @name com.gk_software.gkr.app_enablement.ConnectorPrivateClass.getPosOrigin
     * @function
     */
    getPosOrigin: function () {
      return _sPosOrigin;
    }
  };

})();


/**
 * @class
 * @classdesc App Enablement Connector class for all general functionalities related to API itself like using
 * postMessage to enable communication between host and app.
 * @author mluzius
 * @since 2.0.0
 * @public
 * @name com.gk_software.gkr.app_enablement.Connector
 */
comGkSoftwareGkrAppEnablement.Connector = function () {
  "use strict";

  // Empty is default. In that case the omniPOS is used instead of mobilePOS.
  this._connector = "";
};


/**
 * @summary This function will trigger events for the App Enablement API to exchange data between host and client
 * app and also decides whether to use the JavaScript (postMessage) or Java (via own protocol for JX browser) logic.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.Connector.invokeMethod
 * @param {string} sCall
 *            Event name that should be called.
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} sData
 *            Stringified Object that is passed to the event.
 * @function
 */
comGkSoftwareGkrAppEnablement.Connector.prototype.invokeMethod = function (sCall, sResultFunction, sErrorFunction, sData) {

  if (this._connector === "mobilePOS") {
    // The following lines are used by JavaScript hosts like mobilePOS.
    var oMessage = {};

    oMessage.origin = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
    oMessage.token = comGkSoftwareGkrAppEnablement.ConnectorPrivateClass.getAppToken();
    oMessage.version = "mobilePOS_5.5.1";
    oMessage.onResult = sResultFunction;
    oMessage.onError = sErrorFunction;
    oMessage.fnCall = sCall;
    oMessage.fnData = sData;

    window.parent.postMessage(oMessage, comGkSoftwareGkrAppEnablement.ConnectorPrivateClass.getPosOrigin());

  } else if (typeof injected_by_POS__postWebAppRequest !== "undefined" && typeof injected_by_POS__postWebAppRequest.invoke !== "undefined") {
    // The following lines are used by the Java POS to send and execute specific events of App Enablement via an own
    // protocol to the JX browser.

    var request = "jmc://" + sCall;
    var sep = "?";

    if (sResultFunction && typeof sResultFunction !== "undefined") {
      request += sep + "onResult=" + sResultFunction;
      sep = "&";
    }

    if (sErrorFunction && typeof sErrorFunction !== "undefined") {
      request += sep + "onError=" + sErrorFunction;
    }

    if (sData && typeof sData !== "undefined") {
      request += sep + "0=" + encodeURIComponent(sData);
    }

    injected_by_POS__postWebAppRequest.invoke(request);
  }
};

oAppEnablementConnectorInstance = new comGkSoftwareGkrAppEnablement.Connector();