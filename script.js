// USO DE OPERADOR TERNARIO
let patas = 4
let accion = "ladra";

(patas == 4) && (accion == "ladra") ? console.log ("Es un perro") : console.log ("NO es un perro")


// USO DE structuredClone

const pokemon1 = {
    nombre: "Chimchar",
    tipo: "fuego",
    nivel: 7,
    region: "Sinnoh",
}

const pokemon2 = structuredClone(pokemon1)
const pokemon3 = structuredClone(pokemon1)

pokemon2.nombre = "Ponyta"
pokemon3.nombre = "Charmander"
pokemon3.region = "Kanto"

console.log(pokemon1)
console.log(pokemon2)
console.log(pokemon3)