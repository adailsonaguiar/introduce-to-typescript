var Spacecraft = (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entrando no Hyperespa\u00E7o com " + this.propulsor);
    };
    return Spacecraft;
})();
exports.Spacecraft = Spacecraft;
