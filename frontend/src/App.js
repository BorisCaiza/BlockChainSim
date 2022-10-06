import logo from './logo.svg';
import './App.css';
import User from './Pages/User';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgregarUsuario from './Componentes/AgregarUsuario';
import EditarUsuario from './Componentes/EditarUsuario';
import BlockchainUsuario from './Componentes/BlockchainUsuario';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<User/>} exact></Route>
          <Route path="/agregar" element={<AgregarUsuario/>} exact></Route>
          <Route path="/editar/:id" element={<EditarUsuario/>} exact></Route>
          <Route path="/blockchain/:id" element={<BlockchainUsuario/>} exact></Route>
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
