import React from 'react'

const Button = ({title, id ,rightIcon, leftIcon, containerClass}) => {
  return (
    <button id={id} className={`${containerClass} group absolute bottom-10 right-8 w-fit cursor-pointer
    overflow-hidden rounded-full px-7 py-3 bg-white text-black `}>
        {leftIcon}
        <span className="relative incline-flex overflow-hidden text-xs uppercase">{title}</span>
    </button>
  )
}

export default Button