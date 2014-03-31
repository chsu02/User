sap.ui.controller("User.Main", {

	onInit : function() {
		jQuery.sap.require("sap.ca.scfld.md.Startup");				
		sap.ca.scfld.md.Startup.init('User', this);
	}
});
