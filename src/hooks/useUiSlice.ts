import { useDispatch, useSelector } from 'react-redux';
import { onCloseModal, onOpenModal } from '../store/iu/uiSlice';

export const useUiSlice = () => {

    const dispatch = useDispatch();
    const { isDateModal } = useSelector(state => state.ui);

    const openModal = () => {
        dispatch(onOpenModal());
    }

    const closeModal = () => {
        dispatch(onCloseModal());
    }

    return {
        //* propiedades
        isDateModal,

        //* Metodos
        openModal,
        closeModal
    }
}
