import { useEffect, useState } from 'react'
import { api } from "../utils/data"

export const  useApiList= (list) => {
  
    const [charactersList, setCharactersList] = useState(list);
    const [page, setPage] = useState(1);

    useEffect(() => { fetchCharacters() }, [page])

    // useEffect(() => { console.log(charactersList) }, [charactersList])

    const fetchCharacters = async () => { setCharactersList( await api.characters(page) ) }

    const handleSiguienteClick = () => { setPage(prevPage => prevPage + 1) }

    const handleAnteriorClick  = () => { setPage(prevPage => prevPage - 1) }
  
    return {
        charactersList,
        page,
        handleSiguienteClick,
        handleAnteriorClick
    }
}
