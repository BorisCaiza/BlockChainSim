import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function EditarUsuarioPorEmpresa(){

    const[tratamiento, setTratamiento] = useState("");
    
    const params = useParams()

    const EditarYbyE =()=>{
            var empresa = {
               tratamiento: tratamiento 
                
            }
    
            console.log(empresa)
    
            axios.post(`http://localhost:8000/api/enterPrise/agregarModificacion/${params.id_empresa}/${params.id_usuario}`, empresa).then(
                res =>{
                    alert(res.data)
                }
            )
            .then(err => {console.log(err)})


        

       

    }

    return(
        <div className='container'>
            <div className='row'>
                    <h2 className='mt-4'>Registro del tratamiento</h2>      
            </div> 


            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                        <div className='mb-3'>
                            <label htmlFor='tratamiento' className='form-label'>Tratamiento</label>
                            <input type="text" className='form-control' value={tratamiento} onChange = { ({target})=> {setTratamiento(target.value)}}></input>
                        </div>
                        <button onClick = {(EditarYbyE)} className='btn btn-sucesss'>   Guardar Usuario</button>
                    </div>      
            </div> 


        </div>
    )

}


export default EditarUsuarioPorEmpresa;