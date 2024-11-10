import React, { useState } from 'react'
import './use.css'


function Home() {

    const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='flex flex-col'>
        <button onClick={()=>setCount((count)=>count+1)}>
          Increase Count
        </button>
        <button onClick={count<=0 ? 0 :  ()=>setCount((count)=>count-1)}>
          Decrease Count
        </button>
        <button>Count is {count}</button>
      </div>
      
    </>
  )
}

export default Home