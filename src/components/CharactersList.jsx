import { Character } from "./Character"
import { useApiList } from "../hooks/useApiList"
import { useEffect } from "react"


export const CharactersList = () => {

    //const {charactersList, page, handleAnteriorClick, handleSiguienteClick} = useApiList([])

    const apilist = useApiList([])
    
    useEffect(() => {
      console.log(apilist.page)
    }, [apilist.page])
    

    return (
        <>
            <h1 className="text-4xl font-bold p-10 justify-center">Galería de Rick y Morty</h1>
            {(apilist.page>1) && <button onClick={apilist.handleAnteriorClick}>Anterior</button>}
            Pagina {apilist.page} - <button onClick={apilist.handleSiguienteClick}>Siguiente</button>
            <div className="grid grid-cols-4 gap-4 justify-center">
                { apilist.charactersList
                    .map(character => <Character key={character.id} showIcon={character.id % 3 == 0} nombre={character.name} especie={character.species} src={character.image} />)}
            </div>
        </>
    )
}
