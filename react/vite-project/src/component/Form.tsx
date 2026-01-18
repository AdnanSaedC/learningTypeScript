import React, { useState } from 'react'

interface FormProps{
    // it will be a function with one obj of two property
    onSubmit(order:{name:string,value:number}):void
}

function Form({onSubmit}:FormProps) {

   


    const [name,setName] = useState<string>("nothing")
    const [value,setValue] = useState<number>(45)

    // you get the control once the form it setup
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        // no we will giving the access back to the parant component with an obj and two valeus
        onSubmit({name,value})
         // in app.jsx
                // <Form 
                //     onSubmit={
                //       (oder)=>{
                //          the parent componet has taken the obj and consollogged the value
                //       console.log(oder.name)
                //     }
                //   }
                //   />
    }

  return (


    // while submitting the form we are calling handleSubmit here
    <form onSubmit={handleSubmit}>
        <label>Input name: </label>
        <input 
            value={name}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                setName(e.target.value)
            }
        />
        <label>value name: </label>
        <input 
            value={value}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                setValue(Number(e.target.value))
            }
        />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form