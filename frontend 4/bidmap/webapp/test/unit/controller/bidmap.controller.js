/*global QUnit*/

sap.ui.define([
	"comsouthend./bidmap/controller/bidmap.controller"
], function (Controller) {
	"use strict";

	QUnit.module("bidmap Controller");

	QUnit.test("I should test the bidmap controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
