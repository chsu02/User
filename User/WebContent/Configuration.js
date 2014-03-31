
jQuery.sap.declare("User.Configuration");
jQuery.sap.require("sap.ca.scfld.md.ConfigurationBase");
jQuery.sap.require("sap.ca.scfld.md.app.Application");

sap.ca.scfld.md.ConfigurationBase.extend("User.Configuration", {

	oServiceParams: {
		serviceList: [
			{
				name: "userlist.svc",
				masterCollection: "Users",
				serviceUrl: "/userlist-web/userlist.svc",
				isDefault: true,
				mockedDataSource: "/User/model/metadata.xml"
			}
		]
	},

	getServiceParams: function () {
		return this.oServiceParams;
	},

	getAppConfig: function() {
		return this.oAppConfig;
	},

	/**
	 * @inherit
	 */
	getServiceList: function () {
		return this.oServiceParams.serviceList;
	},

	getMasterKeyAttributes: function () {
		return ["Id"];
	}

});
