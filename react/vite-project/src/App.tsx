
import './App.css'
import AnotherCard from './component/anotherCard.tsx'
import Card from './component/Card.tsx'
import Form from './component/Form.tsx'
import type {format} from "./types.ts"

interface User{
  userDetails:format[]
}

function App() {

  const login=({userDetails}:User)=>{
    //some logic
    console.log( userDetails.map((eachUser)=>eachUser.userId)) 
  }

  return (


    <>
      
      <h1>Vite + React</h1>
      <Card name={"VR headeset"} price={5000} isSpecial={true}/>
      <Form 
        onSubmit={
          (oder)=>{
          console.log(oder.name)
        }
      }
      />
      <AnotherCard title={"king"}
        footer={<h1>hello</h1>} //since html elements are react node
        
      />
    </>
  )
}

export default App
