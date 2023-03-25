sap.ui.define(
  ["sap/ui/core/mvc/Controller", "../model/formatter"],
  function (Controller, formatter) {
    "use strict";

    return Controller.extend("sap.ui.demo.basicTemplate.controller.End", {
      formatter: formatter,

      onInit: function () {
        const oView = this.getView();
        const oModel = this.getOwnerComponent().getModel();
        const oCodeEditor = oView.byId("codeEditor");
        const oCodeEditor2 = this.byId("codeEditor");
        //oCodeEditor.setValue(oModel.getJSON());
      },
    });
  }
);
