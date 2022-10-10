import axios from "axios";
import {useEffect, useState} from "react";
import Table from "../../Componentes/TableEnterprise";
import { Link } from "react-router-dom";

function User(){

    const[dataEmpresas, setDataEmpresas] = useState([]);
    const[query, setQuery] = useState("")
    const keys = ["name","location"]

    const search = (data)=>{
        return data.filter((item )=> 
        keys.some(key => item[key].toLowerCase().includes(query))
         )
    }

        useEffect(()=>{

        axios.get('http://localhost:8000/api/enterPrise').then(
            res =>{
                setDataEmpresas(res.data)
            }
            
        ).catch(err =>{
            console.log(err)
        })
    },[] )


    return(

        <>

        <div>

        <Link to={`/agregarEmpresa`}>
                        <li className='btn btn-success'>Agregar Empresa</li>
                    </Link>
        </div>
 
    <div>
        <input type="text" placeholder="Search..." className ="search"
        onChange={e => setQuery(e.target.value)}/>
          <Table data = {search(dataEmpresas)}/>
    </div>
  
    </>

       
    )
}


export default User;