// define a root UIComponent which exposes the main view
jQuery.sap.declare("User.Component");
jQuery.sap.require("sap.ca.scfld.md.ComponentBase");

// extent of sap.ca.scfld.md.ComponentBase
sap.ca.scfld.md.ComponentBase.extend("User.Component", {
	metadata : sap.ca.scfld.md.ComponentBase.createMetaData("FS", {
		"name": "Fullscreen Sample",
		"version" : "1.1.0-SNAPSHOT",
		"library" : "User",
		"includes" : [],
		"dependencies" : {
			"libs" : ["sap.m", "sap.me"],
			"components" : [],
		},
		viewPath : "User.view",
		fullScreenPageRoutes : {
			// fill the routes to your full screen pages in here.
			"fullscreen" : {
				"pattern" : "",
				"view" : "S1"
			},
			"subscreen" : {
				"name" : "S2",
				"pattern" : "S2/{contextPath}",
				"view" : "S2"
			}
		},
	}),	

	/**
	 * Initialize the application
	 * 
	 * @returns {sap.ui.core.Control} the content
	 */
	createContent : function() {
		var oViewData = {component: this};
		return sap.ui.view({
			viewName : "User.Main",
			type : sap.ui.core.mvc.ViewType.XML,
			viewData : oViewData
		});
	}
});