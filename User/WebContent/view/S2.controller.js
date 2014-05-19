jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");

sap.ca.scfld.md.controller.BaseFullscreenController.extend("User.view.S2", {
    onInit : function() {
    	this.oRouter.attachRouteMatched(function(oEvent) {
    		if (oEvent.getParameter("name") !== "S2") {
    			return;
    		}
    		var _ContextPath = oEvent.getParameter("arguments").contextPath;
    		this.getView().bindElement("/" + _ContextPath);
    	}, this);

//    	var that = this;
    	var editMode = false;
    	var label = "BTN_EDIT";
        var oOptions = {
            oEditBtn : {
                sI18nBtnTxt : label,
                onBtnPressed : function(oEvent) {
                	var bundle = oEvent.getSource().oParent.oParent.oParent.getModel("i18n").getResourceBundle();
                	if (editMode) {		//Save Mode
                		editMode = false;
                		oEvent.getSource().setText(bundle.getText("BTN_EDIT"));
                	} else {			//Edit Mode
                		editMode = true;
                		oEvent.getSource().setText(bundle.getText("BTN_SAVE"));
                	}
                	oEvent.getSource().oParent.oParent.oParent.byId("firstname").setEditable(editMode);
                	oEvent.getSource().oParent.oParent.oParent.byId("lastname").setEditable(editMode);
                	oEvent.getSource().oParent.oParent.oParent.byId("email").setEditable(editMode);
            		oEvent.getSource().oParent.oParent.oParent.byId("contactNo").setEditable(editMode);
                },
                bEnabled : false, // default true
            },
        };
        this.setHeaderFooterOptions(oOptions);
        this.getView();
    },
    _navButtonPress : function(oEvent){
    	var oHistory = sap.ui.core.routing.History.getInstance();
    }
});