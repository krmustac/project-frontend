import React, { useState } from 'react'
import ProductService from '../../services/ProductService';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const [product, setProduct] = useState({
        id: "",
        productName:"",
        amount:"",
        supplier:"",
        contact:"",

    });

    const navigate = useNavigate();

    const handleChange=(e)=>{
        const value =e.target.value;
        setProduct({...product,[e.target.name]:value});
    };

    const saveProduct = (e) =>{
        e.preventDefault();
        ProductService.saveProduct(product).then((response) =>{
            console.log(response);
            navigate("/productList")
        }).catch((error)=> {
            console.log(error);
        })
    };

    const reset = (e)=>{
        e.preventDefault();
        setProduct({
            id: "",
            productName:"",
            amount:"",
            supplier:"",
            contact:"",
        });
    }
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b bg-white mt-3 mb-16  min-h-fit">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add new product</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal'>Product Name</label>
                <input 
                type='text'
                name='productName'
                value={product.productName}
                onChange={(e)=>handleChange(e)}
                className=' h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal'>Amount</label>
                <input 
                type='number'
                name='amount'
                value={product.amount}
                onChange={(e)=>handleChange(e)} 
                className=' h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal'>Supplier</label>
                <input 
                type='text'
                name='supplier'
                value={product.supplier} 
                onChange={(e)=>handleChange(e)}
                className=' h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal'>Contact</label>
                <input 
                type='text'
                name='contact'
                value={product.contact} 
                onChange={(e)=>handleChange(e)}
                className=' h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button onClick={saveProduct} className=' rounded font-semibold bg-green-400 py-2 px-2 hover:bg-green-800'>
                    Save
                </button>
                <button
                onClick={reset} 
                className=' rounded font-semibold bg-red-400 py-2 px-2 hover:bg-red-800'>
                    Clear
                </button>
            </div>
            
        </div>
    </div>
  );
};

export default AddProduct