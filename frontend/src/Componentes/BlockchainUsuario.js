import axios from "axios";
import {useEffect, useState} from "react";
import TableBlockchain from "./TableBlockChain"
import { Link, useParams } from "react-router-dom";

function BlockchainUsuario(){


    const[dataUsuarios, setDataUsuarios] = useState([]);
    const[query, setQuery] = useState("")
    const keys = ["heigh","body"]
    const params = useParams()



    const search = (data)=>{
        return data.filter((item )=> 
        keys.some(key => item[key].toLowerCase().includes(query))
         )
    }

        useEffect(()=>{

        axios.get(`http://localhost:8000/api/blockchain/obtenerUsuario/${params.id}`).then(
            res =>{
                console.log(res.data)
            setDataUsuarios(res.data)
            }
            
        ).catch(err =>{
            console.log(err)
        })
    },[] )


    return(

        

 
    <div>
        <input type="text" placeholder="Search..." className ="search"
        onChange={e => setQuery(e.target.value)}/>
          <TableBlockchain data = {search(dataUsuarios)}/>
    </div>
  
    

       
    )
}


export default BlockchainUsuario;