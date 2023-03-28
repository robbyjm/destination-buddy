sap.ui.define(
  ["sap/ui/core/mvc/Controller", "../model/formatter", "sap/m/MessageToast"],
  function (Controller, formatter, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.basicTemplate.controller.Mid", {
      formatter: formatter,

      onInit: function () {},
      onSubmit: function (oEvent) {
        let value = this.getView().byId("input");
        let oContext = sap.ui.getCore().byId("__xmlview0--destinationList");
        let oDestination = oContext.getSelectedContexts()[0].getObject();
        let url = oDestination.URL;
        this.callDestination(url,value);
      },
      callDestination(url,value) {
        fetch(url + value.getValue(), { mode: "no-cors" }).then((response) => {
 
        });
      },
    });
  }
);
