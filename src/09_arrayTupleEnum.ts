// array normal
const normalArray:string[]=["aa","bb"]
const normalArray2:number[]=[4.5,5,5]

// this is when the value can be either string or number not both combine
const normalArray3:number|string[]=["aa","bb"]
// you cant insert multiple datatypes in single array
// const normalArray3:number|string[]=["aa","bb",45] wrong

// another way
const normalArray4:Array<number>=[4,5,65]

type Chai={
    name:string,
    price:number
}

const arrayOfObject:Chai[]=[
    {
        name:"aaa",
        price:45
    },
    {
        name:"aggaa",
        price:45
    }
]

// readOnly array those array which can be defined but not modifiable
const cities:readonly string[]=['delhi',"pune","chennai"]

// two dimensional array
const table:number[][]=[
    [4,5,5,5,5],
    [58585,545,5,5,2]
]


// now tuple 
// since ts is boils down to js so that is also array
let tuple:[string,number]=["adnan",45]
// tuple.push("this can be also done") this will work but will cause massive error and very difficult to debug
// remember the order of data type is important 
// tuple=[45,"lll"] this is wrong

let userInfo:[string,number,boolean?]
userInfo=['adnan',45]
userInfo=['adnan',45,true] //since optional

// readOnly tuple
// const location:readonly [number,number] it will show an error since you have give value while designing itself
const location:readonly [number,number] =[45,55]


// named tuple
let namedTuple:[age:number]=[45]

// enums
enum apiResponse{
    // all the values should be in caps thats the standard practice
    success,
    pending,
    failed
}
const status = apiResponse.failed

enum anotherWay{
    success =100, //when you display u will get 100
    pending, //this automatically gets 101
    failed //and this one 102
}

const enum productVariety{ //this will prevent the enum valeus from getting updated
    a="aaaa",
    b="aaaa"
}

function prototype(type:productVariety){
    console.log(type)
}
// you can only give this possible vlaues
prototype(productVariety.a)

// the standard prcatice with enum is to keep the datatypes consistent whether its number or string whatever it is