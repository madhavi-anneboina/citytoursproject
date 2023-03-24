import React, {useState} from 'react'

const App = () => {
  const [input,setInput] = useState('')
  const [result,setResult] = useState(0)
  const changeHandler = e => {
    setInput(e.target.value)
  }
const clickHandler = () =>{
  setResult(eval(input))
   setInput('')
}
  return (
    <div>
      <h1>Caluculator App</h1>
      <input type="text" value={input} name="input" onChange={changeHandler} />
      <br/>
      <button onClick={clickHandler}> Result </button>
      
      <h4> Result is {result}</h4>
      <button onClick={()=> setInput(input + '1')}>1</button>
      <button onClick={()=> setInput(input + '2')}>2</button>
      <button onClick={()=> setInput(input + '3')}>3</button>
      <button onClick={()=> setInput(input + '4')}>4</button>
      <button onClick={()=> setInput(input + '5')}>5</button> <br/>
      <button onClick={()=> setInput(input + '6')}>6</button>
      <button onClick={()=> setInput(input + '7')}>7</button>
      <button onClick={()=> setInput(input + '8')}>8</button>
      <button onClick={()=> setInput(input + '9')}>9</button>
      <button onClick={()=> setInput(input + '0')}>0</button> <br/>

      <button onClick={()=> setInput(input + '+')}>+</button>
      <button onClick={()=> setInput(input + '-')}>-</button>
      <button onClick={()=> setInput(input + '*')}>*</button>
      <button onClick={()=> setInput(input + '/')}>/</button>
      <button onClick={()=> setInput('')}>Clr</button>

    </div>
    
  )
}

export default App

