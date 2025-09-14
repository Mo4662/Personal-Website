import React, { useState } from "react"
import "./Calculator.css"

function Calculator() {
  const [input, setInput] = useState("")

  const handleClick = (value) => {
    setInput((prev) => prev + value)
  }

  const handleClear = () => {
    setInput("")
  }

  const handleCalculate = () => {
    try {
      // ⚠️ eval is fine for a simple demo, but not safe in production
      setInput(eval(input).toString())
    } catch {
      setInput("Error")
    }
  }

  return (
    <div className="calculator card">
      <div className="calc-display">{input || "0"}</div>
      <div className="calc-buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={handleCalculate}>=</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("0")}>0</button>
      </div>
    </div>
  )
}

export default Calculator
