import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const  AgregarUsuario = ()=>{

    //Hooks de react

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const agregarU =()=>{
            var usuario = {
                name: name,
                email: email,
                password: password,
                
            }
    
            console.log(usuario)
    
            axios.post('http://localhost:8000/api/user/crear', usuario).then(
                res =>{
                    alert(res.data)
                    console.log(res.data)
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

                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input type="text" className='form-control' value={password} onChange = { (e)=> {setPassword(e.target.value)}}></input>
                        </div>

                        <button onClick = {(agregarU)} className='btn btn-sucesss'>   Guardar Usuario</button>
                    </div>      
            </div> 


        </div>
    )
}

export default AgregarUsuario