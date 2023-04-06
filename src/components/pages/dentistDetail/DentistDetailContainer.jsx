import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const DentistDetailContainer = () => {

const {id} =useParams();
const [dentist,setDentist]=useState(null);

useEffect(()=>{
  //llama a la api para obtener los datos
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res=>{{
    setDentist(res.data)
  }})
  .catch(err => console.log(Error));
},[id]);
console.log(dentist);

return (

  <>
  {dentist ?(

    <table className='table'>
      <tr>
        <td>  Nombre y Apellido: {dentist.name}</td>
        <td> Telefono de contacto:{dentist.phone}</td>
        <td> Correo Electrónico:{dentist.email}</td>
        <td> Pagina Web:{dentist.website}</td> 
        <td> Consultorio:{dentist.Company}</td> 
      </tr>
    </table>
  ): null}
  </>
)}
export default DentistDetailContainer