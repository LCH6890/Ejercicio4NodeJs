let nombre = "Lorena"
let apellido = "Chamorro"

console.log(nombre.concat(" ", apellido))
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

console.log(estudiante.length)

let estudianteMayus= estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus= estudiante.toLowerCase()
console.log(estudianteMinus)

let slice_nombre = nombre.slice(0, 1)
console.log(slice_nombre)

let slice_apellido = apellido.slice(7, 8)
console.log(slice_apellido)

console.log(nombre.concat(apellido))

console.log(estudiante.includes (nombre))