import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
import { useUiSlice } from "../hooks/useUiSlice";
import { useContractsStore } from "../hooks/useContractsStore";
import { Event } from '../store/contracts/contractsSlice';

export const InfoTable = () => {
    
    const { openModal } = useUiSlice();
    const { events, onActiveContract } = useContractsStore();

    const deleteRow = (event: Event) =>  {
        let confirmar = confirm("¿Está seguro que desea eliminar el registro?");
        console.log({event, confirmar})
     }
 
     const updateRow = (event: Event) =>  {
        openModal();
        onActiveContract(event);
     }

    return (
        <table className="min-w-full bg-white">
            <thead className="bg-blue-950 text-white">
                <tr>
                    <th className="w-1/5 py-3 px-4 font-semibold text-base"></th>
                    <th className="w-1/5 py-3 px-4 font-semibold text-base">Programa</th>
                    <th className="w-1/5 py-3 px-4 font-semibold text-base">Número de contrato</th>
                    <th className="w-1/5 py-3 px-4 font-semibold text-base">Nombre del proveedor</th>
                    <th className="w-1/5 py-3 px-4 font-semibold text-base">Tipo de contrato</th>
                    <th className="w-1/5 py-3 px-4 font-semibold text-base">Fecha de inicio</th>
                    <th className="w-1/5 py-3 px-4 font-semibold text-base">Fecha de terminación</th>
                    <th className="w-1/5 py-3 px-4 font-semibold text-base">Responsable</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
               {
                events.map((event: Event) => (
                    <tr key={ event.programa }>
                        <td className="py-3 px-4 h-20 flex gap-1 justify-center items-center">
                            <GrDocumentUpdate className="text-blue-900" fontSize={ 20 } title="Editar" onClick={ () => updateRow(event) } />
                            <RiDeleteBin5Fill className="text-red-900" fontSize={ 20 } title="Eliminar" onClick={ () => deleteRow(event) } />
                        </td>
                        <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">{ event.programa }</td>
                        <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">{ event.numeroContrato }</td>
                        <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">{ event.nombreProveedor }</td>
                        <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">{ event.tipoContrato }</td>
                        <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">{ event.fechaInicio.toLocaleString().split(',')[0] }</td>
                        <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">{ event.fechaTerminacion.toLocaleString().split(',')[0] }</td>
                        <td className="text-center w-1/5 py-3 px-4 border-b border-gray-200">{ event.responsable }</td>
                    </tr>
                ))
               }
            </tbody>
        </table>
    )
}
