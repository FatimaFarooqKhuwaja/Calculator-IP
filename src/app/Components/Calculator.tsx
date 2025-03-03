"use client"
import { useState } from "react"

const Calculator = () => {
  const [inputValue, setInputValue] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(true) // State to track the theme

  const handleButtonClick = (value: string) => {
    setInputValue((prev) => prev + value)
  }

  const handleOperation = () => {
    try {
      setInputValue(eval(inputValue).toString())
    } catch {
      setInputValue("Error")
    }
  }

  const handleClear = () => {
    setInputValue("")
  }

  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1))
  }

  const handleSqrt = () => {
    try {
      setInputValue(Math.sqrt(parseFloat(inputValue)).toString())
    } catch {
      setInputValue("Error")
    }
  }

  const handle00 = () => {
    setInputValue((prev) => prev + "00")
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} min-h-screen flex items-center justify-center`}>
      <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} w-96`}>
        {/* Theme Toggle Button */}
        <button
          className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-gray-500'}`}
          onClick={toggleTheme}
        >
          {isDarkMode ? '🌙' : '🌞'}
        </button>

        {/* Heading */}
        <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Calculator</h1>

        {/* Input Box */}
        <input
          type="text"
          className={`w-full p-4 text-2xl font-semibold ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded-md my-4`}
          placeholder="Enter number"
          value={inputValue}
          readOnly
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={handleDelete}>DEL</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("/")}>/</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("+")}>+</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("-")}>-</button>

          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("7")}>7</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("8")}>8</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("9")}>9</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("*")}>x</button>

          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("6")}>6</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("5")}>5</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("4")}>4</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("%")}>%</button>

          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("3")}>3</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("2")}>2</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("1")}>1</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleButtonClick("0")}>0</button>

          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={handleClear}>C</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={handle00}>00</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={handleSqrt}>√</button>
          <button className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`} onClick={handleOperation}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
