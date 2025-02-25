// Shorthand syntax to check if the namespace already exists, if not create an empty Object.
var comGkSoftwareGkrAppEnablementApi = comGkSoftwareGkrAppEnablementApi || {};

/*global oAppEnablementConnectorInstance*/
/**
 * @class
 * @classdesc App Enablement class for all common used functionalities like registering and unregistering to events
 * and to get the session context.
 * @author mluzius
 * @since 2.0.0
 * @public
 * @name com.gk_software.gkr.app_enablement.api.Common
 */
comGkSoftwareGkrAppEnablementApi.Common = function () {
  "use strict";
  this._prefix = "comGkSoftwareGkrAppEnablementApi.Common/";
};

/**
 * The internally returned object looks like the following example:
 * {
 *   businessUnitGroupID: "100000000000000001",
 *   businessUnitID: "9090", // Equivalent to store ID
 *   isoCurrencyCode: "USD",
 *   storeLanguage: "en_US",
 *   tenantID: "004",
 *   userLanguage: "zh_CN",
 *   workstationID: "107"
 * }
 * @summary This function will provide the session context. For example currency, language.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Common.getSessionContext
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Common.prototype.getSessionContext = function (sResultFunction, sErrorFunction) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getSessionContext", sResultFunction, sErrorFunction);
};


/**
 * @summary This function will create a request object for the function 'registerListener'.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Common.createRegisterListenerRequest
 * @param {string} sEventName
 *            Name of the event that should be registered. For example: 'EVENT_TRANSACTION_UPDATED'.
 * @param {string} sEventListenerName
 *            Name of the event listener function that should be executed when the event is fired.
 * @param {boolean} bPassData
 *            Flag to indicate if the event listener function receives a data parameter. For example needed for
 *            Scan events to provide the barcodeFormat and the rawScanData.
 * @function
 * @returns (String) Returns a stringified Object for the registerListener request.
 */
comGkSoftwareGkrAppEnablementApi.Common.prototype.createRegisterListenerRequest = function (sEventName, sEventListenerName, bPassData) {
  return JSON.stringify({
    "event": sEventName,
    "listener": sEventListenerName,
    "passData": bPassData
  });
};

/**
 * @summary This function will register a listener for the given event.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Common.registerListener
 * @param {string} oRegisterListenerRequest
 *            Necessary request object to register event listeners. Data type is string but internal
 *            data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              "event": "EVENT_TRANSACTION_UPDATED",
                "listener": "returnEventNotification",
                "passData": false || true
 *            }
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Common.prototype.registerListener = function (sRegisterListenerRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "registerListener", "", "", sRegisterListenerRequest);
};


/**
 * @summary This function will create a request object for the function 'unregisterListener'.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Common.createUnregisterListenerRequest
 * @param {string} sEventName
 *            Name of the event that should be unregistered. For example: 'EVENT_TRANSACTION_UPDATED'.
 * @param {string} sEventListenerName
 *            Name of the event listener function that should be unregistered.
 * @function
 * @returns (String) Returns a stringified Object for the unregisterListener request.
 */
comGkSoftwareGkrAppEnablementApi.Common.prototype.createUnregisterListenerRequest = function (sEventName, sEventListenerName) {
  return JSON.stringify({
    "event": sEventName,
    "listener": sEventListenerName
  });
};


/**
 * @summary This function will unregister a listener for the given event.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Common.unregisterListener
 * @param {string} sUnregisterListenerRequest
 *            Name of the event that should be unregistered so that it can't be fired any longer.
 *            Data type is string but internal data type is Object.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Common.prototype.unregisterListener = function (sUnregisterListenerRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix  + "unregisterListener", "", "", sUnregisterListenerRequest);
};


/**
 * @summary This function will close the app
 *
 * @author nmankel (Last modified by: nmankel)
 * @since 2.1.0
 * @name com.gk_software.gkr.app_enablement.api.Common.closeBrowser
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Common.prototype.closeBrowser = function () {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix  + "closeBrowser", "", "");
};


/**
 * @summary This function will hide the app
 *
 * @author nmankel (Last modified by: nmankel)
 * @since 2.1.0
 * @name com.gk_software.gkr.app_enablement.api.Common.hideBrowser
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Common.prototype.hideBrowser = function () {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix  + "hideBrowser", "", "");
};


/**
 * The internally returned object looks like the following example:
 * {
 *   operatorID: "1",
 *   workerID: "1",
 *   salutation: "Herr",
 *   firstName: "Max",
 *   lastName: "Mustermann",
 *   rightsSet: ["S.00000000001.00","S.00000000001.01"],
 * }
 * @summary This function will provide operator data. For example operatorID, name, rights.
 *
 * @author nmankel (Last modified by: nmankel)
 * @since 2.1.0
 * @name com.gk_software.gkr.app_enablement.api.Common.getOperatorData
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Common.prototype.getOperatorData = function (sResultFunction, sErrorFunction) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getOperatorData", sResultFunction, sErrorFunction);
};