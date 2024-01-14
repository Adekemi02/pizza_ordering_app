"use client"

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useState, FormEvent } from "react"

const loginPage: React.FC = () => {
  // const {status} = useSession();
  // const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);


  async function handleFormSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", {username, password, callbackUrl: "/"});

    setLoginInProgress(false)
  }
  
  // const handleFormSubmit = () => {
  //   if (status === "loading") {
  //     return <p>Loading...</p>;
  //   }
  //   if (status === "authenticated") {
  //     router.push("/")
  //   }
  // }
    
  
  return (
    <div className="w-[25%] m-2 p-4" style={{margin: "0 auto"}}>
      <h1 className="text-center text-xl font-semibold"> Admin Dashboard </h1>
      <form action="" className="py-4" onSubmit={handleFormSubmit}>
        
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          className="border w-full mb-5 p-2"
          value={username}
          onChange={ev => setUsername(ev.target.value)} 
        />
      
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          className="w-full border p-2"
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        
        <div className="border bg-green-700 hover:rounded-full transition-all text-center text-white font-semibold p-2 mt-5">
          <button> Sign In</button>
        </div>
        
        
      </form>
    </div>
  )
}

export default loginPage