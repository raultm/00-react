import { Character } from "./Character"
import { api, character, characters } from "../utils/data"
import { useEffect, useState } from "react"


export const CharactersList = () => {

    const [charactersList, setCharactersList] = useState(characters);

    useEffect(() => {
        async function fetchData() {
            const response = await api.characters();
            setCharactersList(response)
        }
        fetchData();
    }, [])

    return (
        <>
            <h1 className="text-4xl font-bold p-10 justify-center">Galería de Rick y Morty</h1>
            <div className="grid grid-cols-4 gap-4 justify-center">
                {charactersList.results.map(character => <Character key={character.id} showIcon={character.id % 3 == 0} nombre={character.name} especie={character.species} src={character.image} />)}
            </div>
        </>
    )
}
