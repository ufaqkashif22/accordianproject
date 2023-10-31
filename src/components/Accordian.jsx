import React, { useState } from 'react'
import { question } from './api'
import MyAccordian from './MyAccordian'

export default function Accordian() {
    const [data,setData] = useState(question)

  
  return (
   
   <>
   <section className='main-div'>
   <h1>React Interview Question</h1>
      {
        data.map((currElm)=>{
          const {id}= currElm
        return <MyAccordian key={id} {...currElm} />
      })
      }
      </section>
    </>
  )
}
