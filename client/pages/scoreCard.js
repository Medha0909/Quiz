import React from 'react';
import Router from 'next/router';
const ResultCard = () => {
    function handleSubmit(){
      typeof window !== "undefined" ? localStorage.setItem("score",0):undefined
      typeof window !== "undefined" ?localStorage.setItem("wrightAns",0):undefined
      typeof window !== "undefined" ?localStorage.setItem("wrongAns",0):undefined
      Router.push("/")
       
      }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Result</h1>
        <div className="text-lg space-y-2">
          <p className="text-purple-600">Total Questions: <span className="font-semibold">10</span></p>
          <p className="text-purple-600">Total Score: <span className="font-semibold">{typeof window !== "undefined" ?localStorage.getItem("score"):undefined}</span></p>
          <p className="text-purple-600">Correct Answers: <span className="font-semibold">{typeof window !== "undefined" ?localStorage.getItem("wrightAns"):undefined}</span></p>
          <p className="text-purple-600">Wrong Answers: <span className="font-semibold">{typeof window !== "undefined" ?localStorage.getItem("wrongAns"):undefined}</span></p>
        </div>
        <button className="contro3 mt-10" id="prev-btn" onClick={handleSubmit} >Go To Home</button>
    
      </div>
      
    </div>
  );
};

export default ResultCard;