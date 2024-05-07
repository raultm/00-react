
export const nombre = "Rick Sánchez"
export const especie = "Humano"

export const Character = () => {

    return (
        <>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" height="300px" alt="Imagen"></img>
            <h1>{nombre}</h1>
            <p>{especie}</p>
        </>
    )
}