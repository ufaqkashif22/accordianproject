import React,{useState} from 'react'

export default function MyAccordian(props) {
  const [show , setShow]=useState(false)
  return (
    <>
    <div className='main-heading'>
    <p>⊕</p>
      <h3>{props.question}</h3>
      </div>
      {
        show && <p className='answers'>{props.answer}</p>
      }
      
  
    </>
  )
}
