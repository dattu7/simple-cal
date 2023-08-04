import React,{ useState} from 'react'
import "./Calc.css"
function Calc() {
const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [result, setResult] = useState();
  function calcAdd(){
    const sum = one+two;
    setResult(sum);
  }
  function calcSub(){
    const sum = one-two;
    setResult(sum);
  }
  function calcMul(){
    const sum = one*two;
    setResult(sum);
  }
  function calcDiv(){
    const sum = one/two;
    setResult(sum);
  }
  return (
    <div>
        <h1>Simple Calculator</h1>
        <p>Enetr 1st num:</p><input type='number' value={one} onChange={(e)=>setOne(Number(e.target.value))}></input>
        <p>Enetr 2nd num:</p><input type='number' value={two} onChange={(e)=>setTwo(Number(e.target.value))}></input>
        <div id='buttons'>
            <button onClick={calcAdd}>Add </button>
            <button onClick={calcSub}>Sub </button>
            <button onClick={calcMul}>Mul </button>
            <button onClick={calcDiv}>Div </button>
            
        </div>
        <p>Result: {result}</p>
    </div>
    
  )
}

export default Calc