
export const ContractsApp = () => {


    const deleteRow = () =>  {
        console.log("Eliminando registro...");
    }

    const updateRow = () =>  {
        console.log("Actualizando registro...");
    }


    return (
        <>
            <h1 className="text-4xl font-black text-orange-500">ContractsApp</h1>
            <p className="text-2xl text-orange-200 font-black">Hola Mundo</p>

            <div className="container mx-auto">
                <div className="bg-white shadow-md rounded my-6">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-500 text-white">
                            <tr>
                                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Nombre</th>
                                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Edad</th>
                                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Ciudad</th>
                                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Correo</th>
                                <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Juan Pérez</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">28</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Madrid</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">juan.perez@example.com</td>
                                <td className="py-3 px-4 border-b flex gap-1 justify-center border-gray-200">
                                    <button onClick={ updateRow } className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700">#</button>
                                    <button onClick={ deleteRow } className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700">X</button>
                                </td>
                            </tr>                            
                            <tr>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Gamba Villalobos</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">34</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Medellín</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">gamba.vilalobos@example.com</td>
                                <td className="py-3 px-4 border-b flex gap-1 justify-center border-gray-200">
                                    <button onClick={ updateRow } className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700">#</button>
                                    <button onClick={ deleteRow } className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700">X</button>
                                </td>
                            </tr>                            
                            <tr>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Carolina Galviz</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">45</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Mocoa</td>
                                <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">caro.galviz@example.com</td>
                                <td className="py-3 px-4 border-b flex gap-1 justify-center border-gray-200">
                                    <button onClick={ updateRow } className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700">#</button>
                                    <button onClick={ deleteRow } className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700">X</button>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
