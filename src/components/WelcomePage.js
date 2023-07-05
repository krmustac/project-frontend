import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

const WelcomePage = () => {

    const navigate = useNavigate();

  return (
    <div className="rounded flex max-w-2xl mx-auto shadow border-b bg-white mt-3 mb-16  min-h-fit w-fit">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Welcome to inventory management</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4 mx-auto">
                <button 
                onClick={() => navigate("/productList")} 
                className=' rounded font-semibold bg-blue-800 py-2 px-2 hover:bg-blue-400 mx-auto text-white'>
                    Get Started
                </button>
                
            </div>
            <Footer/>
        </div>
        
    </div>
  )
}

export default WelcomePage