import React from 'react'
import { useLoaderData } from 'react-router'

const TaskDetails = () => {
    const{name, title,description, budget,category, date,email}=useLoaderData()
    console.log(name)
  return (
    <div className='flex justify-center items-center text-center text-white my-9'>
      <div className="card bg-[#3c9175e3] w-96 shadow-sm ">
  <div className="card-body">
    <h2 className="font-bold text-3xl">{title}</h2>
    <p>Description:{description}</p>
    <p>Name:{name}</p>
    <p>Email:{email}</p>
    <p>Budget:{budget}</p>
    <p>Category:{category}</p>
    <p>Date:{date}</p>
   
  </div>
</div>
    </div>
  )
}

export default TaskDetails
