import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditarUsuario(){

    const params = useParams()

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/obtenerUsuario/${params.id}`).
        then(res =>{
            console.log(res.data)
            const dataUsuario = res.data
            setName(dataUsuario.name)
            setEmail(dataUsuario.email)
    
            
        })
    },[])

    //funcion que actualice

    function editarU(){

        //Nuevo objeto para actualziar el usuario

        const actulizarUsuario = {
                name: name,
                email: email,
        
        }

        const id = params.id
        //Hacer la petición usando axios

        axios.put(`http://localhost:8000/api/user/update/${id}`, actulizarUsuario).then(
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
                <h2 className='mt-4'>Crear un nuevo usuario</h2>      
        </div> 


        <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type="text" className='form-control' value={name} onChange = { ({target})=> {setName(target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type="email" className='form-control' value={email} onChange = { (e)=> {setEmail(e.target.value)}}></input>
                    </div>

                   

                    <button onClick = {(editarU)} className='btn btn-sucesss'>   Guardar Usuario</button>
                </div>      
        </div> 


    </div>
    )
}

export default EditarUsuario