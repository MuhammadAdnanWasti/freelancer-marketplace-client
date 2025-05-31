import React from 'react'
import { useLoaderData } from 'react-router'
import Swal from 'sweetalert2'

const Update = () => {
     const{name,_id, title,description, budget,category, date,email}=useLoaderData()
     const handleUpdate=(e) => { 
         e.preventDefault()
const formData= new FormData(e.target)
const updatedTask=Object.fromEntries(formData.entries())
fetch(`http://localhost:3000/addtask/${_id}`,{
method:'PUT',
headers:{
  'content-type':'application/json'
},
body:JSON.stringify(updatedTask)
}).then(res=>res.json())
    .then(data=>{
if (data.
modifiedCount) {
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Task updated Successfully",
  showConfirmButton: false,
  timer: 1500
});
}
    })
      }
  return (
    <div className='p-24'>
      <div className='p-12 text-center'>
        <h1 className="text-6xl ">Update Task</h1>
      

      </div>
      <form onSubmit={handleUpdate} >
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Title</label>
            <input type="text" name='title' defaultValue={title} className="input w-full" placeholder="Title" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Catagory</label>
            <select
        id="category"
        name="category"
     defaultValue={category}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">-- Select a category --</option>
        <option value="Web Development">Web Development</option>
        <option value="Design">Design</option>
        <option value="Writing">Writing</option>
        <option value="Marketing">Marketing</option>
      </select>

          </fieldset>
           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Name</label>
            <input type="text" name='name' readOnly defaultValue={name} className="input w-full"  />

          </fieldset>
        
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Date</label>
           <input type='date' name='date' defaultValue={date} className="input w-full"  />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Budget</label>
            <input type="text" name='budget' defaultValue={budget} className="input w-full" placeholder="Budget" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Email</label>
            <input type="email" name='email' readOnly defaultValue={email} className="input w-full" placeholder="Email " />

          </fieldset>
         
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Description</label>
             <textarea
        id="description"
        name="description"
       defaultValue={description}
        rows="4"
        placeholder="Enter the task details here..."
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      ></textarea>

          </fieldset>
          <input type="submit" value="Update Task"  className='btn w-full my-3'/>
      </form>
    </div>
  )
}

export default Update
