import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {

  const history = useNavigate();  // Access the history object
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = async () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fname= document.getElementById('fname').value
    const lname= document.getElementById('lname').value
    const pass= document.getElementById('password').value
    const repass= document.getElementById('repassword').value
    const email= document.getElementById('email-address-icon').value
    const phoneno= document.getElementById('phoneno').value

    console.log(fname , lname ,email , pass, repass ,phoneno)

        // Check if any field is empty
        if (!fname || !lname || !email || !pass ||!repass ||!phoneno) {
          toast.error("Please fill in all fields!");
          return;
        }
        else if(pass!==repass){
            toast.error("Password mismatch");
            return;
        }
        else{
            
                const response = await fetch('https://rentify-backend-rithik-harendar-ms-projects.vercel.app/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'firstname':fname,
            'lastaname':lname ,
            'email':email ,
            'password':pass,
            'phone':phoneno,
            'user_type':isChecked ? 'seller' : 'buyer'
        })
      }).catch((e)=>toast.error(e));

      if(response.status==200){
          sessionStorage.setItem('firstname',fname)
          sessionStorage.setItem('lastaname',lname)
          sessionStorage.setItem('email',email)
          sessionStorage.setItem('password',pass)
          sessionStorage.setItem('phone',phoneno)
          sessionStorage.setItem('user_type',isChecked ? 'seller' : 'buyer')
          sessionStorage.setItem('auth',true)
          history('/seller_dashboard')
        
      }
        }
   


    // history('/');
  };

  return (
    <div className="signup">
        <ToastContainer/>
        
       <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                {/* Toggle */}
                <div>
                  <label class="inline-flex items-center  mb-5 cursor-pointer">
                    <span class="mr-0 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Buyer
                    </span>
                    <input type="checkbox" value="" class="sr-only peer" checked={isChecked}
          onChange={handleToggle}/>
                    <div class="relative mx-5 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Seller
                    </span>
                  </label>

     
      <p className='text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white'>Registering As: {isChecked ? 'Seller' : 'Buyer'}</p>
    </div>

                {/* name */}
                <div class="flex">
                <div class='w-1/2 p-2'>
                  <label
                    for="email-address-icon"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required/>
                </div>
                <div class='w-1/2 p-2'>
                  <label
                    for="email-address-icon"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required/>
                  
                </div>
                </div>
                {/* mail */}
                <div class="flex">
                <div class='w-1/2 p-2'>
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
                <div class='w-1/2 p-2'>
                  <label
                    for="email-address-icon"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input type="number" name="phoneno" id="phoneno" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9876543210" required/>
                </div>
                </div>
                {/* password */}
                <div class="flex justify-evenly">
                    <div class="w-1/2 p-2">
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
                        required
                    />
                    </div>
                    <div class='w-1/2 p-2'>
                    <label
                        for="repassword"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Re-Enter Password
                    </label>
                    <input
                        type="repassword"
                        name="repassword"
                        id="repassword"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    </div>
                </div>
                <div class='flex justify-center'>
                <button
                onClick={handleSubmit}
                  type="submit"
                  class="w-1/2 text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                </div>
                <div class='flex justify-center'>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-between w-1/2">
                  <div>
                    Already have an account ?{" "}
                    <Link
                      to="/"
                      class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Sign in
                    </Link>
                  </div>

                  <a
                    href="#"
                    class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
