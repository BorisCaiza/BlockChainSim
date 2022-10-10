import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Table = ({ data }) => {

    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>  
              <Link to={`/editarEmpresa/${item._id}`}>
                        <li className='btn btn-success'>Editar</li>
                    </Link>
                    
              </td>

              <td>  
              <Link to={`/agregarUE/${item._id}`}>
                        <li className='btn btn-success'>Agregar Usuario</li>
                    </Link>
                    
              </td>

              <td>
              <button className='btn btn-danger' >Borrar</button>
              </td>

              <td>
              <Link to={`/blockchain/${item._id}`}>
                        <li className='btn btn-info'>Ver Block Chain</li>
                    </Link>
              </td>

              <td>
              <Link to={`/VerUsuariosEmpresa/${item._id}`}>
                        <li className='btn btn-info'>Ver Usuarios</li>
                    </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;