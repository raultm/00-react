import { useEffect, useState } from 'react'
import { api } from "../utils/data"

export const  useApiList= (fn) => {
  
    const [charactersList, setCharactersList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => { fetchCharacters() }, [page])

    // useEffect(() => { console.log(charactersList) }, [charactersList])

    const fetchCharacters = async () => { setCharactersList( await fn(page) ) }

    const handleSiguienteClick = () => { setPage(prevPage => prevPage + 1) }

    const handleAnteriorClick  = () => { setPage(prevPage => prevPage - 1) }
  
    return {
        charactersList,
        page,
        handleSiguienteClick,
        handleAnteriorClick
    }
}
