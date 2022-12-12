import { FestivalsResponse, HostsResponse } from './../../common/consts/model';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface FestivalsState {
  festivals: FestivalsResponse[],
  hosts: HostsResponse[];
  refreshReducer :number
  
}

// Define the initial state using that type
const initialState: FestivalsState = {
  festivals : [],
  hosts: [],
  refreshReducer:  0
}

export const festivalsSlice = createSlice({
  name: 'festivals',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    chengeFestivals: (state, action: PayloadAction<FestivalsResponse[]>) => {
      state.festivals =  action.payload;
    },
    chengeHosts: (state, action: PayloadAction<HostsResponse[]>) => {
      state.hosts =  action.payload;
    },
    refreshData: (state) => {
      state.refreshReducer =  ++state.refreshReducer;
    },
  },
})

export const { 
  chengeFestivals,
  chengeHosts,
  refreshData
} = festivalsSlice.actions


export default festivalsSlice.reducer