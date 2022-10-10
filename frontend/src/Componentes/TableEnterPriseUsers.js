import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

const TableUserEnterPrise = ({ data }) => {

    const params = useParams()

  
    var cont = 0 
    const addUser = (id_usuario)=>{    
    const id = params.id
    //Hacer la petición usando axios

    axios.post(`http://localhost:8000/api/enterPrise/usuariosEmpresa/${params.id}`).then(
        res =>{
            console.log(res.data)
            alert(res.data)
        }
    )
    .then(err => {console.log(err)})
    }

    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><button className='btn btn-info' onClick={() => addUser(item._id)}>Agregar</button></td>
            </tr>
            
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TableUserEnterPrise;