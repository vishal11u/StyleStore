import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className='md:py-10 pb-5 md:flex flex-wrap items-center justify-center'>
            <div className=' md:block'>
                <img className='md:h-[60vh]' src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' /><hr />
            </div>
            <form className='px-3 md:px-16 py-4'>
                <div className='px-5  text-center text-4xl'>
                    <h1><span className='text-yellow-400 text-6xl' >Sign</span>.up</h1><hr />
                </div>
                <div className="mt-5">
                    <label>User Name*</label>
                    <input type="text" name="username" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='User Name' />
                </div>

                {error && email.length === 0 ?
                    <label className='text-red-500 text-[13px]'>Email cannot be Empty</label> : ""}
                <div className="mt-3">
                    <label>Email*</label>
                    <input type="email" name="email" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                </div>

                {error && email.length === 0 ?
                    <label className='text-red-500 text-[13px]'>Email cannot be Empty</label> : ""}

                <div className="mt-3">
                    <label>Password*</label>
                    <input type="password" name="password" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='🔐••••••' onChange={e => setPassword(e.target.value)} />
                </div>

                {error && password.length === 0 ?
                    <label className='text-red-500 text-[13px]'>Password cannot be Empty</label> : ""}

                <div className='mt-4 text-center'>
                    <button className='text-white px-24 bg-black md:px-40 py-3' type='button'>Sign Up</button>
                </div>

                <div className='flex text-center justify-center mt-2'>
                    <h1 className='mr-2 text-gray-500'>Already have an account?</h1>
                    <Link className='font-semibold' to='/login'><u>Login</u></Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
