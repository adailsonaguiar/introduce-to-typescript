import { Spacecraft, Containership } from './base-ship'
import MillenniumFalcon from './MillenniumFalcon'

let tiro = new Spacecraft('hyperdrive')
tiro.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`A falcon é boa para cargas? ${goodForTheJob(falcon) ? 'sim' : 'não'}`)