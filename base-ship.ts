class Spacecraft {
    constructor(public propulsor: string) { }

    jumpIntoHyperspace() {
        console.log(`Entrando no Hyperespaço com ${this.propulsor}`)
    }
}

interface Containership {
    cargoContainers: number
}

export { Spacecraft, Containership }