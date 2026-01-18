// when we convert ts into js we get .d.ts(which is nothing but typeDeclaration)
// this is the one which is responsible for all the hints and error which we get

// in node_modules we have to other folders
// first one is bin and other one is lib

// bin holds all the executables and whereas lib holds all the type declaration syntax for predefined data types

//here when we install typescript we have type dependecies of all predefined datatype lets install the type dependencies of webRequest

// npm i axios
// if u r not getting suggestions and error then type dependencies are not there
// so install- npm i -D @types/library-name

// axiosResponse predefined data type for web request
// look while implementing functions you go normallt but with type you have to give the word type explicitly
import axios,{ type AxiosResponse } from "axios"

interface ApiResponseFormat{
    userId:number,
    id:number,
    title:string,
    completed:boolean //this is format iam expecting from then apiResponse
}

// normalWay
const fetchData= async ()=>{
    try {
        const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")

        // if there is no ok then
        if(!response.ok){
            throw new Error(`http error ${response.status}`)
        }
        const data:ApiResponseFormat = await response.json()
    } catch (error) {
        
    }
}

// axiosWay 
const fetchData2 = async ()=>{
    try {
        // here axiosResponse is a generic
        const response:AxiosResponse<ApiResponseFormat>= await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data)
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }    
    }
}