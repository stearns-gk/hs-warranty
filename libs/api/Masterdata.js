/*global oAppEnablementConnectorInstance*/

// Shorthand syntax to check if the namespace already exists, if not create an empty Object.
var comGkSoftwareGkrAppEnablementApi = comGkSoftwareGkrAppEnablementApi || {};

/**
 * @class
 * @classdesc App Enablement class for all functionalities related to GK masterdata like getting single item
 * information, get item list by id list and to grab the image url from Digital Signage Server.
 * @author mluzius
 * @since 2.0.0
 * @public
 * @name com.gk_software.gkr.app_enablement.api.Masterdata
 */
comGkSoftwareGkrAppEnablementApi.Masterdata = function () {
  "use strict";
  this._prefix = "comGkSoftwareGkrAppEnablementApi.Masterdata/";
};

/**
 * @summary This function will create a request object for the function 'getItemDataByID'.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Masterdata.createGetItemDataByIDRequest
 * @param {string} sItemID
 *            Item ID to get the item information for GK masterdata items.
 * @function
 * @returns (String) Returns a stringified Object for the getItemDataByID request.
 */
comGkSoftwareGkrAppEnablementApi.Masterdata.prototype.createGetItemDataByIDRequest = function (sItemID) {
  return JSON.stringify({
    "itemID": sItemID
  });
};


/**
 * @summary This function will provide GK masterdata item information for a given item ID.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Masterdata.getItemDataByID
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oGetItemDataByIDRequest
 *            Stringified Object from the createGetItemDataByIDRequest.
 *            Data type is string but internal
 *            data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              itemID: "030039"
 *            }
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Masterdata.prototype.getItemDataByID = function (sResultFunction, sErrorFunction, oGetItemDataByIDRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getItemDataByID", sResultFunction, sErrorFunction, oGetItemDataByIDRequest);
};


/**
 * @summary This function will create a request object for the function 'getItemDataListByIDList'.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Masterdata.createGetItemDataListByIDListRequest
 * @param {Array} aItemIDList
 *            Array of item IDs to get the item information for GK masterdata items.
 * @function
 * @returns (String) Returns a stringified Object for the getItemDataListByIDList request.
 */
comGkSoftwareGkrAppEnablementApi.Masterdata.prototype.createGetItemDataListByIDListRequest = function (aItemIDList) {
  return JSON.stringify({
    "itemIDList": aItemIDList
  });
};

/**
 * @summary This function will provide an array of GK masterdata items with their information for a given item ID list.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Masterdata.getItemDataListByIDList
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oGetItemDataListByIDListRequest
 *            Stringified Object from the createGetItemDataListByIDListRequest.
 *            Data type is string but internal data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              itemIDList: ["03039", "65005", "65007"]
 *            }
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Masterdata.prototype.getItemDataListByIDList = function (sResultFunction, sErrorFunction, oGetItemDataListByIDListRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getItemDataListByIDList", sResultFunction, sErrorFunction, oGetItemDataListByIDListRequest);
};


/**
 * @summary This function will create a request object for the function 'getImageUrl'.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Masterdata.createGetImageUrlRequest
 * @param {string} sItemID
 *            Item ID to get the item image url for a GK masterdata item.
 * @function
 * @returns (String) Returns a stringified Object for the getImageUrl request.
 */
comGkSoftwareGkrAppEnablementApi.Masterdata.prototype.createGetImageUrlRequest = function (sItemID) {
  return JSON.stringify({
    "itemID": sItemID,
    "type": "item"
  });
};

/**
 * @summary This function will provide an image url via an item ID and the Digital Signage Server.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Masterdata.getImageUrl
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oCreateGetImageUrlRequest
 *            Stringified Object from the createGetImageUrlRequest.
 *            Data type is string but internal data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              itemID: "03039",
 *              type: "item"
 *            }
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Masterdata.prototype.getImageUrl = function (sResultFunction, sErrorFunction, oCreateGetImageUrlRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getImageUrl", sResultFunction, sErrorFunction, oCreateGetImageUrlRequest);
};

