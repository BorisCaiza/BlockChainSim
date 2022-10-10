import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditarEmpresa(){

    const params = useParams()

    const[name, setName] = useState("");
    const[location, setLocation] = useState("");


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/enterPrise/obtenerEmpresa/${params.id}`).
        then(res =>{
            console.log(res.data)
            const dataEmpresa = res.data
            setName(dataEmpresa.name)
            setLocation(dataEmpresa.location)
    
            
        })
    },[])

    //funcion que actualice

    function editarE(){

        //Nuevo objeto para actualziar el usuario

        const actulizarEmpresa = {
                name: name,
               location: location,
        
        }

        const id = params.id
        //Hacer la petición usando axios

        axios.put(`http://localhost:8000/api/enterPrise/update/${id}`, actulizarEmpresa).then(
            res =>{
                console.log(res.data)
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
                            <input type="text" className='form-control' value={location} onChange = { ({target})=> {setLocation(target.value)}}></input>
                        </div>                       

                        <button onClick = {(editarE)} className='btn btn-sucesss'>   Guardar Usuario</button>
                    </div>      
            </div> 


        </div>
    )
}

export default EditarEmpresa