import React from 'react'
import './Button.module.css'
const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button  
    {...props}>
      {props.children}
    </button>
  )
}

export default Button