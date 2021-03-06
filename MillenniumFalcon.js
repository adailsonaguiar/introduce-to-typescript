var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_ship_1 = require('./base-ship');
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
})(base_ship_1.Spacecraft);
exports["default"] = MillenniumFalcon;
