import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({ product, deleteProduct}) {

    const navigate = useNavigate();

    const editProduct = (e,id) =>{
        e.preventDefault();
        navigate(`/editProduct/${id}`);

    }

  return (
    <tr key={product.id}>
                        <td className=' text-left px-6 py-4 whitespace-nowrap border-2 border-black'>
                            <div className=' text-sm text-gray-500'>{product.productName}</div>
                        </td>
                        <td className=' text-left px-6 py-4 whitespace-nowrap border-2 border-black'>
                            <div className=' text-sm text-gray-500'>{product.amount}</div>
                        </td>
                        <td className=' text-left px-6 py-4 whitespace-nowrap border-2 border-black'>
                            <div className=' text-sm text-gray-500'>{product.supplier}</div>
                        </td>
                        <td className=' text-left px-6 py-4 whitespace-nowrap border-2 border-black'>
                            <div className=' text-sm text-gray-500'>{product.contact}</div>
                        </td>
                        <td className=' text-right px-6 py-4 whitespace-nowrap font-medium text-sm border-2 border-black'>
                            <a
                            onClick={(e,id)=> editProduct(e,product.id.toString())}  
                            className=' text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                                Edit</a>
                            <a 
                            onClick={(e,id)=> deleteProduct(e,product.id)} 
                            className=' text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>
                                Delete</a>
                        </td>
                    </tr>
  )
}

export default Product