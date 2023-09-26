//for components
import React from 'react'

type Props = {
    text:string;
    onClick: () => void;
}


const Button = ({onClick, text}:Props) => (
    <button className='w-[330px] mx-auto bg-primary text-background rounded-[100px] text-base py-2 px-4 block' onClick={onClick}>
    {text}
    </button>
)

export default Button;