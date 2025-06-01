import React from 'react'
import { Link, useLoaderData } from 'react-router'

const BrowseTask = () => {
const task=useLoaderData()
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
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        task.map((user,index)=> <tr key={user._id}>
        <th>
          {index+1}
        </th>
        <td>
          {user.title}
        </td>
        <td>
          {user.category}
        </td>
       <Link to={`/taskdetails/${user._id}`}> <button  className="btn  btn-xs">Details</button></Link>
         
        
      </tr>)
     }
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default BrowseTask
