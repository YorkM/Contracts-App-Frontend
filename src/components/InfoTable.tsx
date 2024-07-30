import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";

export const InfoTable = () => {

    const deleteRow = () =>  {
        let confirmar = confirm("¿Está seguro que desea eliminar el registro?");
        console.log(confirmar)
     }
 
     const updateRow = () =>  {
         console.log("Actualizando registro...");
     }

    return (
        <table className="min-w-full bg-white">
            <thead className="bg-blue-950 text-white">
                <tr>
                    <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Programa</th>
                    <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Número de contrato</th>
                    <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Nombre del proveedor</th>
                    <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Tipo de contrato</th>
                    <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Fecha de inicio</th>
                    <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Fecha de terminación</th>
                    <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">Responsable</th>
                    <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm"></th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                <tr>
                    <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Prueba 1</td>
                    <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">0001</td>
                    <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Jean Carlos Canela</td>
                    <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Prueba 1</td>
                    <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">2024-07-21</td>
                    <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">2024-12-31</td>
                    <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">Bianca Piamonte</td>
                    <td className="py-3 px-4 h-20 flex gap-1 justify-center items-center">
                        <GrDocumentUpdate title="Actualizar" onClick={updateRow} />
                        <RiDeleteBin5Fill title="Eliminar" onClick={deleteRow} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
