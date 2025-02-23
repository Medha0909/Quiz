import { Geist, Geist_Mono } from "next/font/google";
import Router from "next/router";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
  });
  
  
  
  
function Dashboard(){
	 

 function handelSubmit(event){
	localStorage.setItem("triggered",event.target.id);
	Router.push("/attempt");
 }
 function handleSubmit1(){
	
	Router.push("/scoreCard");
 }
  return (
    <div className="op">
      
<div className="na w-full flex overflow-hidden select-none">
	<nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">


		<div>
			

			<svg
				className="h-8 w-8 fill-current text-blue-600 dark:text-blue-300"
				viewBox="0 0 24 24">
				<path
					d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z"></path>
			</svg>

		</div>

		<ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
			

			<li className="mt-3 p-2 text-blue-600 dark:text-blue-300 rounded-lg">
				<a href="/dashboard" className=" flex flex-col items-center">
					<svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
						<path
							d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"></path>
					</svg>
					<span className="text-xs mt-2">dashBoard</span>
				</a>

			</li>

			
		</ul>

		<div
			className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full">
			

			<a href="#">
				<svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
					<path
						d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"></path>
				</svg>

			</a>

		</div>

	</nav>
	

	<aside className="mai">
    <div>
  <h1 className="big-heading">Multiple-Choice Questions</h1>
  <h5 className="big-heading1">For multiple-choice questions, select the one best answer (A, B, C, or D):</h5>
     </div> 

		<div className="ig flex items-center justify-between">
		

      
  

<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm
  bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px"}}>
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 1</h5>
    
    <button id="1" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px",marginLeft:"69px"}}>
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 2</h5>
    
    <button id="2" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px",marginLeft:"69px"}}>
  
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 3</h5>
    
    <button id="3" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px",marginLeft:"69px"}}>
  
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 4</h5>
    
    <button id="4" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px",marginLeft:"69px"}}>
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 5</h5>
    
    <button id="5" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>


</div>
<div>
  <h1 className="big-heading">Integer-Type Questions</h1>
  <h5 className="big-heading1">For integer-type questions, write your numerical answer clearly.</h5>
     </div> 	
<div class=" ig flex items-center justify-between">
		

      
  

<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px"}}>
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 6</h5>
    
    <button id="6" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px",marginLeft:"69px"}}>
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 7</h5>
    
    <button id="7" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px",marginLeft:"69px"}}>
  
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 8</h5>
    
    <button id="8" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px",marginLeft:"69px"}}>
  
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 9</h5>
    
    <button id="9" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
<div className="w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-200 con " style={{height:"150px",width:"190px",marginTop:"125px",marginLeft:"69px"}}>
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Question 10</h5>
    
    <button id="10" onClick={handelSubmit} className="but-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Attempt
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>


</div>

	</aside>
    <button onClick={handleSubmit1} className="but-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">
        Submit
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
  

</div>
      
 
</div>
    )
}

export default Dashboard;