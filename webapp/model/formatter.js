sap.ui.define([], function () {
	"use strict";
	return {
		color: function (sColor) {
			switch (sColor) {
				case 'NoAuthentication':
					return 'Error'
				case 'BasicAuthentication':
					return 'Warning'
				default:
					return 'Information'
			}
		},
		code: function(oCode) {
			return JSON.stringify(oCode)
		}
	};
});

//buddy/destination-configuration/v1/subaccountDestinations
//user-api/attributes