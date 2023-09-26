//for components
import React from 'react'

const InputText:React.FC = React.forwardRef<HTMLInputElement>((props, ref) => { 
   
    
    //focus && blue to handle classes changes
    function handleFocus(event:React.ChangeEvent<HTMLInputElement>):void{
        if(label.current !== null){
           label.current.classList.add("input__label__filled")
        }    
    } 
    function handleBlur(event:React.ChangeEvent<HTMLInputElement>):void{
        if(label.current !==null && event.target.value.length == 0){ 
            label.current.classList.remove("input__label__filled");
        }
        
    } 
  

    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        const valueLength = event.target.value.length
        event.target.value = event.target.value.replace(/\d+/g, '').toUpperCase()
        if(valueLength > 3){
          event.target.value = event.target.value.slice(0,3);
        }
    } 
const label = React.useRef<HTMLLabelElement>(null)


    return (   <div className='input__container' id="currencyCodeInput">
        <input 
            id="input" 
            ref={ref} 
            onFocus={handleFocus} 
            onBlur={handleBlur} 
            onChange={handleChange} className="input__text__field" type="text"/>
        <label htmlFor="input" ref={label} className='input__label'>Enter the currency code</label>
        </div>
    )
})

export default InputText