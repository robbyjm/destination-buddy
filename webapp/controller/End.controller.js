sap.ui.define(
  ["sap/ui/core/mvc/Controller", "../model/formatter", "sap/m/MessageToast"],
  function (Controller, formatter, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.basicTemplate.controller.End", {
      formatter: formatter,
      onPress: function () {
        const sUserInfo = this.oView.getModel().getJSON();
        navigator.clipboard.writeText(sUserInfo)

        MessageToast.show("User information copied to clipboard", {
          duration: 3000, // default
          width: "15em", // default
          my: "center bottom", // default
          at: "center bottom", // default
          of: window, // default
          offset: "0 0", // default
          collision: "fit fit", // default
          onClose: null, // default
          autoClose: true, // default
          animationTimingFunction: "ease", // default
          animationDuration: 1000, // default
          closeOnBrowserNavigation: true, // default
        });
      },
    });
  }
);
