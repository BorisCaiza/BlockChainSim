import axios from "axios";
import {useEffect, useState} from "react";
import Table from "../../Componentes/TableUserByEnterprise"
import { Link, useParams } from "react-router-dom";

function VerUsuariosEmpresa(){

    const[dataUsuarios, setDataUsuarios] = useState([]);
    const[query, setQuery] = useState("")
    const keys = ["name","email"]

    const params = useParams();

    const search = (data)=>{
        return data.filter((item )=> 
        keys.some(key => item[key].toLowerCase().includes(query))
         )
    }

        useEffect(()=>{

        axios.get(`http://localhost:8000/api/enterPrise/usuariosEmpresa/${params.id}`).then(
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
        <input type="text" placeholder="Search..." className ="search"
        onChange={e => setQuery(e.target.value)}/>
          <Table data = {search(dataUsuarios)}/>
    </div>
  
    </>

       
    )
}


export default VerUsuariosEmpresa;