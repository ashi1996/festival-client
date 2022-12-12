import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { FestivalsResponse } from '../../common/consts/model';
import Card from '../../components/card/card';
import './homePage.css'

const HomePage = () => {

  const { festivals } = useAppSelector(state => state.festivals);

  return (
    <div className='home-page'>
      {
        festivals.map( (festival:FestivalsResponse , index:number)=> (
          <Card festival={festival} index={index} key={festival.id}/>
        ))
      }
   
    </div>
  );
}

export default HomePage;
