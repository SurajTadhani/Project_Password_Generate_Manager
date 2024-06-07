import { useState, useCallback, useEffect,useRef } from 'react'
import Navigation from './components/Navigation'
import Content from './components/Content'



function App() {
  
const [length, setLength] = useState(8)
const [numAllowed, setNumAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [password, setPassword] = useState("")

// useRef Hook
const passwordRef = useRef(null)
const passwordGenerator = useCallback( () => {
  let pass = []
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numAllowed) str += "0123456789"
if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"
for (let i = 1; i < length; i++) {
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)
}
  setPassword(pass)
},[length,numAllowed,charAllowed,setPassword])

const copypasswordboard = useCallback(() => {
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,10)
  window.navigator.clipboard.writeText(password)
  { copypasswordboard ? alert("Password has been coppied") : ""}
},[password])

useEffect(() => {
  passwordGenerator()
}, [length,numAllowed,charAllowed,passwordGenerator])

  return (
    <div className='space-y-20'>
    <Navigation />
    <div className='bg-white md:p-24 p-5'>
    <div className='w-full h-auto md:p-14 space-y-10  max-w-md mx-auto shadow-md rounded-lg px-4  text-orange-500 bg-gray-700'>
      <h1 className='text-white text-xl text-center my-3'>Password Generator</h1>
    <div className='flex shadow-md rounded-lg overflow-hidded mb-4'>
     <input type="text"
     value={password}
     className='outline-none w-full py-1 px-3'
     placeholder='Password'
     readOnly
     ref={passwordRef}
     
     />
     <button
     onClick={copypasswordboard}
     
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2 space-x-5'>
      <div className='flex items-center gap-x-1'>
      <input type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) => {setLength(e.target.value)}}
      
      />
      <label className='text-xl'>Length : {length}</label>


      </div>
     <div className='space-y-3'>
     <div className="flex items-center md:gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
            setNumAllowed((prev) => !prev);
          }}
      />
      <label className='text-base' htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label className='text-sm' htmlFor="characterInput">Characters</label>
      </div>
     </div>
    </div>
    </div>
    </div>

    <Content />
    </div>
  )
}

export default App
