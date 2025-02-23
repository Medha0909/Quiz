import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import Router from "next/router";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  const [name,setName] = useState();
 

  function handleSubmit(){
    localStorage.setItem("Name",name);
  
    Router.push("/dashboard");
  }
  return (
    <> 
  
  <nav className="nai bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">QUIZ</span>
      </a>
      
    </div>
  </nav>
  
  <div id="head" className="col-lg-6" style={{marginTop:"70px",marginLeft:"400px"}}>
            <h1 className="big-heading3">"Think you're the most knowledgeable? Prove it by participating in our quiz!</h1>
           <p className="big-heading4" style={{marginTop:"35px"}} >Score <span className='sc'>0/50</span>  </p> <p className="big-heading5" >Timer  <span className='sc'>0:30</span> </p>
          <p> <input className="ny" type="text"  name="Name" onChange={(e)=> setName(e.target.value)} placeholder="Enter Your Name"/></p>
            <button type="submit" onClick={handleSubmit} className="but-7"
            >Play Quiz</button>
          </div>
  </>
  
  );
}
