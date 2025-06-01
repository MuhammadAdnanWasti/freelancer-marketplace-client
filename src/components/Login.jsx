import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useLocation, useNavigate } from 'react-router'
import Swal from 'sweetalert2'

const Login = () => {
  const {logIn, googleSignIn}=use(AuthContext)
   const navigate=useNavigate();
const location =useLocation();
  const handleLogin=(e) => { 
     e.preventDefault();

  const formData=new FormData(e.target);
  
  
    const {email,password}= Object.fromEntries(formData.entries())
    logIn(email,password)
    .then(result=>{
Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been created",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state || '/')
    }).catch(error=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password/email is wrong!",
        
      });
    })
  }

   const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your account has been created",
                          showConfirmButton: false,
                          timer: 1500
                        });
navigate(location?.state || '/')
            }).catch((error) => {
              
            })


    }
  return (
    <div>
       <div className="max-w-md mx-auto p-8 my-9 bg-white shadow-xl rounded-2xl">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-6">Login Now</h1>
        <form onSubmit={handleLogin} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" className="mt-1 w-full input input-bordered" placeholder="Email address" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" className="mt-1 w-full input input-bordered" placeholder="Password" required />
          </div>

          <button type="submit" className="w-full btn btn-primary">Login</button>

          <div className="divider">or</div>

          

          <p className="text-sm text-primary text-center mt-6">
            Don't have an account?
            <Link to="/auth/register" className="text-purple-600 hover:underline ml-1">Register</Link>
          </p>
        </form>
        <button onClick={handleGoogle} type="button" className="w-full flex items-center justify-center gap-3 btn border border-gray-300 bg-white text-black hover:bg-gray-100">
            <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#EA4335" d="M256 192v128h71c-6 40-38 64-71 64-42 0-80-37-80-96s38-96 80-96c22 0 41 9 55 23l41-41C327 150 294 136 256 136c-66 0-128 54-128 120s62 120 128 120c71 0 122-49 122-120 0-8-1-16-2-24H256z" />
            </svg>
            <span>Login with Google</span>
          </button>
      </div>
    </div>
  )
}

export default Login
