var oAppEnablementCommonInstance = new comGkSoftwareGkrAppEnablementApi.Common();
var oAppEnablementExternalMasterdataInstance = new comGkSoftwareGkrAppEnablementApi.ExternalMasterdata();
var oAppEnablementMasterdataInstance = new comGkSoftwareGkrAppEnablementApi.Masterdata();
var oAppEnablementPosInstance = new comGkSoftwareGkrAppEnablementApi.Pos();


/* ------------------------------ SESSION CONTEXT -------------------------- */

function getSessionContext() {
    oAppEnablementCommonInstance.getSessionContext('currentSessionContextOK', 'currentSessionContextFailed');
}

function currentSessionContextOK(context) {
    this.context = context;
}

function currentSessionContextFailed(err) {
    console.log("ERROR: " + err);
}

/* ------------------------------- LISTENERS ------------------------------- */


oAppEnablementCommonInstance.registerListener(oAppEnablementCommonInstance.createRegisterListenerRequest("EVENT_TRANSACTION_UPDATED", "processEvent", true));

oAppEnablementCommonInstance.registerListener(oAppEnablementCommonInstance.createRegisterListenerRequest("FLOW_EVENT_CUSTOMER_FLOW_PAYMENTEND_TIMER", "processEvent", true));


/* ----------------------------- EVENT PROCESSING -------------------------- */


function processEvent(oEvent) {
    switch (oEvent["messageHeader"]["messageKey"]) {
        case "EVENT_TRANSACTION_UPDATED":
            // There is definitely a more robust, recursive, 10X programmer way of digging into this JSON
            var lengthLineItemsArray = JSON.stringify(oEvent["payload"]["transaction"]["retailTransactionList"][0]["retailTransactionLineItemList"].length);
            var itemId = JSON.parse(JSON.stringify(oEvent["payload"]["transaction"]["retailTransactionList"][0]["retailTransactionLineItemList"][lengthLineItemsArray-1]["saleReturnLineItemList"][0]["itemID"]));
            var itemName = JSON.parse(JSON.stringify(oEvent["payload"]["transaction"]["retailTransactionList"][0]["retailTransactionLineItemList"][lengthLineItemsArray-1]["saleReturnLineItemList"][0]["receiptText"]));
            
            // Currently the warranty view is only displayed when the item ID below is registered in the txn
            if (itemId === "585822004") {
                displayWarrantyView(itemName);
            }
            
            break;

        case "FLOW_EVENT_CUSTOMER_FLOW_PAYMENTEND_TIMER":
            hideWarrantyView();
            break;
    }
}


/* ------------------------ FUNCTIONS ------------------------ */

// Displays the warranty view when an item eligible for warranty is added to the txn
function displayWarrantyView(itemNameData) {
    var warrantyView = document.getElementById("warrantyView");
    var retailerLogo = document.getElementById("retailerLogo");
    var itemName = document.getElementById("itemName");

    if (warrantyView.style.display === "none") {
        warrantyView.style.display = "block";
        retailerLogo.style.marginTop = "0px";
    } 

    itemName.innerHTML = itemNameData;
}

function hideWarrantyView() {
    var warrantyView = document.getElementById("warrantyView");
    var retailerLogo = document.getElementById("retailerLogo");

    if (warrantyView.style.display === "block") {
        warrantyView.style.display = "none";
        retailerLogo.style.marginTop = "260px";
    } 
}


function registerWarrantyItem(warrantyPeriod) {
    var itemName = document.getElementById("itemName").innerHTML;

    if(warrantyPeriod == 'oneYear') {
        var itemWarranty = "3yr Insurance: " + itemName.slice(0,13); // Item name truncated because if too many chars on single line there is a receipt error
        var actualUnitPrice = "129.99";
    }
    if(warrantyPeriod == 'twoYear') {
        var itemWarranty = "Lifetime Insurance: " + itemName.slice(0,13);
        var actualUnitPrice = "299.99";
    }

    // Modify these hard-coded item params to suit your needs
    var oRequest = {
        "posItemID": "6665556665551",
        "itemID": "66601560156",
        "unitOfMeasureCode": "PCE",
        "itemType": "CO",
        "actualUnitPrice": actualUnitPrice,
        "quantity": "1",
        "receiptText": itemWarranty,
        "registrationNumber": "66601560156",
        "mainPOSItemID": "6665556665551",
        "taxGroupID": "A1", // A1 = Item not tax exempt
    };

    oAppEnablementPosInstance.registerExternalLineItem('registerDataOk', 'registerDataFailed', JSON.stringify(oRequest));

    hideWarrantyView();
}


/* ---------------------------- WINDOW LOAD ---------------------------- */

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function() {
    $("#app-alert").hide();
});