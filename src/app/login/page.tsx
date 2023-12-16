import React from 'react'

const loginPage = () => {
  return (
    <div className="w-[25%] m-2 p-4" style={{margin: "0 auto"}}>
      <h1 className="text-center text-xl font-semibold"> Admin Dashboard </h1>
      <form action="" className="py-4 ">
        
        <input type="text" name="username" placeholder="Username" className="border w-full mb-5 p-2" />
      
        <input type="password" name="password" placeholder="Password" className="w-full border p-2" />
        
        <div className="border bg-green-700 hover:rounded-full transition-all text-center text-white font-semibold p-2 mt-5">
          <button> Sign In</button>
        </div>
        
        
      </form>
    </div>
  )
}

export default loginPage