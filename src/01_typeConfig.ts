let name = 'adnan'

// name = 42 this is giving me error telling that name variable is tring
// it got to know that name is a string on its own through inference

// now lets see whether it will work for unsure type
// when i hover around value the type is number | string
let value = Math.random() > 0.5 ? 40 : "k"
// value = {} this also shows error since the possible value is string or number

let anotherVariable; //this means i cxan add any type
// error type "dataType" is not assigned to type "anotherDataType" means you arebassigning a wrong data type value

// so far inference
// type annotation

let var2:string = "hhhh"
let var3:number = 45
let var4:boolean = true