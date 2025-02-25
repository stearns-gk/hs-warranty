/*global oAppEnablementConnectorInstance*/

// Shorthand syntax to check if the namespace already exists, if not create an empty Object.
var comGkSoftwareGkrAppEnablementApi = comGkSoftwareGkrAppEnablementApi || {};

/**
 * @class
 * @classdesc App Enablement class for all functionalities related to external masterdata like searching,
 * registering external items and to grab the image url from external webshops.
 * @author mluzius
 * @since 2.0.0
 * @public
 * @name com.gk_software.gkr.app_enablement.api.ExternalMasterdata
 */
comGkSoftwareGkrAppEnablementApi.ExternalMasterdata = function () {
  "use strict";
  this._prefix = "comGkSoftwareGkrAppEnablementApi.ExternalMasterdata/";
};

/**
 * @summary This function will create a request object for the function 'getItemByCriteria'.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.ExternalMasterdata.createGetItemByCriteriaRequest
 * @param {string} sItemID
 *            Item ID to get the item information for external items.
 * @param {string} oContext
 *            Provides the session context. For example currency, language. Data type is string but internal
 *            data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              businessUnitGroupID: "100000000000000001",
 *              businessUnitID: "9090", // Equivalent to store ID
 *              isoCurrencyCode: "USD",
 *              storeLanguage: "en_US",
 *              tenantID: "004",
 *              userLanguage: "zh_CN",
 *              workstationID: "107"
 *            }
 * @function
 * @returns (String) Returns a stringified Object for the getItemByCriteria request.
 */
comGkSoftwareGkrAppEnablementApi.ExternalMasterdata.prototype.createGetItemByCriteriaRequest = function (sItemID, oContext) {
  return JSON.stringify({
    "itemID": sItemID,
    "language": (oContext && oContext.userLanguage) ? oContext.userLanguage : null,
    "isoCurrencyCode": (oContext && oContext.isoCurrencyCode) ? oContext.isoCurrencyCode : null
  });
};

/**
 * @summary This function will provide external item information for a given item ID.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.ExternalMasterdata.getItemByCriteria
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oGetItemByCriteriaRequest
 *            Stringified Object from the createGetItemByCriteriaRequest.
 *            Data type is string but internal
 *            data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              itemID: "030039",
 *              language: "en_US",
 *              isoCurrencyCode: "USD"
 *            }
 * @function
 */
comGkSoftwareGkrAppEnablementApi.ExternalMasterdata.prototype.getItemByCriteria = function (sResultFunction, sErrorFunction, oGetItemByCriteriaRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getItemByCriteria", sResultFunction, sErrorFunction, oGetItemByCriteriaRequest);
};


/**
 * @summary This function will create a request object for the function 'getItemListBySearchCriteria'.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.ExternalMasterdata.createGetItemByCriteriaRequest
 * @param {string} sSearchQuery
 *            The string that is used to search external items.
 * @param {number} iRecordCount
 *            Determines the maximum count of items that should be displayed per page.
 * @param {string} oContext
 *            Provides the session context. For example currency, language. Data type is string but internal
 *            data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              businessUnitGroupID: "100000000000000001",
 *              businessUnitID: "9090", // Equivalent to store ID
 *              isoCurrencyCode: "USD",
 *              storeLanguage: "en_US",
 *              tenantID: "004",
 *              userLanguage: "zh_CN",
 *              workstationID: "107"
 *            }
 * @function
 * @returns (String) Returns a stringified Object for the getItemListBySearchCriteria request.
 */
comGkSoftwareGkrAppEnablementApi.ExternalMasterdata.prototype.createGetItemListBySearchCriteriaRequest = function (sSearchQuery, iRecordCount, oContext) {

  return JSON.stringify({
    "query": (sSearchQuery && sSearchQuery !== "") ? sSearchQuery : "",
    "language": (oContext && oContext.userLanguage) ? oContext.userLanguage : null,
    "isoCurrencyCode": (oContext && oContext.isoCurrencyCode) ? oContext.isoCurrencyCode : null,
    "recordCount": iRecordCount
  });
};

/**
 * @summary This function will provide a list of external items that you searched for.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.ExternalMasterdata.getItemListBySearchCriteria
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oGetItemListBySearchCriteriaRequest
 *            Stringified Object from the createGetItemListBySearchCriteriaRequest.
 *            Data type is string but internal data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              query: "camera",
 *              language: "en_US",
 *              isoCurrencyCode: "USD",
 *              recordCount: 60
 *            }
 * @function
 */
comGkSoftwareGkrAppEnablementApi.ExternalMasterdata.prototype.getItemListBySearchCriteria = function (sResultFunction, sErrorFunction, oGetItemListBySearchCriteriaRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getItemListBySearchCriteria", sResultFunction, sErrorFunction, oGetItemListBySearchCriteriaRequest);
};


/**
 * @summary This function will create a request object for the function 'getImageUrl'.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.ExternalMasterdata.createGetExternalImageUrlRequest
 * @param {string} sItemID
 *            The string that is used to search external items.
 * @param {string} oContext
 *            Provides the session context. For example currency, language. Data type is string but internal
 *            data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              businessUnitGroupID: "100000000000000001",
 *              businessUnitID: "9090", // Equivalent to store ID
 *              isoCurrencyCode: "USD",
 *              storeLanguage: "en_US",
 *              tenantID: "004",
 *              userLanguage: "zh_CN",
 *              workstationID: "107"
 *            }
 * @function
 * @returns (String) Returns a stringified Object for the getImageUrl request.
 */
comGkSoftwareGkrAppEnablementApi.ExternalMasterdata.prototype.createGetExternalImageUrlRequest = function (sItemID, oContext) {

  return JSON.stringify({
    "itemID": sItemID,
    "type": "item",
    "language": (oContext && oContext.userLanguage) ? oContext.userLanguage : null,
    "isoCurrencyCode": (oContext && oContext.isoCurrencyCode) ? oContext.isoCurrencyCode : null
  });
};

/**
 * @summary This function will provide an image URL for external items.
 *
 * @author mluzius (Last modified by: mluzius)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.ExternalMasterdata.getImageUrl
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oGetExternalImageUrlRequest
 *            Stringified Object from the createGetExternalImageUrlRequest.
 *            Data type is string but internal data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              itemID: "030039",
 *              type: "item",
 *              language: "en_US",
 *              isoCurrencyCode: "USD"
 *            }
 * @function
 */
comGkSoftwareGkrAppEnablementApi.ExternalMasterdata.prototype.getImageUrl = function (sResultFunction, sErrorFunction, oGetExternalImageUrlRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getImageUrl", sResultFunction, sErrorFunction, oGetExternalImageUrlRequest);
};
