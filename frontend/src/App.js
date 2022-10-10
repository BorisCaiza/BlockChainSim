import logo from './logo.svg';
import './App.css';
import User from './Pages/Users/User';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgregarUsuario from './Pages/Users/AgregarUsuario'
import EditarUsuario from './Pages/Users/EditarUsuario';
import BlockchainUsuario from './Componentes/BlockchainUsuario';
import Empresa from './Pages/Empresa/Empresa'
import Header from './Componentes/Header';
import AgregarEmpresa from './Pages/Empresa/AgregarEmpresa';
import EditarEmpresa from './Pages/Empresa/EditarEmpresa';
import AgregarUsuarioEmpresa from './Pages/Empresa/AgregarUsuarioEmpresa';
import VerUsuariosEmpresa from './Pages/Empresa/VerUsuariosEmpresa';
import EditarUsuarioPorEmpresa from './Pages/Empresa/EditarUsuarioPorEmpresa';
import BlockchainUsuarioPorEmpresa from './Pages/Empresa/BlockchainUsuarioPorEmpresa';


function App() {
  return (
  
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route>
          <Route path='/' element={<User/>} exact></Route>
          <Route path="/agregarUsuario" element={<AgregarUsuario/>} exact></Route>
          <Route path="/editarUsuario/:id" element={<EditarUsuario/>} exact></Route>
          <Route path="/empresas" element={<Empresa/>} exact></Route>
          <Route path="/agregarEmpresa" element={<AgregarEmpresa/>} exact></Route>
          <Route path="/editarEmpresa/:id" element={<EditarEmpresa/>} exact></Route>
          <Route path="/agregarUE/:id" element={<AgregarUsuarioEmpresa/>} exact></Route>
          <Route path="/usersEmpresa/:id" element={<AgregarUsuarioEmpresa/>} exact></Route>
          <Route path="/VerUsuariosEmpresa/:id" element={<VerUsuariosEmpresa/>} exact></Route>
          <Route path="EditarUsuarioPorEmpresa/:id_empresa/:id_usuario" element={<EditarUsuarioPorEmpresa/>} exact></Route>
          <Route path="BlockchainUsuarioPorEmpresa/:id_empresa/:id_usuario" element={<BlockchainUsuarioPorEmpresa/>} exact></Route>
          <Route path="/blockchain/:id" element={<BlockchainUsuario/>} exact></Route>
        </Route>
      </Routes>
      
   </BrowserRouter>
  );
}

export default App;
