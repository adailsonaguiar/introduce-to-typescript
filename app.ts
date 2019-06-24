class Spacecraft {
    constructor(public propulsor: string) { }

    jumpIntoHyperspace() {
        console.log(`Entrando no Hyperespaço com ${this.propulsor}`)
    }
}

let tiro = new Spacecraft('hyperdrive')
tiro.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Containership {

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

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership {
    cargoContainers: number
}

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`A falcon é boa para cargas? ${goodForTheJob(falcon) ? 'sim' : 'não'}`)