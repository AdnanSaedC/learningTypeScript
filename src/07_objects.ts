const obj1={
    name:"obj1",
    value:45
}
// behind the scene in ts this is how things goes everytime which we call inference
// something like this
// const obj1:{
//     name:string="obj1",
//     value:number=45
// }

// so the best practice is declaring object types
let obj:{
    name:string; //the thing is you cant able to assign values here like name:string="djhdjh" this is wrong
    value:number;
}

obj={
    name:"jjjj",
    value:45
}
// so generate its datatype and then fill it

// types alies data type
type ingredients={
    ingre:string[]
}

const item:ingredients={
    ingre:["hhh","kkkk"]
}


// the dataType should satisfy the bare minimum
type Cup = {size:string}
let cup={size:"small",material:"carbon"}
let smallCup:Cup =cup
// there is no error in small cup because you are assigning known as structural typing less check
// let cupTea:Cup={size:"small",material:"carbon"}
// there is an error here more check because u r assigning directly

// TYPE separation
type Item={name:string,quantity:number}
type Address={city:string,pin:number}

type order={
    id:string,
    item:Item[], //here array object of item data type
    address:Address
}



// the entire goal is to create a function which can be used to update values so that everything remain centralize what partial does you can update individual prop also
type Chai ={
    name:string,
    price:number,
}


const updateChai=(obj:Chai,updates:Partial<Chai>)=>{
    console.log("updating chai with: ",updates)
}


let obj2:Chai={
    name:"nnn",
    price:45
}
obj2.name="kkkkk"


// obj2=updateChai(obj2,{price:25})
updateChai(obj2,{price:25})

// another function which exist whose goal is to make things requred for your function
// no matter what was done during declarin

type ChaiOrder={
    name?:string,
    quantity?:number
}
// look here both are optional no in my function i wnat this to be compulsary

const placeOrder = (order:Required<ChaiOrder>)=>{
    console.log(order)
    //here we are ot writing anything the goal is everytime a var is decalr inj my function both the values are mandatory now
    // mostly u will return the varuable from here
}

placeOrder({
    name:"masala",
    quantity:5
})

// pick selecting only few required data types from a type
type anotherType={
    name:string,
    quantity:number,
    quality:string
}

type ggggg = Pick<anotherType,"name" | "quantity">;
// another thing is omit
type omitDataTypeExaple = Omit<anotherType,"name" | "quantity">;
// we are considering only quality now

// we have selected only a few prop from over all available
const fifthVar:ggggg={
    name:"hhhh",
    quantity:454
}
