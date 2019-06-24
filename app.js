var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Spacecraft = (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entrando no Hyperespa\u00E7o com " + this.propulsor);
    };
    return Spacecraft;
})();
var tiro = new Spacecraft('hyperdrive');
tiro.jumpIntoHyperspace();
var MillenniumFalcon = (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        _super.call(this, 'hyperdrive');
        this.cargoContainers = 4;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Falha ao entrar no hyperspace!');
        }
    };
    return MillenniumFalcon;
})(Spacecraft);
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("A falcon \u00E9 boa para cargas? " + (goodForTheJob(falcon) ? 'sim' : 'não'));
