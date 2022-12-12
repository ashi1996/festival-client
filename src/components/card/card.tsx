import React from 'react';
import { FestivalsResponse } from '../../common/consts/model';
import { dateFormat } from '../../common/services/general';
import NoStrollerRoundedIcon from '@mui/icons-material/NoStrollerRounded';
import StrollerRoundedIcon from '@mui/icons-material/StrollerRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { DELETE_FESTIVAL } from '../../common/services/api';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { refreshData } from '../../features/festivals/festivalsSlice';
import {useNavigate} from 'react-router-dom'
import './card.css';

interface cardProps {
    festival : FestivalsResponse,
    index: number
}

const Card: React.FC<cardProps> = ({festival , index}) => {

    const dispach = useAppDispatch();
    const { hosts } = useAppSelector(state => state.festivals);
    const navigate = useNavigate();

    const onDelete = async () => {
        if(window.confirm(`Are you sure you want to delete ${festival.name} ?`)){
            await DELETE_FESTIVAL(festival.id);
            dispach(refreshData())
        }
    } 

    const getHostNameById = () => {
       const host = hosts.filter(({id}) => id == festival.hostId)
       if(host.length) return host[0].name
    }

    const onclickEdit = () => {
        navigate('/add-or-edit', {state :{ ...festival}})
    } 

    return (
        <div className=''>
            <ul className="tilesWrap">
                 <li>
                    <DeleteIcon onClick={onDelete} className='delete-icon error'/>
                    <h2>{index+1}</h2>
                    <h4>{festival.name}</h4>
                    <p>
                        <small>Host: {getHostNameById()}</small>
                        <br />
                        <span>Start: {dateFormat(festival.startDate) }</span>
                        <br />
                        <span>End: {dateFormat(festival.endDate) }</span>
                        <br />
                        <span className='children-info'>
                           <span className={festival.isSuitableForChildren ? "success" : 'error'}>Children: </span> 
                            {
                                festival.isSuitableForChildren ? <StrollerRoundedIcon className=''/> : <NoStrollerRoundedIcon/>
                            }
                        </span>

                    </p>
                    <button onClick={onclickEdit}>Edit Details</button>
                </li>
            </ul>
        </div>

    );
}

export default Card;
