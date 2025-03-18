import React, { useState } from 'react'

function Calculator(){
    const [input, setInput] = useState("");
    
    return (
        <div className='calculator'>
            <h1>Calculator</h1>

            <div>
                <input 
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                ></input>
            </div>

            <div>
                <button onClick={() => setInput(input + "7")}>7</button>
                <button onClick={() => setInput(input + "8")}>8</button>
                <button onClick={() => setInput(input + "9")}>9</button>
                <button onClick={() => setInput(input + "/")}>/</button> 
            </div>

            <div>
                <button onClick={() => setInput(input + "4")}>4</button>
                <button onClick={() => setInput(input + "5")}>5</button>
                <button onClick={() => setInput(input + "6")}>6</button>
                <button onClick={() => setInput(input + "*")}>*</button>
            </div>

            <div>
                <button onClick={() => setInput(input + "1")}>1</button>
                <button onClick={() => setInput(input + "2")}>2</button>
                <button onClick={() => setInput(input + "3")}>3</button>
                <button onClick={() => setInput(input + "-")}>-</button>
            </div>

            <div>
                <button onClick={() => setInput(input + "0")}>0</button>
                <button onClick={() => setInput(input + ".")}>.</button>
                <button onClick={() => setInput(eval(input))}>=</button>
                <button onClick={() => setInput(input + "+")}>+</button>
            </div>

            <div>
                <button onClick={() => setInput('')}>C</button>
                <button onClick={() => setInput(input.slice(0, -1))}>DEL</button>
            </div>
        </div>
    );
}

export default Calculator;