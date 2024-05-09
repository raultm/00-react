import { Character } from "./Character"
import { api, character, characters } from "../utils/data"
import { useEffect, useState } from "react"


export const CharactersList = () => {

    const [charactersList, setCharactersList] = useState(characters);
    const [page, setPage] = useState(1);

    useEffect(() => { fetchCharacters() }, [page])

    const fetchCharacters = async () => { setCharactersList( await api.characters(page) ) }

    const handleSiguienteClick = () => { setPage(prevPage => prevPage + 1) }

    const handleAnteriorClick  = () => { setPage(prevPage => prevPage - 1) }
    

    return (
        <>
            <h1 className="text-4xl font-bold p-10 justify-center">Galería de Rick y Morty</h1>
            {(page>1) && <button onClick={handleAnteriorClick}>Anterior</button>}
            Pagina {page} - <button onClick={handleSiguienteClick}>Siguiente</button>
            <div className="grid grid-cols-4 gap-4 justify-center">
                {charactersList.results
                    //.filter(character => character.status == "Alive")
                    .map(character => <Character key={character.id} showIcon={character.id % 3 == 0} nombre={character.name} especie={character.species} src={character.image} />)}
            </div>
        </>
    )
}
