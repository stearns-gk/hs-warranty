// TODO Create object documentation.
// Working on Mobile POS, and Omni POS.

/*global oAppEnablementConnectorInstance*/

// Shorthand syntax to check if the namespace already exists, if not create an empty Object.
var comGkSoftwareGkrAppEnablementApi = comGkSoftwareGkrAppEnablementApi || {};

/**
 * @class
 * @classdesc App Enablement class for all functionalities related to GK POS like getting single item
 * information, registering items, getting the current transaction
 * @author sschreiner
 * @since 2.0.0
 * @public
 * @name com.gk_software.gkr.app_enablement.api.Pos
 */
comGkSoftwareGkrAppEnablementApi.Pos = function () {
  "use strict";
  this._prefix = "comGkSoftwareGkrAppEnablementApi.Pos/";
};

/**
 * @summary This function will create a request object for the function 'getPOSItemInformationByID'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createGetPOSItemInformationByIDRequest
 * @param {string} sItemID
 *            Item ID to get the item information for GK POS items.
 * @function
 * @returns (String) Returns a stringifi+ed Object for the getPOSItemInformationByID request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createGetPOSItemInformationByIDRequest = function (sItemID) {

  return JSON.stringify({
    "itemID": sItemID
  });
};


/**
 * @summary This function will provide GK Pos item information for a given item ID.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.getPOSItemInformationByID
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oGetPOSItemInformationByIDRequest
 *            stringified object from the createGetPOSItemInformationByIDRequest.
 *            Data type is string but internal
 *            data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              itemID: "030039"
 *            }
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.getPOSItemInformationByID = function (sResultFunction, sErrorFunction, oGetPOSItemInformationByIDRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getPOSItemInformationByID", sResultFunction, sErrorFunction, oGetPOSItemInformationByIDRequest);
};

/**
 * @summary  *This function contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 *           This function will create a request object for the function 'registerLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createRegisterLineItemRequest
 * @param {string} sItemID
 *            Item ID to get the item information for GK POS items.
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
 * @param {integer} iQuantity
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {integer} iActualUnitPrice
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {string} sCustomerOrderID
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {string} sCustomerOrderSequenceNumber
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {string} sSalesOrderTypeCode
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {string} sSalesOrderDeliveryTypeCode
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {string} sRequestedDeliveryDate
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {string} sItemType
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {Object[]} aRetailPriceModifierList
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {Object[]} aLineItemExtensionList
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @param {Object[]} aPrintAdditionalLineItemTextLineList
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * @function
 * @returns (String) Returns a stringified object for the registerLineItem request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createRegisterLineItemRequest = function (sItemID, oContext, iQuantity, iActualUnitPrice,
                                                                                         sCustomerOrderID, sCustomerOrderSequenceNumber, sSalesOrderTypeCode,
                                                                                         sSalesOrderDeliveryTypeCode, sRequestedDeliveryDate, sItemType, aRetailPriceModifierList, aLineItemExtensionList, aPrintAdditionalLineItemTextLineList) {

  return JSON.stringify({
    "itemID": sItemID,
    "language": (oContext && oContext.userLanguage) ? oContext.userLanguage : null,
    "isoCurrencyCode": (oContext && oContext.isoCurrencyCode) ? oContext.isoCurrencyCode : null,
    "quantity": iQuantity, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "actualUnitPrice":iActualUnitPrice, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "customerOrderID": sCustomerOrderID, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "customerOrderSequenceNumber": sCustomerOrderSequenceNumber, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "salesOrderTypeCode": sSalesOrderTypeCode, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "salesOrderDeliveryTypeCode": sSalesOrderDeliveryTypeCode, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "requestedDeliveryDate": sRequestedDeliveryDate, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "itemType": sItemType, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "retailPriceModifierList": aRetailPriceModifierList, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "lineItemExtensionList": aLineItemExtensionList, // This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "printAdditionalLineItemTextLineList": aPrintAdditionalLineItemTextLineList // This parameter is a non-recommended interface and is potentially subject to change in future releases.
  });
};



/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerLineItem' and 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createPrintAdditionalLineItemTextLineObject
 * @param {string} sText
 * @param {string} sSortOrder
 * @param {string} sStyleID
 * @returns (String) Returns a stringified object of PrintAdditionalLineItemTextLine.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createPrintAdditionalLineItemTextLineObject = function (sText, sSortOrder, sStyleID) {

  return {
    "text" : sText,
    "sortOrder" : sSortOrder,
    "styleID" : sStyleID
  };
};



/**
 * @summary *This function contains parameters that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * This function will register a GK Pos item in the current transaction of the Pos
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.registerLineItem
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oRegisterLineItemRequest
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases. stringified object from the createRegisterCustomerRequest.
 *            stringified object from the createRegisterLineItemRequest.
 *            Data type is string but internal
 *            data type is Object.
 *            The internally used object should look like the following example:
 *            {
 *              itemID: "030039",
 *              language: "en_US",
 *              isoCurrencyCode: "USD",
 *              quantity: 1
 *            }
 *
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.registerLineItem = function (sResultFunction, sErrorFunction, oRegisterLineItemRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "registerLineItem", sResultFunction, sErrorFunction, oRegisterLineItemRequest);
};


/*
 *
 *
 *
 *
 */


/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createRegisterExternalLineItemRequest
 * @param {string} sPosItemIDsItemID
 * @param {string} sPosDepartmentID
 * @param {string} sUnitOfMeasureCode
 * @param {string} sItemType
 * @param {string} sRegularUnitPrice
 * @param {string} sActualUnitPrice
 * @param {integer} iQuantity
 * @param {string} sUnits
 * @param {string} sQuantityInputMethod
 * @param {string} sLength
 * @param {string} sWidth
 * @param {string} sHeight
 * @param {string} sReceiptText
 * @param {string} sReceiptDescription
 * @param {boolean} bWicFlag
 * @param {boolean} bAllowFoodStampFlag
 * @param {string} sRegistrationNumber
 * @param {boolean} bDiscountFlag
 * @param {boolean} bFrequentShopperPointsEligibilityFlag
 * @param {string} sDiscountTypeCode
 * @param {string} sPriceChangeTypeCode
 * @param {string} sPriceTypeCode
 * @param {boolean} bNotConsideredByLoyaltyEngineFlag
 * @param {string} sMerchandiseHierarchyGroupName
 * @param {string} sMerchandiseHierarchyGroupDescription
 * @param {string} sItemClassCode
 * @param {boolean} bProhibitTaxExemptFlag
 * @param {boolean} bProhibitReturnFlag
 * @param {string} sWarrantyDuration
 * @param {string} sDepositTypeCode
 * @param {string} sTaxExemptCode
 * @param {string} sMainPOSItemID
 * @param {string} sMainMerchandiseHierarchyGroupIDQualifier
 * @param {string} sMainMerchandiseHierarchyGroupID
 * @param {string} sTaxGroupID
 * @param {string} sTareCount,
 * @param {Object[]} aSaleReturnLineItemCharacteristicList
 * @param {Object[]} aSaleReturnLineItemMerchandiseHierarchyGroupList
 * @param {Object[]} aRetailTransactionLineItemI18NTextList
 * @param {string} sSerialNumber,
 * @param {object} oSaleReturnLineItemSalesOrderObject
 * @param {string} sReasonCode
 * @param {string} sReasonCodeGroupCode
 * @param {string} sReasonDescription,
 * @param {object} oRetailTransactionLineItemAdditionalParameterList
 * @param {Object[]} aRetailPriceModifierList
 * @param {Object[]} aLineItemExtensionList
 * @param {Object[]} aPrintAdditionalLineItemTextLineList
 * @returns (String) Returns a stringified object of RegisterExternalLineItemRequest.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createRegisterExternalLineItemRequest = function (sPosItemID, sItemID, sPosDepartmentID, sUnitOfMeasureCode, sItemType, sRegularUnitPrice, sActualUnitPrice, iQuantity, sUnits, sQuantityInputMethod, sLength, sWidth, sHeight, sReceiptText, sReceiptDescription, bWicFlag , bAllowFoodStampFlag , sRegistrationNumber, bDiscountFlag, bFrequentShopperPointsEligibilityFlag, sDiscountTypeCode, sPriceChangeTypeCode, sPriceTypeCode, bNotConsideredByLoyaltyEngineFlag, sMerchandiseHierarchyGroupName, sMerchandiseHierarchyGroupDescription, sItemClassCode , bProhibitTaxExemptFlag, bProhibitReturnFlag, sWarrantyDuration, sDepositTypeCode, sTaxExemptCode, sMainPOSItemID, sMainMerchandiseHierarchyGroupIDQualifier, sMainMerchandiseHierarchyGroupID, sTaxGroupID, sTareCount,
                                                                                                 aSaleReturnLineItemCharacteristicList, aSaleReturnLineItemMerchandiseHierarchyGroupList, aRetailTransactionLineItemI18NTextList, sSerialNumber,
                                                                                                 oSaleReturnLineItemSalesOrderObject, sReasonCode, sReasonCodeGroupCode, sReasonDescription,
                                                                                                 oRetailTransactionLineItemAdditionalParameterList, aRetailPriceModifierList, aLineItemExtensionList, aPrintAdditionalLineItemTextLineList) {
  return JSON.stringify({
    "posItemID": sPosItemID,
    "itemID": sItemID,
    "posDepartmentID": sPosDepartmentID,
    "unitOfMeasureCode": sUnitOfMeasureCode,
    "itemType": sItemType,
    "regularUnitPrice": sRegularUnitPrice,
    "actualUnitPrice": sActualUnitPrice,
    "quantity": iQuantity,
    "units": sUnits,
    "quantityInputMethod": sQuantityInputMethod,
    "length": sLength,
    "width": sWidth,
    "height": sHeight,
    "receiptText": sReceiptText,
    "receiptDescription": sReceiptDescription,
    "wicFlag": bWicFlag,
    "allowFoodStampFlag": bAllowFoodStampFlag,
    "registrationNumber": sRegistrationNumber,
    "discountFlag": bDiscountFlag,
    "frequentShopperPointsEligibilityFlag": bFrequentShopperPointsEligibilityFlag,
    "discountTypeCode": sDiscountTypeCode,
    "priceChangeTypeCode": sPriceChangeTypeCode,
    "priceTypeCode": sPriceTypeCode,
    "notConsideredByLoyaltyEngineFlag": bNotConsideredByLoyaltyEngineFlag,
    "merchandiseHierarchyGroupName": sMerchandiseHierarchyGroupName,
    "merchandiseHierarchyGroupDescription": sMerchandiseHierarchyGroupDescription,
    "itemClassCode": sItemClassCode ,
    "prohibitTaxExemptFlag": bProhibitTaxExemptFlag,
    "prohibitReturnFlag": bProhibitReturnFlag,
    "warrantyDuration": sWarrantyDuration,
    "depositTypeCode": sDepositTypeCode,
    "taxExemptCode": sTaxExemptCode,
    "mainPOSItemID": sMainPOSItemID,
    "mainMerchandiseHierarchyGroupIDQualifier": sMainMerchandiseHierarchyGroupIDQualifier,
    "mainMerchandiseHierarchyGroupID": sMainMerchandiseHierarchyGroupID,
    "taxGroupID": sTaxGroupID,
    "tareCount": sTareCount,

    "saleReturnLineItemCharacteristicList": aSaleReturnLineItemCharacteristicList,

    "saleReturnLineItemMerchandiseHierarchyGroupList": aSaleReturnLineItemMerchandiseHierarchyGroupList,

    "retailTransactionLineItemI18NTextList": aRetailTransactionLineItemI18NTextList,


    "serializedUnitModifer":{
      "serialNumber": sSerialNumber
    },

    "saleReturnLineItemSalesOrder": oSaleReturnLineItemSalesOrderObject,

    "reasonCode": sReasonCode,
    "reasonCodeGroupCode": sReasonCodeGroupCode,
    "reasonDescription": sReasonDescription,

    "retailTransactionLineItemAdditionalParameterList": oRetailTransactionLineItemAdditionalParameterList,

    "retailPriceModifierList": aRetailPriceModifierList,

    "lineItemExtensionList": aLineItemExtensionList,

    "printAdditionalLineItemTextLineList": aPrintAdditionalLineItemTextLineList

  });
};




/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createSaleReturnLineItemCharacteristicObject
 * @param {string} sCharacteristicID
 * @param {string} sCharacteristicValueID
 * @param {string} sMerchandiseHierarchyGroupID
 * @returns (String) Returns a stringified object of SaleReturnLineItemMerchandiseHierarchyGroup.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createSaleReturnLineItemCharacteristicObject = function (sCharacteristicID, sCharacteristicValueID, sCharacteristicValueName ){

  return {
    "characteristicID": sCharacteristicID,
    "characteristicValueID": sCharacteristicValueID,
    "characteristicValueName": sCharacteristicValueName
  };
};



/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createSaleReturnLineItemMerchandiseHierarchyGroupObject
 * @param {string} sMerchandiseHierarchyGroupIDQualifier
 * @param {string} sMerchandiseHierarchyGroupID
 * @returns (String) Returns a stringified object of SaleReturnLineItemMerchandiseHierarchyGroup.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createSaleReturnLineItemMerchandiseHierarchyGroupObject = function (sMerchandiseHierarchyGroupIDQualifier, sMerchandiseHierarchyGroupID ){

  return {
    "merchandiseHierarchyGroupIDQualifier": sMerchandiseHierarchyGroupIDQualifier,
    "merchandiseHierarchyGroupID": sMerchandiseHierarchyGroupID
  }
};




/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createRetailTransactionLineItemI18NTextObject
 * @param {integer} iTextSequenceNumber
 * @param {string} sLanguageID
 * @param {string} sCategory
 * @param {string} sText
 * @param {boolean} bPictureFlag
 * @returns (String) Returns a stringified object of RetailTransactionLineItemI18NText.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createRetailTransactionLineItemI18NTextObject = function (iTextSequenceNumber, sLanguageID, sCategory, sText, bPictureFlag){

  return {
    "textSequenceNumber": iTextSequenceNumber,
    "languageID": sLanguageID,
    "category": sCategory,
    "text": sText,
    "pictureFlag": bPictureFlag
  };
};




/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createSaleReturnLineItemSalesOrderObject
 * @param {string} sExternalCustomerOrderID
 * @param {string} sCustomerOrderSequenceNumber
 * @param {string} sSalesOrderTypeCode
 * @param {string} sSalesOrderDeliveryTypeCode
 * @param {string} sRequestedDeliveryDate
 * @returns (String) Returns a stringified object of SaleReturnLineItemSalesOrder.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createSaleReturnLineItemSalesOrderObject = function (   sExternalCustomerOrderID,sCustomerOrderSequenceNumber,
                                                                                                       sSalesOrderTypeCode, sSalesOrderDeliveryTypeCode,sRequestedDeliveryDate) {

  return {
    "externalCustomerOrderID": sExternalCustomerOrderID,
    "customerOrderSequenceNumber": sCustomerOrderSequenceNumber,
    "salesOrderTypeCode": sSalesOrderTypeCode,
    "salesOrderDeliveryTypeCode": sSalesOrderDeliveryTypeCode,
    "requestedDeliveryDate": sRequestedDeliveryDate
  };
};



/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createRetailTransactionLineItemAdditionalParameterObject
 * @param {string} sExternalParameterID
 * @param {string} sParameterName
 * @param {string} sParameterValue
 * @returns (String) Returns a stringified object of RetailTransactionLineItemAdditionalParameter.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createRetailTransactionLineItemAdditionalParameterObject = function (sExternalParameterID, sParameterName, sParameterValue){

  return {
    "externalParameterID": sExternalParameterID,
    "parameterName": sParameterName,
    "parameterValue": sParameterValue
  };
};


/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createRetailPriceModifierObject
 * @param {integer} iRetailPriceModifierSequenceNumber
 * @param {string} sPercent
 * @param {string} sAmount
 * @param {string} sExtendedAmountBeforeModification
 * @param {string} sExtendedAmountAfterModification
 * @param {string} sAppliedQuantity
 * @param {integer} iTriggerSequenceNumber
 * @param {string} sExtraAmount
 * @param {string} sRoundingAmount
 * @param {string} sCalculationBaseAmount
 * @param {object} oRetailTransactionPriceDerivationRule
 * @param {Object[]} aSaleReturnLineItemPromotionTriggerList
 * @returns (String) Returns a stringified object of RetailPriceModifier.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createRetailPriceModifierObject = function (iRetailPriceModifierSequenceNumber, sPercent, sAmount,  sExtendedAmountBeforeModification, sExtendedAmountAfterModification,  sAppliedQuantity, iTriggerSequenceNumber, sExtraAmount, sRoundingAmount, sCalculationBaseAmount, oRetailTransactionPriceDerivationRule, aSaleReturnLineItemPromotionTriggerList){

  return {
    "retailPriceModifierSequenceNumber": iRetailPriceModifierSequenceNumber,
    "percent": sPercent,
    "amount": sAmount,
    "extendedAmountBeforeModification": sExtendedAmountBeforeModification,
    "extendedAmountAfterModification": sExtendedAmountAfterModification,
    "appliedQuantity": sAppliedQuantity,
    "triggerSequenceNumber": iTriggerSequenceNumber,
    "extraAmount": sExtraAmount,
    "roundingAmount": sRoundingAmount,
    "calculationBaseAmount": sCalculationBaseAmount,
    "retailTransactionPriceDerivationRule": oRetailTransactionPriceDerivationRule,
    "saleReturnLineItemPromotionTriggerList": aSaleReturnLineItemPromotionTriggerList
  };
};



/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createRetailTransactionPriceDerivationRuleObject
 * @param {integer} iPromotionID
 * @param {integer} iPriceDerivationRuleID
 * @param {integer} iPriceDerivationRuleEligibilityID
 * @param {string} sPromotionDescription
 * @param {string} sReceiptPrinterName
 * @param {integer} iPromotionPriceDerivationRuleSequence
 * @param {integer} iPromotionPriceDerivationRuleResolution
 * @param {string} sPromotionPriceDerivationRuleTypeCode
 * @param {string} sPriceModificationMethodCode
 * @param {string} sPriceDerivationRuleDescription
 * @param {string} sPromotionOriginatorTypeCode
 * @param {string} sExternalPromotionID
 * @param {string} sExternalPriceDerivationRuleID
 * @param {string} sTriggerQuantity
 * @param {string} sGiftCertificateExpirationDate
 * @param {string} sDiscountMethodCode
 * @param {boolean} bProhibitPrintFlag
 * @param {string} sTenderTypeCode
 * @param {string} sPromotionTypeName
 * @param {string} sCalculationBase
 * @param {boolean} bNoEffectOnSubsequentPriceDerivationRulesFlag
 * @param {boolean} bProhibitTransactionRelatedPriceDerivationRulesFlag
 * @param {string} sCouponPrintoutID
 * @param {string} sCouponPrintoutRule
 * @param {string} sCouponPrintoutText
 * @param {boolean} bExclusiveFlag
 * @param {boolean} bConsiderPreviousPriceDerivationRulesFlag
 * @param {string} sConcurrenceControlVector
 * @param {integer} iAppliedCount
 * @param {integer} iPrintoutValidityPeriod
 * @returns (String) Returns a stringified object of RetailTransactionPriceDerivationRule.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createRetailTransactionPriceDerivationRuleObject = function (iPromotionID, iPriceDerivationRuleID, iPriceDerivationRuleEligibilityID, sPromotionDescription, sReceiptPrinterName, iPromotionPriceDerivationRuleSequence, iPromotionPriceDerivationRuleResolution, sPromotionPriceDerivationRuleTypeCode, sPriceModificationMethodCode, sPriceDerivationRuleDescription, sPromotionOriginatorTypeCode, sExternalPromotionID, sExternalPriceDerivationRuleID, sTriggerQuantity, sGiftCertificateExpirationDate, sDiscountMethodCode, bProhibitPrintFlag, sTenderTypeCode, sPromotionTypeName, sCalculationBase, bNoEffectOnSubsequentPriceDerivationRulesFlag, bProhibitTransactionRelatedPriceDerivationRulesFlag, sCouponPrintoutID, sCouponPrintoutRule, sCouponPrintoutText, bExclusiveFlag, bConsiderPreviousPriceDerivationRulesFlag, sConcurrenceControlVector, iAppliedCount, iPrintoutValidityPeriod){

  return {
    "promotionID": iPromotionID,
    "priceDerivationRuleID": iPriceDerivationRuleID,
    "priceDerivationRuleEligibilityID": iPriceDerivationRuleEligibilityID,
    "promotionDescription": sPromotionDescription,
    "receiptPrinterName": sReceiptPrinterName,
    "promotionPriceDerivationRuleSequence": iPromotionPriceDerivationRuleSequence,
    "promotionPriceDerivationRuleResolution": iPromotionPriceDerivationRuleResolution,
    "promotionPriceDerivationRuleTypeCode": sPromotionPriceDerivationRuleTypeCode,
    "priceModificationMethodCode": sPriceModificationMethodCode,
    "priceDerivationRuleDescription": sPriceDerivationRuleDescription,
    "promotionOriginatorTypeCode": sPromotionOriginatorTypeCode,
    "externalPromotionID": sExternalPromotionID,
    "externalPriceDerivationRuleID": sExternalPriceDerivationRuleID,
    "triggerQuantity": sTriggerQuantity,
    "giftCertificateExpirationDate": sGiftCertificateExpirationDate,
    "discountMethodCode": sDiscountMethodCode,
    "prohibitPrintFlag": bProhibitPrintFlag,
    "tenderTypeCode": sTenderTypeCode,
    "promotionTypeName": sPromotionTypeName,
    "calculationBase": sCalculationBase,
    "noEffectOnSubsequentPriceDerivationRulesFlag": bNoEffectOnSubsequentPriceDerivationRulesFlag,
    "prohibitTransactionRelatedPriceDerivationRulesFlag": bProhibitTransactionRelatedPriceDerivationRulesFlag,
    "couponPrintoutID": sCouponPrintoutID,
    "couponPrintoutRule": sCouponPrintoutRule,
    "couponPrintoutText": sCouponPrintoutText,
    "exclusiveFlag": bExclusiveFlag,
    "concurrenceControlVector": sConcurrenceControlVector,
    "appliedCount": iAppliedCount,
    "printoutValidityPeriod": iPrintoutValidityPeriod
  };
};


/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createSaleReturnLineItemPromotionTriggerObject
 * @param {integer} iTriggerSequenceNumber
 * @param {string} sTriggerType
 * @param {string} sTriggerValue
 * @param {string} sPrivilegeType
 * @param {string} sPrivilegeValue
 * @param {string} sReasonCode
 * @param {string} sReasonDescription
 * @param {integer} iTriggerSequenceAddend
 * @returns (String) Returns a stringified object of SaleReturnLineItemPromotionTrigger.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createSaleReturnLineItemPromotionTriggerObject = function (iTriggerSequenceNumber, sTriggerType, sTriggerValue, sPrivilegeType, sPrivilegeValue, sReasonCode, sReasonDescription, iTriggerSequenceAddend){

  return {
    "triggerSequenceNumber": iTriggerSequenceNumber,
    "triggerType": sTriggerType,
    "triggerValue": sTriggerValue,
    "privilegeType": sPrivilegeType,
    "privilegeValue": sPrivilegeValue,
    "reasonCode": sReasonCode,
    "reasonDescription": sReasonDescription,
    "triggerSequenceAddend": iTriggerSequenceAddend
  };
};




/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a sub-request object for the function 'registerExternalLineItem'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createLineItemExtensionObject
 * @param {string} iExtensionKey
 *            Key of the extension data
 * @param {string} sExtensionValue
 *            Value of the extension data
 * @returns (String) Returns a stringified object of LineItemExtension.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createLineItemExtensionObject = function (sExtensionKey, sExtensionValue){
  return {
    "extensionKey": sExtensionKey,
    "extensionValue": sExtensionValue
  };
};


/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases. The function
 * allows to propagate an ExternalRegisterLineItemRequest directly into POS, while specifying directly all relevant item data,
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.registerExternalLineItem
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oRegisterExternalLineItemRequest
 *            stringified object from the createRegisterExternalLineItemRequest.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.registerExternalLineItem = function (sResultFunction, sErrorFunction, oRegisterExternalLineItemRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "registerExternalLineItem", sResultFunction, sErrorFunction, oRegisterExternalLineItemRequest);
};




/*
 *
 *
 */

/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a request object for the function 'setAdditionalTransactionReport'
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createAddAdditionalTransactionReportRequest
 * @param {string} sReportIdentification
 * @param {Object[]} aPrintAdditionalLineItemTextLineList
 * @returns (String) Returns a stringified object of AddAdditionalTransactionReportRequest.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createAddAdditionalTransactionReportRequest = function (sReportIdentification, aPrintAdditionalLineItemTextLineList) {

  return JSON.stringify({
    "reportIdentification" :sReportIdentification,
    "printAdditionalLineItemTextLineList" : aPrintAdditionalLineItemTextLineList
  });
};



/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases. The function
 * allows to set an additional report in the transaction for printing.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.addAdditionalTransactionReport
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oAdditionalTransactionReportRequest
 *            stringified object from the createAddAdditionalTransactionReportRequest.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.addAdditionalTransactionReport = function (sResultFunction, sErrorFunction, oAdditionalTransactionReportRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "addAdditionalTransactionReport", sResultFunction, sErrorFunction, oAdditionalTransactionReportRequest);
};

/**
 * @summary This function will return the current GK Pos transaction
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.getCurrentTransaction
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.getCurrentTransaction = function (sResultFunction, sErrorFunction) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getCurrentTransaction", sResultFunction, sErrorFunction);
};

/**
 * @summary This function will return the last not voided transaction.
 * 
 * @author mfedorenko (Last modified by: mfedorenko)
 * @since 5.6.1
 * @name com.gk_software.gkr.app_enablement.api.Pos.getLastNotVoidedTransaction
 * @param {string} sResultFunction
 * 				Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 * 				Name of the error callback function. Data type is string but internal data type is function.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.getLastNotVoidedTransaction = function (sResultFunction, sErrorFunction) {
	oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getLastNotVoidedTransaction", sResultFunction, sErrorFunction);
};

/**
 * @summary This function will print the given transaction.
 * 
 * @author mfedorenko (Last modified by: mfedorenko)
 * @since 5.6.1
 * @name com.gk_software.gkr.app_enablement.api.Pos.printReport
 * @param {string} sResultFunction
 * 				Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 * 				Name of the error callback function. Data type is string but internal data type is function.
 * @param {Object[]} the transaction to print
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.printReport = function(sResultFunction, sErrorFunction, oTransaction) {
	oAppEnablementConnectorInstance.invokeMethod(this._prefix + "printReport", sResultFunction, sErrorFunction, oTransaction);
};

/**
 * @summary  *This function contains parameters that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * This function will create a request object for the function 'cancelCurrentTransaction'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @deprecated since version 2.1.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createCancelCurrentTransactionRequest
 * @param {boolean} bReasonCodeRequired
 *            *This parameter is a non-recommended interface and is potentially subject to change in future releases. Is a reason code required
 * @param {string} sReasonCode
 *            *This parameter is a non-recommended interface and is potentially subject to change in future releases. The reason code
 * @param {string} sReasonDescription
 *            *This parameter is a non-recommended interface and is potentially subject to change in future releases. The reason description
 * @returns (String) Returns a stringified object for the cancelCurrentTransaction request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createCancelCurrentTransactionRequest = function (bReasonCodeRequired, sReasonCode, sReasonDescription) {

  return {
    "reasonCode": sReasonCode,
    "reasonDescription": sReasonDescription
  };
};

/**
 * @summary  *This function contains parameters that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * This function will create a request object for the function 'cancelCurrentTransaction'.
 *
 * @author mwessel (Last modified by: mwessel)
 * @since 2.1.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createCancelCurrentTransactionRequest
 * @param {string} sReasonCode
 *            *This parameter is a non-recommended interface and is potentially subject to change in future releases. The reason code
 * @param {string} sReasonDescription
 *            *This parameter is a non-recommended interface and is potentially subject to change in future releases. The reason description
 * @returns (String) Returns a stringified object for the cancelCurrentTransaction request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createCancelCurrentTransactionRequest = function (sReasonCode, sReasonDescription) {

  return {
    "reasonCode": sReasonCode,
    "reasonDescription": sReasonDescription
  };
};


/**
 * @summary  *This function contains parameters that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * This function allows to cancel the current transaction in the POS.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.cancelCurrentTransaction
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oCancelCurrentTransactionRequest
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases. stringified object from the createCancelCurrentTransactionRequest.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.cancelCurrentTransaction = function (sResultFunction, sErrorFunction, oCancelCurrentTransactionRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "cancelCurrentTransaction", sResultFunction, sErrorFunction, oCancelCurrentTransactionRequest);
};

/*
 *
 *
 *
 *
 */


/**
 * @summary  *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a request object for the function 'addTransactionExtension'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createAddTransactionExtensionRequest
 * @param {string} sExtensionKey
 * @param {string} sExtensionValue
 * @returns (String) Returns a stringified object for the addTransactionExtension request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createAddTransactionExtensionRequest = function (sExtensionKey, sExtensionValue) {

  return {
    "extensionKey": sExtensionKey,
    "extensionValue": sExtensionValue
  };
};



/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases. The function
 * allows to create extension data in the transaction of the POS,
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.addTransactionExtension
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oAddTransactionExtensionRequest
 *            stringified object from the createAddTransactionExtensionRequest.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.addTransactionExtension = function (sResultFunction, sErrorFunction, oAddTransactionExtensionRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "addTransactionExtension", sResultFunction, sErrorFunction, oAddTransactionExtensionRequest);
};




/**
 * @summary  *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a request object for the function 'updateTransactionExtension'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createUpdateTransactionExtensionRequest
 * @param {string} sExtensionKey
 * @param {string} sExtensionValue
 * @returns (String) Returns a stringified object for the updateTransactionExtension request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createUpdateTransactionExtensionRequest = function (sExtensionKey, sExtensionValue) {

  return {
    "extensionKey": sExtensionKey,
    "extensionValue": sExtensionValue
  };
};


/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases. The function
 * allows to update extension data in the transaction of the POS,
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.updateTransactionExtension
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oUpdateTransactionExtensionRequest
 *            stringified object from the createUpdateTransactionExtensionRequest.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.updateTransactionExtension = function (sResultFunction, sErrorFunction, oUpdateTransactionExtensionRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "updateTransactionExtension", sResultFunction, sErrorFunction, oUpdateTransactionExtensionRequest);
};



/**
 * @summary  *This function is a non-recommended interface and is potentially subject to change in future releases.
 * This function will create a request object for the function 'deleteTransactionExtension'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createDeleteTransactionExtensionRequest
 * @param {string} sExtensionKey
 * @returns (String) Returns a stringified object for the deleteTransactionExtension request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createDeleteTransactionExtensionRequest = function (sExtensionKey) {

  return {
    "extensionKey": sExtensionKey
  };
};


/**
 * @summary *This function is a non-recommended interface and is potentially subject to change in future releases. The function
 * allows to delete extension data in the transaction of the POS,
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.deleteTransactionExtension
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oDeleteTransactionExtensionRequest
 *            stringified object from the createDeleteTransactionExtensionRequest.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.deleteTransactionExtension = function (sResultFunction, sErrorFunction, oDeleteTransactionExtensionRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "deleteTransactionExtension", sResultFunction, sErrorFunction, oDeleteTransactionExtensionRequest);
};


/*
 *
 *
 */



/**
 * @summary This function will return the current customer list of the current GK Pos transaction
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.getCurrentTransaction
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.getCurrentCustomerList = function (sResultFunction, sErrorFunction) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getCurrentCustomerList", sResultFunction, sErrorFunction);
};



/**
 * @summary  *This function contains parameters that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * This function will create a request object for the function 'registerCustomer'.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createRegisterCustomerRequest
 * @param {string} sCustomerId
 *            ID of the customer to register
 * @param {string} sCustomerServiceTypeCode
 *            *This parameter is a non-recommended interface and is potentially subject to change in future releases. The customer service type code
 * @param {string} sPreferredReceiptPrintoutTypeCode
 *            *This parameter is a non-recommended interface and is potentially subject to change in future releases. The preferred receipt printout type code.
 * @returns (String) Returns a stringified object for the registerLineItem request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createRegisterCustomerRequest = function (sCustomerId, sCustomerServiceTypeCode, sPreferredReceiptPrintoutTypeCode) {

  return {
    "customerId": sCustomerId,
    "customerServiceTypeCode": sCustomerServiceTypeCode, // *This parameter is a non-recommended interface and is potentially subject to change in future releases.
    "preferredReceiptPrintoutTypeCode": sPreferredReceiptPrintoutTypeCode // *This parameter is a non-recommended interface and is potentially subject to change in future releases.

  };
};



/**
 * @summary  *This function contains parameters that are a non-recommended interface and is therefore potentially subject to change in future releases.
 * This function allows to register a customer within the current transaction in the POS.
 *
 * @author sschreiner (Last modified by: sschreiner)
 * @since 2.0.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.registerCustomer
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oRegisterCustomerRequest
 *            *This object parameter contains parameter that are a non-recommended interface and is therefore potentially subject to change in future releases. This object is a stringified object from the createRegisterCustomerRequest.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.registerCustomer = function (sResultFunction, sErrorFunction, oRegisterCustomerRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "registerCustomer", sResultFunction, sErrorFunction, oRegisterCustomerRequest);
};



/**
 * @summary This function signals the host implementation that LineItem registrations have been completed.
 *
 * @author jsaade (Last modified by: jsaade)
 * @since 5.6.1
 * @name com.gk_software.gkr.app_enablement.api.Pos.onLineItemRegistrationFinished
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.onLineItemRegistrationFinished = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "onLineItemRegistrationFinished", sResultFunction, sErrorFunction);
};


/**
 * @summary  This function will create a request object for the function 'enterCoupon'.
 *
 * @author nmankel (Last modified by: nmankel)
 * @since 2.1.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.createEnterCouponRequest
 * @param {string} couponNumber
 *            number of the coupon to register
 * @param {string} privilegeType
 *            The privilege type
 * @param {double} privilegeValue
 *            The privilege Value.
 * @returns (String) Returns a stringified object for the enterCoupon request.
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.createEnterCouponRequest = function (sCouponNumber, sPrivilegeType, dPrivilegeValue) {

  return {
    "couponNumber": sCouponNumber,
    "privilegeType": sPrivilegeType,
    "privilegeValue": dPrivilegeValue,
  };
};


/**
 * @summary  This function allows to enter a coupon within the current transaction in the POS.
 *
 * @author nmankel (Last modified by: nmankel)
 * @since 2.1.0
 * @name com.gk_software.gkr.app_enablement.api.Pos.enterCoupon
 * @param {string} sResultFunction
 *            Name of the success callback function. Data type is string but internal data type is function.
 * @param {string} sErrorFunction
 *            Name of the error callback function. Data type is string but internal data type is function.
 * @param {string} oEnterCouponRequest
 *            This object is a stringified object from the createEnterCouponRequest.
 * @function
 */
comGkSoftwareGkrAppEnablementApi.Pos.prototype.enterCoupon = function (sResultFunction, sErrorFunction, oEnterCouponRequest) {
  oAppEnablementConnectorInstance.invokeMethod(this._prefix + "enterCoupon", sResultFunction, sErrorFunction, oEnterCouponRequest);
};