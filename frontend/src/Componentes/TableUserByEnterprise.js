import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

const Table = ({ data }) => {

const params = useParams();

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
              <td>  
              <Link to={`/EditarUsuarioPorEmpresa/${params.id}/${item._id}`}>
                        <li className='btn btn-success'>Editar</li>
                    </Link>
                    
              </td>

              <td>
              <button className='btn btn-danger' >Borrar</button>
              </td>

              <td>
              <Link to={`/BlockchainUsuarioPorEmpresa/${params.id}/${item._id}`}>
                        <li className='btn btn-info'>Ver Block Chain</li>
                    </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;