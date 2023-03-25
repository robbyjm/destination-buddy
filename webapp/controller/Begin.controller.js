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
			oEvent.getBindingContext().getObject()
		}
	});
});