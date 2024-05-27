import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
    const history = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const area= String(document.getElementById('area').value).toLowerCase()
      const city= String(document.getElementById('city').value).toLowerCase()
      const hosp= parseInt(document.getElementById('hosp').value)
      const school= parseInt(document.getElementById('school').value)
      const category= String(document.getElementById('category').value).toLowerCase()
      const desc= String(document.getElementById('description').value).toLowerCase()
      const add= String(document.getElementById('address').value).toLowerCase()
      const email=sessionStorage.getItem('email')
      const price=parseInt(document.getElementById('price').value)
  
      console.log(category , area ,city , hosp, school,desc,add )
  
          if (!category || !area || !city || !hosp|| !school||!desc||!add ||!price) {
            toast.error("Please fill in all fields!");
            return;
          }
          else{
              
                  const response = await fetch('https://rentify-backend-rithik-harendar-ms-projects.vercel.app/api/add/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'email':email,
            "category":category ,"area":area ,"city":city , "hospital_count":hosp,"school_count":school,"Description":desc,"Address":add,'price':price
          })
        }).catch((e)=>toast.error(e));
  
        if(response.status==200){
            
toast.success("Added Successfully")
          
        }
          }

    };
    useEffect(()=>{
        console.log(sessionStorage.getItem('auth'))
        if(!sessionStorage.getItem('auth')){
            history('/')
        }
        if(sessionStorage.getItem('user_type')=='buyer'){
          history('/buyer_dashboard')
        }
})
  return (
    <div class="bg-gray-50 dark:bg-gray-900 h-svh my-auto">
      <br />
      <ToastContainer/>
       <form class="p-4 md:p-5 w-2/3 flex flex-col mx-auto justify-center items-center bg-gray-800 rounded-lg">
                <div class="grid gap-4 mb-4 grid-cols-2 w-full self-center">
                    <div class="col-span-2 flex justify-evenly">
                      <div class='w-1/2 p-2'>

                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
                        <input type="text" name="area" id="area" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                      </div>
                      <div class='w-1/2 p-2'>

                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input type="text" name="city" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                      </div>
                    </div>
                    <div class="col-span-2 flex justify-evenly">
                      <div class='w-1/2 p-2'>

                      <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hosptial count within 2 kms</label>
                      <input type="number" name="hosp" id="hosp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="2" required />
                      </div>
                      <div class='w-1/2 p-2'>

                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School count within 2 kms</label>
                        <input type="number" name="school" id="school" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="2" required />
                      </div>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Rs299999" required />
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="rent">Rent</option>
                            <option value="lease">Lease</option>
                            <option value="sale">Sale</option>
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Description</label>
                        <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                    <div class="col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Address </label>
                        <textarea id="address" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                <button type="submit" 
                onClick={handleSubmit}
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new Property
                </button>
            </form>
    </div>
  )
}

export default Dashboard