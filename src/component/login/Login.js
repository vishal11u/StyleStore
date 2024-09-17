import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className='md:py-10 pb-5 md:flex flex-wrap justify-center '  >
            <div className=' md:block'>
                <img className='md:h-[61vh]' src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' /><hr />
            </div>

            <form className='px-3 md:px-16 py-4 '>
                <div className='px-5  text-center text-4xl'>
                    <h1><span className='text-yellow-400 text-6xl' >Log</span>.in</h1><hr />
                </div>
                <div className="mt-5">
                    <label>Email Address*</label>
                    <input type="email" name="email" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Email' onChange={e => setData(e.target.value)} />
                </div>

                {error && data.length <= 0 ?
                    <label className='text-red-500 text-[13px]'>Email cannot be Empty</label> : ""}

                <div className="mt-3">
                    <label>Password*</label>
                    <input type="password" name="password" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='🔐••••••' onChange={e => setUser(e.target.value)} />
                </div>

                {error && user.length <= 0 ?
                    <label className='text-red-500 text-[13px]'>Password cannot be Empty</label> : ""}

                <div className='flex mt-3 justify-between items-center'>
                    <div className=''>
                        <input className='md:mr-2 mr-1' type='checkbox' />
                        <label for="full_name">Remember Me.</label>
                    </div>
                    <div className=' text-red-600'>
                        <Link to='/reset'><u>Forgot Password</u></Link>
                    </div>
                </div>
                <div className='mt-4 text-center'>
                    <button className='text-white px-24 bg-black md:px-40 py-3' type='button' >Login</button>
                </div>
                <div className='flex text-center justify-center mt-3'>
                    <h1 className='mr-2 text-gray-500'>Dont’t have an account ?</h1>
                    <Link className='font-semibold' to='/signup'><u>Sign Up</u></Link>
                </div>
            </form>
        </div>
    )
}

export default Login;