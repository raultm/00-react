import { Character } from "./Character"
import { useApiList } from "../hooks/useApiList"


export const CharactersList = () => {

    const {charactersList, page, handleAnteriorClick, handleSiguienteClick} = useApiList([])
    
    return (
        <>
            <h1 className="text-4xl font-bold p-10 justify-center">Galería de Rick y Morty</h1>
            {(page>1) && <button onClick={handleAnteriorClick}>Anterior</button>}
            Pagina {page} - <button onClick={handleSiguienteClick}>Siguiente</button>
            <div className="grid grid-cols-4 gap-4 justify-center">
                { charactersList
                    .map(character => <Character key={character.id} showIcon={character.id % 3 == 0} nombre={character.name} especie={character.species} src={character.image} />)}
            </div>
        </>
    )
}
