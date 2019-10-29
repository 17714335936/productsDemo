sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageStrip",
	"sap/m/BusyDialog",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/MessagePopover",
	"sap/m/MessagePopoverItem"
], function(Controller, History, MessageStrip, BusyDialog, MessageBox, MessageToast, MessagePopover, MessagePopoverItem) {
	"use strict";

	return Controller.extend("com.myorg.myUI5App.controller.BaseController", {

		globalBusyDialog: new BusyDialog(),

		onInit: function() {
			var oRouter, oTarget;
			oRouter = this.getRouter();
		},

		getRouter: function(oView) {
			return sap.ui.core.UIComponent.getRouterFor(oView);
		},

		globalBusyOn: function() {
			if (!this.globalBusyDialog) {
				this.globalBusyDialog = new sap.m.BusyDialog();
			}
			this.globalBusyDialog.open();
		},

		globalBusyOff: function() {
			this.globalBusyDialog.close();
		},

		getGlobalProperty: function(sPath) {
			return this.getOwnerComponent().getModel("globalProperties").getProperty(sPath);
		},

		setGlobalProperty: function(sPath, oValue) {
			this.getOwnerComponent().getModel("globalProperties").setProperty(sPath, oValue);
			return true;
		},

		valuesCleanup: function(ids) {
			for (var i = 0, length = ids.length; i < length; i++) {
				this.getView().byId(ids[i]).setValue("");
				this.getView().byId(ids[i]).setValueState(sap.ui.core.ValueState.None);
			}
		},

		getI18nText: function(text) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			if (resourceBundle.hasText(text)) {
				return resourceBundle.getText(text);
			} else {
				return "";
			}
		},

		setBusy: function(id, isBusy) {
			var that = this;
			setTimeout(function() {
				that.getView().byId(id).setBusy(isBusy);
			}, 0);
		},

		getInputValue: function(id) {
			return this.getView().byId(id).getValue();
		},

		setInputValue: function(id, value) {
			this.getView().byId(id).setValue(value);
			return true;
		},

		getContentDensityClass: function() {
			if (!this.sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this.sContentDensityClass = "sapUiSizeCompact";
				} else {
					this.sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this.sContentDensityClass;
		},

		//---警告类信息弹框
		showWarning: function(sText) {
			MessageBox.warning(sText, {
				styleClass: this.getContentDensityClass()
			});
		},

		//---信息类信息弹框类
		showInformation: function(sText) {
			MessageBox.information(sText, {
				styleClass: this.getContentDensityClass()
			});
		}
	});
});