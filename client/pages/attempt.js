import { useEffect, useState, useMemo } from "react";
import Router from "next/router";
const sample = [
  {
    _id: "1",
    question: "Which planet is closest to the Sun?",
    questionType: "mcq",
    options: [{ A: "Venus", B: "Mercury", C: "Earth", D: "Mars" }],
    answer: "B",
  },
  {
    _id: "2",
    question:
      "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
    questionType: "mcq",
    options: [{ A: "Stack", B: "Queue", C: "Tree", D: "Graph" }],
    answer: "B",
  },
  {
    _id: "3",
    question:
      "Which of the following is primarily used for structuring web pages?",
    questionType: "mcq",
    options: [{ A: "Python", B: "Java", C: "HTML", D: "C++" }],
    answer: "C",
  },
  {
    _id: "4",
    question: "Which chemical symbol stands for Gold?",
    questionType: "mcq",
    options: [{ A: "Au", B: "Gd", C: "Ag", D: "Pt" }],
    answer: "A",
  },
  {
    _id: "5",
    question:
      "Which of these processes is not typically involved in refining petroleum?",
    questionType: "mcq",
    options: [
      {
        A: "Fractional Distillation",
        B: "Cracking",
        C: "Polymerization",
        D: "Filteration",
      },
    ],
    answer: "D",
  },
  {
    _id: "6",
    question: "What is the value of 12 + 28?",
    questionType: "integer",
    answer: "40",
  },
  {
    _id: "7",
    question: "How many states are there in the United States?",
    questionType: "integer",
    answer: "50",
  },
  {
    _id: "8",
    question: "In which year was the Declaration of Independence signed?",
    questionType: "integer",
    answer: "1776",
  },
  {
    _id: "9",
    question: "What is the value of pi rounded to the nearest integer?",
    questionType: "integer",
    answer: "3",
  },
  {
    _id: "10",
    question:
      "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
    questionType: "integer",
    answer: "120",
  },
];

function Attempt() {
  const [count, setCount] = useState(30);
  const [score, setScore] = useState(0);
  const [wrightAns, setWrightAns] = useState(0);
   const [wrongAns, setWrongAns] = useState(0);
  const [str, setStr] = useState();
  const [trigg, setTrigg] = useState();
  const [ans, setAns] = useState(0);
  const [flag,setFlag] = useState(1);
  const [flag1,setFlag1] = useState(1);
  const [flag2,setFlag2] = useState(1);
  const [flag3,setFlag3] = useState(1);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const handleChange1 = (event) => {
    setIsChecked1(!isChecked1);
    if (event.target.value === sample[trigg]?.answer) {
      setFlag(flag+1)
      if(flag===1)
        {
        localStorage.setItem("score",score+5)
        setScore((prevCount) => prevCount + 5);

        }
        setStr(<span className="cl">Right Answer</span>);
        localStorage.setItem("wrightAns",wrightAns+1);
      setWrightAns((prevCount) => prevCount + 1);
    }
    if (event.target.value != sample[trigg]?.answer) {
      setStr(<span className="wg">Wrong Answer</span>);
      localStorage.setItem("wrongAns",wrongAns+1);

      setWrongAns((prevCount) => prevCount + 1);
    }
    if (isChecked2) {
      setIsChecked2(!isChecked2);
      setFlag1(1);
    }
    if (isChecked3) {
      setIsChecked3(!isChecked3);
      setFlag2(1);
    }
    if (isChecked4) {
      setIsChecked4(!isChecked4);
      setFlag3(1);
    }
  };

  const handleChange2 = (event) => {
    if (event.target.value === sample[trigg]?.answer) {
      setFlag1(flag1+1)
      if(flag1===1)
        {
        localStorage.setItem("score",score+5)
        setScore((prevCount) => prevCount + 5);
        }
      
        setStr(<span className="cl">Right Answer</span>);
        localStorage.setItem("wrightAns",wrightAns+1);
        setWrightAns((prevCount) => prevCount + 1);
    }
    if (event.target.value != sample[trigg]?.answer) {
       setStr(<span className="wg">Wrong Answer</span>);
localStorage.setItem("wrongAns",wrongAns+1);
setWrongAns((prevCount) => prevCount + 1);
    }
    setIsChecked2(!isChecked2);
    if (isChecked1) {
      setIsChecked1(!isChecked1);
      setFlag(1);
    }
    if (isChecked3) {
      setIsChecked3(!isChecked3);
      setFlag2(1);
    }
    if (isChecked4) {
      setIsChecked4(!isChecked4);
      setFlag3(1);
    }
  };
  const handleChange3 = (event) => {
    if (event.target.value === sample[trigg]?.answer) {
      setFlag2(flag2+1);
            if(flag2===1)
        {
        localStorage.setItem("score",score+5)
        setScore((prevCount) => prevCount + 5);
        }
        setStr(<span className="cl">Right Answer</span>);
        localStorage.setItem("wrightAns",wrightAns+1);
        setWrightAns((prevCount) => prevCount + 1);
    }
    if (event.target.value != sample[trigg]?.answer) {
      setStr(<span className="wg">Wrong Answer</span>);
      localStorage.setItem("wrongAns",wrongAns+1);
      setWrongAns((prevCount) => prevCount + 1);
   }
    setIsChecked3(!isChecked3);
    if (isChecked1) {
      setIsChecked1(!isChecked1);
      setFlag(1);
    }
    if (isChecked2) {
      setIsChecked2(!isChecked2);
      setFlag1(1);
    }
    if (isChecked4) {
      setIsChecked4(!isChecked4);
      setFlag3(1);
    }
  };

  const handleChange4 = (event) => {
    if (event.target.value === sample[trigg]?.answer) {
      setFlag3(flag3+1)
      if(flag3===1)
      {
      localStorage.setItem("score",score+5)
      setScore((prevCount) => prevCount + 5);
      }
      setStr(<span className="cl">Right Answer</span>);
      localStorage.setItem("wrightAns",wrightAns+1);
      setWrightAns((prevCount) => prevCount + 1);
    }
    if (event.target.value != sample[trigg]?.answer) {
      setStr(<span className="wg">Wrong Answer</span>);
      localStorage.setItem("wrongAns",wrongAns+1);
      setWrongAns((prevCount) => prevCount + 1);
   }
    setIsChecked4(!isChecked4);
    if (isChecked1) {
      setIsChecked1(!isChecked1);
      setFlag(1);
    }
    if (isChecked2) {
      setIsChecked2(!isChecked2);
      setFlag1(1);
    }
    if (isChecked3) {
      setIsChecked3(!isChecked3);
      setFlag2(1);
    }
  };

  const handleAns = (event) => {
    setAns(event.target.value);
    if (event.target.value === sample[trigg]?.answer) {
      localStorage.setItem("score",score+5)
      setScore((prevCount) => prevCount + 5);
      setStr(<span className="cl">Right Answer</span>);
      localStorage.setItem("wrightAns",wrightAns+1);
      wrightAns((prevCount) => prevCount + 1);
      
    }
    if (event.target.value != sample[trigg]?.answer) {
      setStr(<span className="wg">Wrong Answer</span>);
      localStorage.setItem("wrongAns",wrongAns+1);
      setWrongAns((prevCount) => prevCount + 1);
    }
  }
  async function handleNext(){
    await setCount(30);
      setIsChecked1(false);
      setIsChecked2(false);
      setIsChecked3(false);
      setIsChecked4(false);
      setFlag(1);
      setFlag1(1);
      setFlag2(1);
      setFlag3(1);
      setAns(0);
      setStr();
    localStorage.setItem("triggered",trigg+2);
   Router.push("/attempt")
  }

  function handleSubmit(){
    Router.push("/dashboard")
  }
  useEffect(()=>{
    if(!localStorage.getItem("score") && localStorage.getItem("score")!=0){
      localStorage.setItem("score",0)
    }
    else{
      setScore(parseInt(localStorage.getItem("score")))
    }
    if(!localStorage.getItem("wrightAns") && localStorage.getItem("wrightAns")!=0){
      localStorage.setItem("wrightAns",0)
    }
    else{
      setWrightAns(parseInt(localStorage.getItem("wrightAns")))
    }
    if(!localStorage.getItem("wrongAns") && localStorage.getItem("wrongAns")!=0){
      localStorage.setItem("wrongAns",0)
    }
    else{
      setWrongAns(parseInt(localStorage.getItem("wrongAns")))
    }
  },[])

  useEffect(() => {
    setTrigg(localStorage.getItem("triggered") - 1);
    const stop=setTimeout(() =>{ 
      setCount((count) => count - 1);
    }, 1000);
    return ()=>clearTimeout(stop);
      
});
  const abc = useMemo(() => sample[trigg]?.question, [trigg]);
  if (count <= 0) {
    return (
      <>
          <h1 className="exp">Your time has expired</h1>
      <div className="control">
    <button className="control-button" id="prev-btn" onClick={handleSubmit} >End Quiz</button>
    <button className="control-button" id="next-btn" onClick={handleNext}>Next</button>
  </div>
      </>
    );
  } else {
    if ( trigg < 5) {
      return (
        <>
        <h1 className="tim"><svg style={{marginLeft:"-65px",marginTop:"-12px"}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Alarm-Clock--Streamline-Core-Remix" height={74} width={34} ><desc>{"Alarm Clock Streamline Icon: https://streamlinehq.com"}</desc><g id="Free Remix/Interface Essential/alarm-clock--time-tock-stopwatch-measure-clock-tick"><path id="Union" fill="green" fillRule="evenodd" d="M4.18147 1.42949c0.37517 -0.17554 0.53701 -0.621986 0.36146 -0.997162 -0.17554 -0.3751764 -0.62199 -0.53701 -0.99716 -0.3614662C2.18204 0.708948 1.01085 1.68785 0.141094 2.89766c-0.241788 0.33632 -0.1651535 0.80497 0.171167 1.04676 0.336321 0.24178 0.804969 0.16515 1.046759 -0.17117 0.72159 -1.00372 1.69312 -1.81535 2.82245 -2.34376ZM9.45718 0.432328c0.17555 -0.3751765 0.62202 -0.53701 0.99722 -0.3614662C11.8181 0.708948 12.9893 1.68785 13.859 2.89766c0.2418 0.33632 0.1652 0.80497 -0.1711 1.04676 -0.3364 0.24178 -0.805 0.16515 -1.0468 -0.17117 -0.7216 -1.00372 -1.6931 -1.81535 -2.82245 -2.34376 -0.37518 -0.17554 -0.53701 -0.621986 -0.36147 -0.997162ZM2.24801 7.99953c0 -2.62448 2.12756 -4.75204 4.75204 -4.75204s4.75205 2.12756 4.75205 4.75204c0 2.62447 -2.12757 4.75207 -4.75205 4.75207 -2.62448 0 -4.75204 -2.1276 -4.75204 -4.75207Zm4.75204 -6.00204c-3.31483 0 -6.002038 2.68721 -6.002038 6.00204 0 3.31487 2.687208 6.00207 6.002038 6.00207 3.31485 0 6.00205 -2.6872 6.00205 -6.00207 0 -3.31483 -2.6872 -6.00204 -6.00205 -6.00204Zm0.75001 3.00196c0 -0.41422 -0.33579 -0.75 -0.75 -0.75 -0.41422 0 -0.75 0.33578 -0.75 0.75v3c0 0.41421 0.33578 0.75 0.75 0.75h2.5c0.41421 0 0.75004 -0.33579 0.75004 -0.75 0 -0.41422 -0.33583 -0.75 -0.75004 -0.75h-1.75v-2.25Z" clipRule="evenodd" strokeWidth={1} /></g></svg><span style={{position:"absolute",marginTop:"-55px",marginLeft:"-15px",color:"green"}}>00:{count}s</span></h1>
        <h1 className="que">Q.{abc}</h1>

          <div>
            <div className="che">
              <input
              className="ly"
                type="checkbox"
                id="A"
                name="A"
                value="A"
                checked={isChecked1}
                onChange={handleChange1}
              />
              {sample[trigg]?.options[0]?.A}
            </div>
            <div className="che">
              <input
              className="ly"
                type="checkbox"
                id="B"
                name="B"
                value="B"
                checked={isChecked2}
                onChange={handleChange2}
              />
              {sample[trigg]?.options[0]?.B}
            </div>
            <div className="che">
              <input
              className="ly"
                type="checkbox"
                id="C"
                name="C"
                value="C"
                checked={isChecked3}
                onChange={handleChange3}
              />
              {sample[trigg]?.options[0]?.C}
            </div>
            <div className="che">
              <input
              className="ly"
                type="checkbox"
                id="D"
                name="D"
                value="D"
                checked={isChecked4}
                onChange={handleChange4}
              />
              {sample[trigg]?.options[0]?.D}
            </div>
            <h2>{str}</h2>
            <div className="controls">
    
    <button className="control-button" id="next-btn"onClick={handleNext} >Next</button>
  </div>
          </div>
        </>
      );
    } else {
      return (
        <>
           <h1 className="tim"><svg style={{marginLeft:"-65px",marginTop:"-12px"}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Alarm-Clock--Streamline-Core-Remix" height={74} width={34} ><desc>{"Alarm Clock Streamline Icon: https://streamlinehq.com"}</desc><g id="Free Remix/Interface Essential/alarm-clock--time-tock-stopwatch-measure-clock-tick"><path id="Union" fill="green" fillRule="evenodd" d="M4.18147 1.42949c0.37517 -0.17554 0.53701 -0.621986 0.36146 -0.997162 -0.17554 -0.3751764 -0.62199 -0.53701 -0.99716 -0.3614662C2.18204 0.708948 1.01085 1.68785 0.141094 2.89766c-0.241788 0.33632 -0.1651535 0.80497 0.171167 1.04676 0.336321 0.24178 0.804969 0.16515 1.046759 -0.17117 0.72159 -1.00372 1.69312 -1.81535 2.82245 -2.34376ZM9.45718 0.432328c0.17555 -0.3751765 0.62202 -0.53701 0.99722 -0.3614662C11.8181 0.708948 12.9893 1.68785 13.859 2.89766c0.2418 0.33632 0.1652 0.80497 -0.1711 1.04676 -0.3364 0.24178 -0.805 0.16515 -1.0468 -0.17117 -0.7216 -1.00372 -1.6931 -1.81535 -2.82245 -2.34376 -0.37518 -0.17554 -0.53701 -0.621986 -0.36147 -0.997162ZM2.24801 7.99953c0 -2.62448 2.12756 -4.75204 4.75204 -4.75204s4.75205 2.12756 4.75205 4.75204c0 2.62447 -2.12757 4.75207 -4.75205 4.75207 -2.62448 0 -4.75204 -2.1276 -4.75204 -4.75207Zm4.75204 -6.00204c-3.31483 0 -6.002038 2.68721 -6.002038 6.00204 0 3.31487 2.687208 6.00207 6.002038 6.00207 3.31485 0 6.00205 -2.6872 6.00205 -6.00207 0 -3.31483 -2.6872 -6.00204 -6.00205 -6.00204Zm0.75001 3.00196c0 -0.41422 -0.33579 -0.75 -0.75 -0.75 -0.41422 0 -0.75 0.33578 -0.75 0.75v3c0 0.41421 0.33578 0.75 0.75 0.75h2.5c0.41421 0 0.75004 -0.33579 0.75004 -0.75 0 -0.41422 -0.33583 -0.75 -0.75004 -0.75h-1.75v-2.25Z" clipRule="evenodd" strokeWidth={1} /></g></svg><span style={{position:"absolute",marginTop:"-55px",marginLeft:"-15px",color:"green"}}>00:{count}s</span></h1>
           <h1 className="que">Q.{abc}</h1>

          <p>Answer= ______</p>
          <input type="text" id="Ans" name="Right Answer" onChange={handleAns} placeholder="Answer"/>
          
          <div className="contro">

    {trigg!=9 &&
    <button className="control-button" id="prev-btn" onClick={handleNext} >Next</button>
      }
      {trigg === 9 &&
      <button className="control-button" id="prev-btn" onClick={handleSubmit} >End Quiz</button>
      }
 
  </div>
        </>
      );
    }
  }
}

export default Attempt;