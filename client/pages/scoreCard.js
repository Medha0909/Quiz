import React from 'react';
import Router from 'next/router';
const ResultCard = () => {
    function handleSubmit(){
      localStorage.setItem("score",0);
	localStorage.setItem("wrightAns",0);
	localStorage.setItem("wrongAns",0);
        Router.push("/")
      }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Result</h1>
        <div className="text-lg space-y-2">
          <p className="text-purple-600">Total Questions: <span className="font-semibold">10</span></p>
          <p className="text-purple-600">Total Score: <span className="font-semibold">{localStorage.getItem("score")}</span></p>
          <p className="text-purple-600">Correct Answers: <span className="font-semibold">{localStorage.getItem("wrightAns")}</span></p>
          <p className="text-purple-600">Wrong Answers: <span className="font-semibold">{localStorage.getItem("wrongAns")}</span></p>
        </div>
        <button className="contro3 mt-10" id="prev-btn" onClick={handleSubmit} >Go To Home</button>
    
      </div>
      
    </div>
  );
};

export default ResultCard;