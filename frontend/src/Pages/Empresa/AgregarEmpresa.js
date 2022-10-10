import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const  AgregarEmpresa = ()=>{

    //Hooks de react

    const[name, setName] = useState("");
    const[location, setlocation] = useState("");

    const agregarE =()=>{
            var empresa = {
                name: name,
                location: location,

                
            }
    
            console.log(empresa)
    
            axios.post('http://localhost:8000/api/enterPrise/crear', empresa).then(
                res =>{
                    alert(res.data)
                }
            )
            .then(err => {console.log(err)})


        

       

    }

    return(
        <div className='container'>
            <div className='row'>
                    <h2 className='mt-4'>Crear una nueva Empresa</h2>      
            </div> 


            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                        <div className='mb-3'>
                            <label htmlFor='nombre' className='form-label'>Nombre</label>
                            <input type="text" className='form-control' value={name} onChange = { ({target})=> {setName(target.value)}}></input>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='location' className='form-label'>Locación</label>
                            <input type="text" className='form-control' value={location} onChange = { ({target})=> {setlocation(target.value)}}></input>
                        </div>                       

                        <button onClick = {(agregarE)} className='btn btn-sucesss'>   Guardar Usuario</button>
                    </div>      
            </div> 


        </div>
    )
}

export default AgregarEmpresa