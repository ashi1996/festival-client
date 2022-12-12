import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CREATE_FESTIVAL, EDIT_FESTIVAL, FETCH_ALL_FESTIVALS, FETCH_ALL_HOSTS } from '../../common/services/api';
import {  refreshData } from '../../features/festivals/festivalsSlice';
import { useForm } from 'react-hook-form';
import { FestivalsResponse } from '../../common/consts/model';
import { useLocation, useNavigate } from 'react-router-dom';
import { dateFormatToResetInput } from '../../common/services/general';
import "./formAddOrEditFestival.css"

interface Props {
  edit?:FestivalsResponse
}

const FormAddOrEditFestival :React.FC<Props>= ({edit}) => {

  const navigate = useNavigate()
  const { hosts } = useAppSelector(state => state.festivals)
  const { state } = useLocation();
  const dispach = useAppDispatch();
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

  const onSubmit = async(dataToUpdate: any) =>{
    console.log(dataToUpdate)
    if(state ){
      await EDIT_FESTIVAL(state.id, dataToUpdate);
    }else{
      await CREATE_FESTIVAL(dataToUpdate);
    }
    dispach(refreshData());
    navigate('/')
  };


  useEffect(() => {
    if(state) {
      setValue("name", state.name);
      setValue('startDate', dateFormatToResetInput(state.startDate));
      setValue("endDate", dateFormatToResetInput(state.endDate));
      setValue("isSuitableForChildren", state.isSuitableForChildren);
    }
}, [state]);


  return (
    <div className='add-or-edit-form'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
     
      <div className="input-container ic1">
        <input className='input' defaultValue="" {...register("name", { required: true })} />
        <div className="cut"></div>
        <label htmlFor="name" className="placeholder">Name</label>
        {errors.name && <span className='error'>This field is required</span>}
      </div>
      {/* --------------------------------------------------------- */}
      
      <div className="input-container ic2">
        <input type='date' className='input' {...register("startDate", { required: true })} />
        <div className="cut"></div>
        <label htmlFor="startDate" className="placeholder">Start Date</label>
        {errors.startDate && <span className='error'>This field is required</span>}
      </div>

      {/* ----------------------------------------------------------- */}

      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-container ic2">
        <input type='date' className='input' {...register("endDate", { required: true })} />
        <div className="cut cut-short"></div>
        <label htmlFor="endDate" className="placeholder">End Date</label>
        {errors.endDate && <span className='error'>This field is required</span>}
      </div>


      <div className="input-container ic2">
        <select className='input' {...register("hostId", { required: true })} >
          {
            hosts.map(host => (
              <option key={host.id} selected={host.id === (state && state.hostId)} value={host.id}>{host.name}</option>
            ))
          }
        </select>
        <div className="cut cut-short"></div>
        <label htmlFor="hostId" className="placeholder">Host</label>
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-container" style={{display:'flex', alignItems:'center'}}>
        <label htmlFor="isSuitableForChildren" className="placeholder">Is Suitable For Children</label>
        <input type='checkbox' className='' {...register("isSuitableForChildren")} />
      </div>
      <button type="submit" className="submit">submit</button>
    </form>
    </div>
  );
}

export default FormAddOrEditFestival;