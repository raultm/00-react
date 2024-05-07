
const nombre = "Raúl"
const numero = 3
const array = ["PHP", "Ruby", "Sidera"]
const boolean = false
const fn = () => "hola"
const objeto = {nombre: "Raul", apellidos: "Tierno Magro"}
const fecha = new Date()

export const NamedComponent = () => {
  return (
    <>
    {nombre}
    {numero}
    {array}
    {boolean}
    {fn()}
    {objeto.nombre}
    {JSON.stringify(fecha)}
    </>
  )
}
