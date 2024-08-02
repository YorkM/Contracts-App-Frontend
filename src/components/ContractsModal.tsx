import { useEffect, useState } from 'react';
import DatePicker,{ registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import{ es} from 'date-fns/locale/es';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { addHours, differenceInSeconds } from 'date-fns';
import Modal from 'react-modal';
import { useUiSlice } from '../hooks/useUiSlice';
import { useContractsStore } from '../hooks/useContractsStore';

registerLocale('es', es);

export const ContractsModal = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const { isDateModal, closeModal } = useUiSlice();
    const { activeContract, startSavingContract } = useContractsStore();   
    
    const [formState, setFormState] = useState({
        programa: '',
        numeroContrato: '',
        nombreProveedor: '',
        tipoContrato: '',
        fechaInicio: new Date(),
        fechaTerminacion: addHours(new Date(), 2)
    });

    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const onDateChange = (event: any, changing: string) => {
        setFormState({
            ...formState,
            [changing]: event 
        })
    }

    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const diferenciaFechas = differenceInSeconds(formState.fechaTerminacion, formState.fechaInicio);
        if (isNaN(diferenciaFechas) || diferenciaFechas <= 0) {
            Swal.fire('Fechas Incorrectas', 'Revisar las fechas ingresadas', 'error');
            return;
        }

        const { programa, numeroContrato, nombreProveedor, tipoContrato } = formState;

        if (programa.length == 0 || numeroContrato.length == 0 ||  nombreProveedor.length == 0 || tipoContrato.length == 0) {
            Swal.fire('Formulario Inválido', 'Todos los campos del formulario son obligatorios', 'error');
            return;
        }

        await startSavingContract(formState);
        closeModal();
    }

    useEffect(() => {
        if (activeContract !== null) {
            setFormState({...activeContract});
        } 
    }, [ activeContract ]);    

    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={ isDateModal }
            onRequestClose={ closeModal }
            style={customStyles}
            className="modal w-1/2 mt-96"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h2 className='text-center text-blue-900 text-3xl font-black'>Nuevo contrato</h2>
            <form onSubmit={ onSubmit }>
                <div className="flex mt-2 flex-col">
                    <label className='pl-2 font-black' htmlFor="programa">Programa</label>
                    <input
                        className="w-full rounded-sm placeholder:pl-2 placeholder:text-base px-3 py-1 outline-none border"
                        type="text"
                        placeholder="Programa"
                        name='programa'
                        value={ formState.programa }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className='pl-2 font-black' htmlFor="numeroContrato">Número de contrato</label>
                    <input
                        className="w-full rounded-sm placeholder:pl-2 placeholder:text-base px-3 py-1 outline-none border"
                        type="text"
                        placeholder="Número de contrato"
                        name='numeroContrato'
                        value={ formState.numeroContrato }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className='pl-2 font-black' htmlFor="nombreProveedor">Nombre del Proveedor</label>
                    <input
                        className="w-full rounded-sm placeholder:pl-2 placeholder:text-base px-3 py-1 outline-none border"
                        type="text"
                        placeholder="Nombre del proveedor"
                        name='nombreProveedor'
                        value={ formState.nombreProveedor }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className='pl-2 font-black' htmlFor="tipoContrato">Tipo de contrato</label>
                    <input
                        className="w-full rounded-sm placeholder:pl-2 placeholder:text-base px-3 py-1 outline-none border"
                        type="text"
                        placeholder="Tipo de contrato"
                        name='tipoContrato'
                        value={ formState.tipoContrato }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className='pl-2 font-black' htmlFor="fechaInicio">Fecha de inicio</label>
                    <DatePicker
                        className="rounded-sm placeholder:pl-2 placeholder:text-xs px-3 py-1 outline-none border"
                        name='fechaInicio'
                        onChange={ (event) => onDateChange(event, 'fechaInicio') }
                        selected={ formState.fechaInicio }
                        dateFormat="Pp"
                        showTimeSelect
                        locale={ es }
                        timeCaption='Hora'
                        
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className='pl-2 font-black' htmlFor="fechaTerminacion">Fecha de terminación</label>
                    <DatePicker
                        minDate={ formState.fechaInicio }
                        className="w-full rounded-sm placeholder:pl-2 placeholder:text-xs px-3 py-1 outline-none border"
                        name='fechaTerminacion'
                        onChange={ (event) => onDateChange(event, 'fechaTerminacion') }
                        selected={ formState.fechaTerminacion }
                        dateFormat="Pp"
                        showTimeSelect
                        locale={ es }
                        timeCaption='Hora'
                    />
                </div>               
                <div>
                    <input
                        className="text-white bg-blue-900 p-2 hover:text-slate-300 hover:bg-blue-950 active:bg-blue-300 transition duration-700 text-base mt-2 rounded-md"
                        type="submit"
                        value="Guardar"
                    />
                </div>
            </form>            
        </Modal>
    )
}

