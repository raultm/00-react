import { Character } from "./Character"

export const CharactersList = () => {
    return (
        <>
            <h1 className="text-4xl font-bold p-10 justify-center">Galería de Rick y Morty</h1>
            <div className="grid grid-cols-4 gap-4 justify-center">
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
            </div>
        </>
    )
}
