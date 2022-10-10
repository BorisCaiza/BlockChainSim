import axios from "axios";
import {useEffect, useState} from "react";
import Table from "../../Componentes/TableUser"
import { Link } from "react-router-dom";

function User(){

    const[dataUsuarios, setDataUsuarios] = useState([]);
    const[query, setQuery] = useState("")
    const keys = ["name","email"]

    const search = (data)=>{
        return data.filter((item )=> 
        keys.some(key => item[key].toLowerCase().includes(query))
         )
    }

        useEffect(()=>{

        axios.get('http://localhost:8000/api/user/').then(
            res =>{
            setDataUsuarios(res.data)
            
            }
            
        ).catch(err =>{
            console.log(err)
        })
    },[] )


    return(

        <>

        <div>

        <Link to={`/agregarUsuario`}>
                        <li className='btn btn-success'>Agregar Usuario</li>
                    </Link>
        </div>
 
    <div>
        <input type="text" placeholder="Search..." className ="search"
        onChange={e => setQuery(e.target.value)}/>
          <Table data = {search(dataUsuarios)}/>
    </div>
  
    </>

       
    )
}


export default User;