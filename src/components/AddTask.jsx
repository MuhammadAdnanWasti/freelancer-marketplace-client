import React, { use } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';





const AddTask = () => {
  const {user}=use(AuthContext)
  
   const handleAddTask= (e) => { 
    e.preventDefault();
    const formData=new FormData(e.target);
  
    const newTask= Object.fromEntries(formData.entries())
    

    fetch('http://localhost:3000/addtask',{
method:"POST",
headers:{
  'content-type':'application/json'
},
body:JSON.stringify(newTask)
    }).then(res=>res.json())
    .then(data=>{
     if (data.insertedId) {
      Swal.fire({
  title: "Task added successfully!",
  icon: "success",
  draggable: true
});


     }
    })
  }
  return (
    <div className='p-24'>
      <div className='p-12 text-center'>
        <h1 className="text-6xl ">Add Task</h1>
      

      </div>
      <form onSubmit={handleAddTask} >
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Title</label>
            <input type="text" name='title' className="input w-full" placeholder="Title" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Catagory</label>
            <select
        id="category"
        name="category"
     
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
            <input type="text" name='name' readOnly defaultValue={user.displayName} className="input w-full"  />

          </fieldset>
        
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Date</label>
           <input type='date' name='date'  className="input w-full"  />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Budget</label>
            <input type="text" name='budget' className="input w-full" placeholder="Budget" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Email</label>
            <input type="email" name='email' readOnly defaultValue={user.email} className="input w-full" placeholder="Email " />

          </fieldset>
         
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Description</label>
             <textarea
        id="description"
        name="description"
       
        rows="4"
        placeholder="Enter the task details here..."
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      ></textarea>

          </fieldset>
          <input type="submit" value="Add Task"  className='btn w-full my-3'/>
      </form>
    </div>
  )
}

export default AddTask
