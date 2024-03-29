sap.ui.define([], function() {
	"use strict";
	return {
		// 去后导零
		deleteRightZero: function(v) // 去后导零
			{
				if (v === null || v === undefined || v === 0 || v === "0") {
					v = 0;
				}
				return parseFloat(v);
			},

		// 去前导零
		deleteLeftZero: function(v) // 去前导零
			{
				if (v === null || v === undefined || v === 0 || v === "0") {
					v = "0";
				}
				return v.replace(/^0+/, "");
			},

		weightState: function(fMeasure, sUnit) {
			// Boarder values for different status of weight
			var fMaxWeightSuccess = 1;
			var fMaxWeightWarning = 5;
			var fAdjustedMeasure = parseFloat(fMeasure);

			// if the value of fMeasure is not a number, no status will be set
			if (isNaN(fAdjustedMeasure)) {
				return "None";
			} else {

				if (sUnit === "G") {
					fAdjustedMeasure = fMeasure / 1000;
				}

				if (fAdjustedMeasure < 0) {
					return "None";
				} else if (fAdjustedMeasure < fMaxWeightSuccess) {
					return "Success";
				} else if (fAdjustedMeasure < fMaxWeightWarning) {
					return "Warning";
				} else {
					return "Error";
				}
			}
		}
	};
});