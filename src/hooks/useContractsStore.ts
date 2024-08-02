import { useDispatch, useSelector } from 'react-redux';
import { onAddNewContract, onUpdateContract, setActiveContract } from '../store';

export const useContractsStore = () => {
    
    const dispatch = useDispatch();
    const { events, activeContract } = useSelector(state => state.contracts);

    const onActiveContract = (contract: any) => {
        dispatch(setActiveContract(contract));
    }

    const startSavingContract = async(contract: any) => {
        // todo: llegar al Backend

        // todo bien
        if (contract._id) {
            dispatch(onUpdateContract({...contract}));
        } else {
            dispatch(onAddNewContract({...contract, _id: new Date().getTime()}));
        }
    }

    return {
        //* Propiedades
        events,
        activeContract,

        //* Metodos
        onActiveContract,
        startSavingContract
    }
}
