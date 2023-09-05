import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/prod/ProductList';
import AddProduct from './components/prod/AddProduct';
import UpdateProduct from './components/prod/UpdateProduct';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import LoginUser from './components/user/LoginUser';
import CreateUser from './components/user/RegisterUser';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route index element={<LoginUser/>}></Route>
        <Route path='/' element={<WelcomePage/>}></Route>
        <Route path='/welcome' element={<WelcomePage/>}></Route>
        <Route path='/productList' element={<ProductList/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/login' element={<LoginUser/>}></Route>
        <Route path='/register' element={<CreateUser/>}></Route>
        <Route path='/editProduct/:id' element={<UpdateProduct/>}></Route>

      </Routes>
      
      
    </BrowserRouter>
    
    </>
  );
}

export default App;
