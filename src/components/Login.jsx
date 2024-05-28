import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const history = useNavigate(); 
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
     
    if(sessionStorage.getItem('auth')=="true"){
      history(sessionStorage.getItem('user_type')=='buyer'?'/buyer_dashboard':'seller_dashboard')
    }
  }, )
  

  const handleToggle = async () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const pass= document.getElementById('password').value
    const email= document.getElementById('email-address-icon').value

    console.log(email , pass)

        // Check if any field is empty
        if ( !email || !pass ) {
          toast.error("Please fill in all fields!");
          return;
        }
        else{
            
                const response = await fetch('https://rentify-backend-rithik-harendar-ms-projects.vercel.app/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email':email ,
            'password':pass,
            'user_type':isChecked ? 'seller' : 'buyer'
        })
      }).catch((e)=>toast.error(e));
      const data=await response.json()
      console.log(data)
      if(response.status==200){
        console.log(data.data.user_type)
        toast.success("Login Success")
        sessionStorage.setItem('firstname',data.data.fname)
        sessionStorage.setItem('lastaname',data.data.lname)
        sessionStorage.setItem('email',data.data.email)
        sessionStorage.setItem('password',data.data.pass)
        sessionStorage.setItem('phone',data.data.phoneno)
        sessionStorage.setItem('user_type',data.data.user_type)
        sessionStorage.setItem('auth',true)
        if(data.data.user_type=='buyer'){
            // print()
            history('/buyer_dashboard')
        }
        else {
            history('/seller_dashboard')
        }
        
      }else{
        toast.error("INvalid USerID/Password")
      }
        }
   


    // history('/');
  };

  return (
    <div className="login">
      <section class="bg-gray-50 dark:bg-gray-900 h-lvh  my-auto overflow-auto">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" >
                <div className="flex items-center">
                  <label class="inline-flex items-center  mb-5 cursor-pointer">
                    <span class="mr-0 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Buyer
                    </span>
                    <input type="checkbox" value="" class="sr-only peer"  checked={isChecked}
          onChange={handleToggle} />
                    <div class="relative mx-5 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Seller
                    </span>
                    
                  </label>
                </div>
                  <p className='text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white'>Sign In As: {isChecked ? 'Seller' : 'Buyer'}</p>
                <div>
                  <label
                    for="email-address-icon"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email-address-icon"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="abc@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>

                <p class="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-between">
                  <div>
                    Don’t have an account yet?{" "}
                    <Link
                      to='/signup'
                      class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Sign up
                    </Link>
                  </div>

                  <a
                    href="#"
                    class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
