// import React from 'react'

function Navbar() {
    return (
      <div>
          
          <nav className="flex items-center  justify-between flex-wrap gap-32 bg-black p-6">
        {/* <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">LOGO</span>
        </div> */}
       <div className="w-7 flex ">
        
        <img src="/logo2.png"></img>
 <h2 className="flex items-center flex-shrink-0 text-white mr-26 font-semibold text-xl tracking-tight ">Movie Bazier</h2>
       </div>
       
        <div className="w-full block mx-12 lg:flex lg:items-center lg:w-auto">
          <div className="text-sm  lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              Home
            </a>
            <a href="Explore" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              Explore
            </a>
            <a href="Genre" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              Genre
            </a>
            <a href="News" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              News
            </a>
            <a href="Movies" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              Movies
            </a>
  
          </div>
          
        </div>
          </nav>
      </div>
    )
  }
  
  export default Navbar