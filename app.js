var base_ship_1 = require('./base-ship');
var MillenniumFalcon_1 = require('./MillenniumFalcon');
var tiro = new base_ship_1.Spacecraft('hyperdrive');
tiro.jumpIntoHyperspace();
var falcon = new MillenniumFalcon_1["default"]();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("A falcon \u00E9 boa para cargas? " + (goodForTheJob(falcon) ? 'sim' : 'não'));
