jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");

sap.ca.scfld.md.controller.BaseFullscreenController.extend("User.view.S1", {
    onInit : function() {
        var that = this;
        var oOptions = {
            oPositiveAction : {
                sI18nBtnTxt : "S3_POSITIVE",
                onBtnPressed : function() {
                    jQuery.sap.log.info("detail: accept pressed");
                },
            },
            oNegativeAction : {
                sI18nBtnTxt : "S3_NEGATIVE",
                // sBtnTxt : "",
                onBtnPressed : function(evt) {
                    jQuery.sap.log.info("detail: reject pressed");
                },
            },
            oEditBtn : {
                sI18nBtnTxt : "BTN_EMAIL",  //Email
                onBtnPressed : function(evt) {
                    jQuery.sap.log.info("s3: edit pressed");
                },
                bEnabled : false, // default true
            },
            buttonList : [{
                sI18nBtnTxt : "BTN_PRINT", //Print
                onBtnPressed : function(evt) {
//                    that.setBtnEnabled("mySpecialBtn", false);
                    jQuery.sap.log.info("additional button 1 pressed + additional button 2 disabled");
                }
            }, {
                // do NOT use ID, it breaks everything with duplicate IDs
                // sId : "mySpecialBtn", // optional
                sI18nBtnTxt : "BTN_FAX",  //Fax
                onBtnPressed : function(evt) {
                    jQuery.sap.log.info("additional button 1 pressed");
                }
            }],
            oJamOptions : {
                oShareSettings : {
                    id : "http://www.google.de",
                    display : new sap.m.Text({
                        text : "This is a test"
                    }),
                    share : "blabla"
                }
            },
            oAddBookmarkSettings : {
                title : "Another test"
            },
            additionalShareButtonList : [{
                sI18nBtnTxt : "SHARE_BTN1",
                sIcon : "sap-icon://competitor",
                onBtnPressed : function(evt) {
                    jQuery.sap.log.info("share button 1 pressed");
                }
            }, {
                sI18nBtnTxt : "SHARE_BTN2",
                sIcon : "sap-icon://future",
                onBtnPressed : function(evt) {
                    jQuery.sap.log.info("share button 2 pressed");
                }
            }],
            oEmailSettings : {
                sSubject : this.oApplicationFacade.getResourceBundle().getText("EMAIL_SUBJECT"),
                sRecepient : "do.not.reply@sap.com"
            },
//            oFilterOptions : {
//                aFilterItems : [{
//                    text : "fItem 1",
//                    key : "key 1"
//                }, {
//                    text : "fItem 2",
//                    key : "key 2"
//                }],
//                sSelectedItemKey : "key 2",
//                    onFilterSelected : function(sKey) {
//                        jQuery.sap.log.info(sKey + " has been selected");
//                    }
//                },
//                oSortOptions : {
//                    onSortPressed : function(sKey) {
//                        jQuery.sap.log.info("Sort pressed");
//                    } 
//                    /*aSortItems : [{
//                        text : "sItem 1",
//                        key : "Skey 1"
//                    }, {
//                        text : "sItem 2",
//                        key : "Skey 2"
//                    }],
//                    onSortSelected : function(sKey) {
//                        jQuery.sap.log.info(sKey + " has been selected");
//                    } */
//                },
//                oGroupOptions : {
//                    aGroupItems : [{
//                        text : "gItem 1",
//                        key : "gkey 1"
//                    }, {
//                        text : "gItem 2",
//                        key : "gkey 2"
//                    }],
//                    onGroupSelected : function(sKey) {
//                        jQuery.sap.log.info(sKey + " has been selected");
//                    }
//                }
        };
        this.setHeaderFooterOptions(oOptions);
        this.getView().byId("map-canvas").addStyleClass("myMap");
    },
    onAfterRendering: function () {
        if (!this.initialized) {  
            this.initialized = true;  
            this.geocoder = new google.maps.Geocoder();  
            var latlng = new google.maps.LatLng(37.346, -96.4037);
            var mapOptions = {
                center: latlng,
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.getView().byId("map-canvas").getDomRef(), mapOptions);  
        }  
    },
	_handleSelect: function(oEvent){
		var sContextPath = this.byId("list").getSelectedItem().getBindingContext().sPath.substring(1);
		sap.ui.core.UIComponent.getRouterFor(this).navTo("S2",{contextPath:sContextPath},false);
	}
});