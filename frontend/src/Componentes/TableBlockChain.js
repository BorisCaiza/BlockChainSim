import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Table = ({ data }) => {


    return (


        <table>
        <tbody>
          <tr>
            <th>Hash</th>
            <th>Body</th>
            <th>Previous Hash</th>
            <th>Altura</th>
            <th>Tratamiento</th>
          </tr>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.hash}</td>
              <td>{item.body}</td>
              <td>{item.previousHash}</td>
              <td>{item.heigh}</td>
              <td>{item.tratamiento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;