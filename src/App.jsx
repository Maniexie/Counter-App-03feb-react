import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl'>Counter</h1>
      <div className="flex text-2xl mx-36 py-20">
        <button onClick={decrease} className='px-6 mr-10 text-amber-50 hover:bg-red-800 bg-red-500 active:bg-red-700  cursor-pointer rounded-2xl'>-</button>
        <span>{count}</span>
        <button onClick={increase} className='px-6 ml-10 text-amber-50 hover:bg-sky-800 bg-sky-500  active:bg-sky-700 cursor-pointer rounded-2xl'>+</button>
      </div>
      <div className="flex justify-center items-center z-10  py-20 w-full">
        {count === 0 && (
          <div className="absolute text-lg animate-bounce px-5 text-center top-1/2 -translate-y-1/2">
            <span className='bg-amber-300 px-5 py-1 rounded-2xl '>Angka Tidak Boleh Kurang Dari 0</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
