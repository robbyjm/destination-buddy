sap.ui.define(
  ["sap/ui/core/mvc/Controller", "../model/formatter", "sap/m/MessageToast"],
  function (Controller, formatter, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.basicTemplate.controller.End", {
      formatter: formatter,
      onPress: function () {
        const sUserInfo = this.oView.getModel().getJSON();
        navigator.clipboard.writeText(sUserInfo)
        this.getView().byId('code').prettyPrint()
        MessageToast.show("User information copied to clipboard");
      },
      prettyPrint: function(oEvent) {
        oControlEvent.getSource().prettyPrint()
      }
    });
  }
);
