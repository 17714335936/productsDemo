sap.ui.define([
	"com/myorg/myUI5App/controller/BaseController",
	"com/myorg/myUI5App/model/formatter",
	"sap/m/MessagePopover",
	"sap/m/MessagePopoverItem"
], function(Controller, formatter, MessagePopover, MessagePopoverItem) {
	"use strict";
	return Controller.extend("com.myorg.myUI5App.controller.AppList", {

		formatter: formatter,

		onInit: function() {},

		onBeforeRendering: function() {}
	});
});