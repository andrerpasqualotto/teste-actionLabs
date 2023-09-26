//for utitlity functions

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function dateFormat(dateString:string, hours:boolean){
   const date = new Date(dateString);
   if(hours){
    return date.toLocaleString("pt-BR", {day:"2-digit", month:"2-digit", year:"numeric"}) + " - " + date.getHours() + "h" + date.getMinutes() 
  }

  return date.toLocaleString("pt-BR", {day:"2-digit", month:"2-digit", year:"numeric"})
     
}

export function calculateDiff(previousClose:number, close:number){
  if (close === previousClose) {
  
    return Number(0).toFixed(2); 
  }
  console.log(close)
  console.log(previousClose)
  console.log(((close - previousClose) / close * 100).toFixed(2))
  return (((close - previousClose) / close * 100).toFixed(2))
}