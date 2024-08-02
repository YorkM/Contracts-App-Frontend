import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./iu/uiSlice";
import { contractsSlice } from './contracts/contractsSlice';



export const store = configureStore({
   reducer: {
    contracts: contractsSlice.reducer,  
    ui: uiSlice.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   })
});