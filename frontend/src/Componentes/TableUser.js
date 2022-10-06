import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Table = ({ data }) => {


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
              <Link to={`/editar/${item._id}`}>
                        <li className='btn btn-success'>Editar</li>
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
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;