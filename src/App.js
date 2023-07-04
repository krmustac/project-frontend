import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/prod/ProductList';
import AddProduct from './components/prod/AddProduct';
import UpdateProduct from './components/prod/UpdateProduct';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route index element={<ProductList/>}></Route>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/productList' element={<ProductList/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/editProduct/:id' element={<UpdateProduct/>}></Route>

      </Routes>
      
      
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;