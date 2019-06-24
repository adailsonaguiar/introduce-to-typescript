import { Spacecraft, Containership } from './base-ship'

export default class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number

    constructor() {
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else { console.log('Falha ao entrar no hyperspace!') }
    }
}