import React, { useState } from 'react'
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { setAuthToken } from '../../axios_helper';

const LoginUser = () => {

    const [user, setUser] = useState({
        id: "",
        username:"",
        password:"",
        roleId:"",

    });

    const navigate = useNavigate();

    const handleChange=(e)=>{
        const value =e.target.value;
        setUser({...user,[e.target.name]:value});
    };

    const loginUser = (e) =>{
        e.preventDefault();
        UserService.userLogin(user).then((response) =>{
            setAuthToken(response.data.token);
            console.log(response);
            navigate("/welcome")
        }).catch((error)=> {
            console.log(error);
        })
    };

    const reset = (e)=>{
        e.preventDefault();
        setUser({
            id: "",
            username:"",
            password:"",
            roleId:"",
        });
    }
  return (
    <div className="rounded flex max-w-2xl mx-auto shadow border-b bg-white mt-3 mb-16  min-h-fit w-fit">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Login</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal'>Username</label>
                <input 
                type='text'
                name='username'
                value={user.username}
                onChange={(e)=>handleChange(e)}
                className=' h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-600 text-sm font-normal'>Password</label>
                <input 
                type='password'
                name='password'
                value={user.password} 
                onChange={(e)=>handleChange(e)}
                className=' h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button onClick={loginUser} className=' rounded font-semibold bg-green-400 py-2 px-2 hover:bg-green-800'>
                    Login
                </button>
                <button  onClick={() => navigate("/register")} className=' rounded font-semibold bg-green-400 py-2 px-2 hover:bg-green-800'>
                    Register
                </button>
            </div>
            <Footer/>
        </div>
        
    </div>
  );
};

export default LoginUser