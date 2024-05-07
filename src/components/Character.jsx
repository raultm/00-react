
export const nombre = "Rick Sánchez"
export const especie = "Humano"

export const Character = () => {

    return (
        <>
            <img src="https://m.media-amazon.com/images/I/61V11mSkh8L._AC_SL1500_.jpg" height="300px" alt="Imagen"></img>
            <h1>{nombre}</h1>
            <p>{especie}</p>
        </>
    )
}