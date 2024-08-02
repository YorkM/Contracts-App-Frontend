import { AiFillPlusCircle } from "react-icons/ai";

import { ContractsModal } from './ContractsModal';
import { InfoTable, Navbar } from '../components';
import { useUiSlice } from "../hooks/useUiSlice";
import { useContractsStore } from "../hooks/useContractsStore";
import { addHours } from "date-fns";


export const MainInfo = () => {

    const { openModal } = useUiSlice();
    const { onActiveContract } = useContractsStore();

    const onNewContract = () => {
        openModal();

        onActiveContract({
            programa: '',
            numeroContrato: '',
            nombreProveedor: '',
            tipoContrato: '',
            fechaInicio: new Date(),
            fechaTerminacion: addHours(new Date(), 2),
            responsable: ''
        });
    } 

    return (
        <>        
            <Navbar />

            <div className="mx-auto">
                <div className="bg-white shadow-md rounded my-6">
                    <InfoTable />
                </div>
            </div>

            <AiFillPlusCircle className="text-blue-950 fixed right-24 bottom-48" onClick={ onNewContract } title="Agregar" fontSize={ 40 } />

            <ContractsModal />        
        </>
    )
}
