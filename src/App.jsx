import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="flex flex-col space-y-1">
      <div className='bg-black w-10 h-10 text-white'>1</div>
      <div className='bg-slate-200 w-10 h-10'>2</div>
      <div className='bg-gray-500 w-10 h-10'>3</div>
      <div className='bg-red-200 w-10 h-10'>4</div>
      <div className='bg-orange-200 w-10 h-10'>5</div>
    </h1>
  )
}

export default App
