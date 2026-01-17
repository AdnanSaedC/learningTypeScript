// parameter

function one(type:string,quantity:number){
    // you have to clearly saw about the type of parameter u r expecting
}

// here you will get an obj which has this values
function two(order:{
    type:string,quantity:number
}){}
// with values
function three(type:string="crazy",quantity:number){
    // you have to clearly saw about the type of parameter u r expecting
}
function four(quantity:number,type?:string){
    // you have to clearly saw about the type of parameter u r expecting
}

// the theing here you are not sure about the value or you are giving a predefined value then place it at the last else ever will come
// function four(type?:string,quantity:number,){
//     // you have to clearly saw about the type of parameter u r expecting
// }

// returntype
function five():number{
    return 5
}
function six(){
    return "5" //typescript itself will infer the value no need for you to do that
}
// this type is better when you dont know the exact value
function seven(order:string){
    if (!order) return null
    return order
}

// if you are not sending any data then vaoid
function login():void{
    
}