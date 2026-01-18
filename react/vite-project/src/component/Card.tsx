import { useState } from "react"

interface CardProp{
    name:string,
    price:number,
    isSpecial?:boolean
}

function Card({name,price,isSpecial=false}:CardProp) {
    const [count,setCount] = useState<number>(0)
  return (
    <div>Card
        <h2>{name} : {price} :{isSpecial} : {count}</h2>
        <button onClick={
            ()=> setCount((c)=> c+1)
        }>Click to increase count</button>
    </div>
  )
}

export default Card