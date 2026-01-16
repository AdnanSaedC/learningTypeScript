let response:any = 42;

// this is nothing but since the response in the first line is of type any you have to tell explicitly to ts compiler that what data type you are expecting here
let numericLength:number=(response as string).length

// real world example

type Book ={
    name:string
}

// because usually this is things are saved in local storage
let bookString = '{"name":"who moved the cheese"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name)

// another example
const inputElement = document.getElementById("username") as HTMLInputElement

let value:any
console.log(value.toUpperCase())
console.log(value.toFixed()) // no error
value=45
value=true
value="queen"

let newValue:unknown
newValue=45
newValue=true
newValue="king" //you can assign any dataType value thats fine since unknown
if(typeof newValue === "string"){
    console.log(newValue.toUpperCase())
    // console.log(newValue.toFixed()) this will show error since we are string case right now
}

const data:unknown = "string is assigned now"
// const newVar:string = data //this will throw an error
const newVar:string = data as string

// try {
    
// } catch (error) {
    // console.log(error.message) //this will throw an error because you dint know the data type of error message
// }

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
        // this is the way to handle try Catch in ts
    }
}

// void in ts is all about iam not returning anything or i dont care about that
// never

type Role = "user" | "admin"
function redirectBasedOnRole(role:Role):void{
    if(role === "user"){
        console.log("user")
        return
    }
    if(role === "admin"){
        console.log("admin")
        return
    }
    role; 
    // when we hover on this we will get never which is good indication that we have handled all the possible value
}
function anotherExample(role:Role):void{
    if(role === "user"){
        console.log("user")
        return
    }
    role; 
    // look here role is admin not never which means you have not handled that case yet
}

// when your function has no end point it has to keep running like servers
function neverReturn():never{
    while(true){}
}