import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BuyerDashboard = () => {
  const [val,setVal]=useState([])
  const history = useNavigate();
  useEffect(()=>{
    console.log(sessionStorage.getItem('auth'))
    if(!sessionStorage.getItem('auth')){
        history('/')
    }
    if(sessionStorage.getItem('user_type')=='buyer'){
      history('/buyer_dashboard')
    }
})
const [minsc, setminsc] = useState(0);
const [maxsc, setmaxsc] = useState(0);
  const [minValue, setminValue] = useState(minsc);
  const [maxValue, setmaxValue] = useState(maxsc);

  const handleRangeChange = (e) => {
    setminValue(e.target.value);
    filterItems(e.target.value, minValue);
  };
  const handleRangeChange1 = (e) => {
    setmaxValue(e.target.value);
    filterItems(e.target.value, maxValue);
  };
  const [filteredItems, setFilteredItems] = useState(val);


  const filterItems = (min, max) => {
    setFilteredItems(
      val.filter(
        (item) => item.price >= min && item.price <= max
      )
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const value=document.getElementById('default-search').value
    const response = await fetch('https://rentify-backend-rithik-harendar-ms-projects.vercel.app/api/find/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'val':value
          })
        }).catch((e)=>toast.error(e));
        const data=await response.json()
        console.log(data)
        if(response.status==200){
          setVal(data)
          var min=data[0]['price']
          var max=data[0]['price']
          data.map(
          (e)=>{
            if(e['price']<min){
              min=e['price']
            }
            if(e['price']>max){
              max=e['price']
            }
            return [];
          })          
          setminsc(min)
          setmaxsc(max)
          setTimeout(() => {
            console.log(val,min,max)      
          }, 5000);
          toast.success("Fetched Successfully")
          
        }
          
  }
  return (
    <div class="bg-gray-50 dark:bg-gray-900 h-svh overflow-auto">
      <ToastContainer/>
      
<form class="pt-20 max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Loaction,Land mark..." required />
        <button type="submit" onClick={handleSubmit} class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

{val.length===0?<>he</>:
<div>
      <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Price range
      </label>
      <div class="flex justify-evenly">
      <input
        id="default-range"
        type="range"
        value={minValue}
        min={0}
        max={maxsc}
        onChange={handleRangeChange}
        className="w-1/3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      <input
        id="default-range"
        type="range"
        value={maxValue}
        min={0}
        max={maxsc}
        onChange={handleRangeChange1}
        className="w-1/3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        </div>
      <div className="mt-2 text-gray-900 dark:text-white">Min value: {minValue}</div>
      <div className="mt-2 text-gray-900 dark:text-white">Max value: {maxValue}</div>
</div>
}

<div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{val.length===0?<>he</>:<>
{filteredItems.map((e)=>{
  return (
    
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img class="rounded-t-lg w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3lA-twUJo-rNWnel6cC04ZubVMjEHaXpwA&s"  alt="" />
    
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e['Address'][0].toUpperCase()+e['Address'].slice(1)}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{e['Description']}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more details
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  )

})}


</>}
{/* {val.length===0?<>he</>:<>{val.map((e)=>{
  return (
    
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more details
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  )

})}</>} */}
</div>
</div>
{/* {val.map((v)=>{
  return <p>v['_id']</p>
})} */}


    </div>
  )
}

export default BuyerDashboard