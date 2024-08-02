import { createSlice } from '@reduxjs/toolkit';
import { events } from '../../data/data';


export interface Event {
  programa: string;
  numeroContrato: string;
  nombreProveedor: string;
  tipoContrato: string;
  fechaInicio: Date | string;
  fechaTerminacion: Date | string
  responsable: string;
} 

interface contractsState {
  events: Event[];
  activeContract: null;  
}

const initialState: contractsState = {
  events: events,
  activeContract: null
    
}

export const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    setActiveContract: (state: contractsState, { payload }) => {
      state.activeContract = payload;
    },
    onAddNewContract: (state, { payload }) => {
      state.events.push(payload);
      state.activeContract = null;
    },
    onUpdateContract: (state, { payload }) => {
      state.events = events.map(contract => {
        if (contract._id === payload._id) {
          return payload;
        }
        return contract;
      })
    }
  },
})

export const { setActiveContract, onAddNewContract, onUpdateContract } = contractsSlice.actions;
