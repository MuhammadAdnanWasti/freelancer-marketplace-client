import React from 'react'
import { useLoaderData } from 'react-router'

const Home = () => {
  const task=useLoaderData()
  return (
    <div>
        {/* banner */}
     <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://i.ibb.co/chrFFkGj/nik-7-I4u37-Hw-A08-unsplash.jpg"
      className="w-full  h-[85vh]" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://i.ibb.co/yF0xpd6Y/windows-MYom-VPp-R5-FU-unsplash.jpg"
      className="w-full h-[85vh]" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://i.ibb.co/gbMgX0qF/per-loov-4w-Okqi-XNP7-M-unsplash.jpg"
      className="w-full h-[85vh]" />
  </div>
 
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  
</div>

{/* Featured */}
<div>
  <div>
      <h1 className='font-bold text-3xl text-center my-5'>Featured Task</h1>
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
     
         
        
      </tr>)
     }
     
    </tbody>
  </table>
</div>
    </div>

</div>
{/* popular */}
    <h1 className='font-bold text-3xl text-center my-7 '>Popular Services</h1>
<div className='text-white grid grid-cols-2 md:grid-cols-3 '>
    <div>
        <div className="card bg-green-700 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co/gbMgX0qF/per-loov-4w-Okqi-XNP7-M-unsplash.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Video Editing</h2>
    
    
  </div>
</div>
    </div>
    <div>
        <div className="card bg-green-700 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co/yF0xpd6Y/windows-MYom-VPp-R5-FU-unsplash.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">SEO</h2>
    
    
  </div>
</div>
    </div>
    <div>
        <div className="card bg-green-700 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co/chrFFkGj/nik-7-I4u37-Hw-A08-unsplash.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Web development</h2>
    
    
  </div>
</div>
    </div>
</div>

 <section className=" py-12 px-6 md:px-16 rounded-lg my-9">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            The <span className="text-green-600 font-bold">premium</span> freelance
            solution for businesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✔</span>
                <div>
                  <h4 className="font-semibold">Dedicated hiring experts</h4>
                  <p className="text-sm">
                    Count on an account manager to find the right talent for your project.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✔</span>
                <div>
                  <h4 className="font-semibold">Satisfaction guarantee</h4>
                  <p className="text-sm">
                    Order confidently with guaranteed refunds for unsatisfactory work.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✔</span>
                <div>
                  <h4 className="font-semibold">Advanced management tools</h4>
                  <p className="text-sm">
                    Seamlessly integrate freelancers into your team and track projects.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✔</span>
                <div>
                  <h4 className="font-semibold">Flexible payment models</h4>
                  <p className="text-sm">
                    Choose per-project or hourly payments for long-term collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

        
        </div>

   
        <div className="w-full max-w-md">
          <img
            src="https://i.ibb.co/yF0xpd6Y/windows-MYom-VPp-R5-FU-unsplash.jpg" 
            alt="Team working"
            className="rounded-xl shadow-lg"
          />
       
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
