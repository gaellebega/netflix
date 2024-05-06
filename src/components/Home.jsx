// import React from 'react'

function Home() {
  return (
    <div className="bg-black flex items-center">
        
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 w-1/2 ">
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              FIND MOVIES
              <strong className=" font-extrabold  bg-gradient-to-r inline-block from-red-600 to-blue-600 text-transparent bg-clip-text">   TV SHOW AND MORE. </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit ut voluptatem mollitia,

            </p>
            <button className="py-4 px-10 rounded-md border-2 text-white font-bold ">Watch Tutorial</button>
            
          </div>
        </div>
        {/* <div className=" w-1/2 flex justify-center items-center h-screen">
        
           <img src="/cartoon1.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Image 1"></img>
             <img src="/cartoon2.jpg" className="relative z-10 w-64 h-64 object-cover" alt="Image 2">
           </img>
        </div> */}
        <div className="w-1/2 relative h-80  rounded-lg sm:h-80 lg:order-last lg:h-full pt-46">
            <img className="absolute top-0 left-0 ml-80" src="/cartoon1.jpg" alt="Spider" width="250" />
            <img className="cursor-pointer relative top-0 left-0 mt-24 ml-40 hover:shadow-outline" src="/cartoon2.jpg"   alt="Guardian" width="250" />
          </div>
    </div>
  )
}

export default Home