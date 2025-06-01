import React, { use, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'

const MyTask = () => {
  const {user,bids,setBids}=use(AuthContext)
    const tasks=useLoaderData()
   const myTask=tasks.filter(users=> users.email===user.email)
 const [coffees, setCoffees]=useState(myTask)
const handleDelete=(_id) => { 
  Swal.fire({
  title: "DO you really want to delete?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   fetch(`http://localhost:3000/addtask/${_id}`,
    {
      method:'DELETE'
    }
   ).then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remainingCoffees=coffees.filter(cof=> cof._id!==_id)
    setCoffees(remainingCoffees)
        }
    })
  }
})
 }

  return (
        <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-9">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Catagory</th>
        <th>Date</th>
        <th>Budget</th>

        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        coffees.map((user,index)=> <tr key={user._id}>
        <th>
          {index+1}
        </th>
        <td>
          {user.title}
        </td>
        <td>
          {user.category}
        </td>
        <td>
          {user.date}
        </td>
        <td>
          {user.budget}
        </td>
       <Link to={`/update/${user._id}`}> <button  className="btn  btn-xs">Update</button></Link>
        <button onClick={()=>{handleDelete(user._id)}}  className="btn btn-xs">Delete</button>
        <button   className="btn  btn-xs">{bids}</button>
         
        
      </tr>)
     }
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default MyTask
