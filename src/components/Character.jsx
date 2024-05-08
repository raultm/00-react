import { FaDiceD20 } from "react-icons/fa";
 
export const Character = ({ showIcon, nombre, especie, src}) => {

    return (
        <>
            <div className="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900">
                <div className="w-full h-full text-center">
                    <div className="flex flex-col justify-between h-full">
                        <img src={src} alt="Imagen"></img>
                        <p className="absolute text-sm italic text-gray-800 dark:text-white top-2 right-2">
                            
                        </p>
                        <p className="mt-4 text-lg text-gray-900 dark:text-white">
                            {nombre}
                        </p>
                        <p className="px-6 py-2 text-xs font-thin text-gray-700 dark:text-gray-50">
                            {especie}
                        </p>
                        { showIcon ?
                        <div className="absolute bottom-14 right-5">
                            <FaDiceD20 color="gold"/>
                        </div>
                        : null}
                    </div>
                </div>
            </div>
        </>
    )
}