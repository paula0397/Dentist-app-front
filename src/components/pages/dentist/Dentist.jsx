import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalContext';
import DentistCard from './DentistCard';
import { Grid } from '@mui/material';


const Dentist = () => {
const { state, dispatch } = useContext(GlobalContext);
const nameApi = state.users ;


useEffect(()=>{
  localStorage.setItem('favs',JSON.stringify(state.favs))}
,[state.favs])

return (
    <div >
      <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3}></Grid></Grid>

      {/* ACA IRIA GRID DEL DENTISTCARD */}
      <h1>HOME</h1>
      <div className='home'>
      {state.users.map((dentist)=><DentistCard nameApi={dentist} key={dentist.id}/>)}</div>
    </div>
  ) 
}

export default Dentist
