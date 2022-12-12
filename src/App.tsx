import React, { useEffect } from 'react';
import logo from './logo.svg';
import AppRoutes from './appRotes';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { FETCH_ALL_FESTIVALS, FETCH_ALL_HOSTS } from './common/services/api';
import { chengeFestivals, chengeHosts } from './features/festivals/festivalsSlice';

function App() {

  const dispach = useAppDispatch();
  const { refreshReducer } = useAppSelector(state => state.festivals)

  useEffect(()=>{
    geyAllFestivalsApi();
    if(refreshReducer === 0){
      geyAllHostssApi()
    }
  },[refreshReducer])

  const geyAllFestivalsApi = async () =>{
    const festivals  = await FETCH_ALL_FESTIVALS();
    dispach(chengeFestivals(festivals));
  }

  const geyAllHostssApi = async () =>{
    const hosts  = await FETCH_ALL_HOSTS();
    dispach(chengeHosts(hosts));
  }

  return (
    <AppRoutes/>
  );
}

export default App;
