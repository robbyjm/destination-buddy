sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Begin", {

		formatter: formatter,

		onInit: function () {
		},
		onDestinationPress: function (oEvent) {
			let oBinding = oEvent.getParameters().listItem.getBindingContext('buddy').getObject()
			//oEvent.getBindingContext().getObject()
		}
	});
});