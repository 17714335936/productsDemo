sap.ui.define([
	"com/myorg/myUI5App/controller/BaseController"
], function(Controller) {
	"use strict";
	return Controller.extend("com.myorg.myUI5App.controller.App", {

		onInit: function() {
			this.getView().addStyleClass(this.getContentDensityClass());
		},

		onBeforeRendering: function() {}
	});

});