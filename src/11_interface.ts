// interface
// you can use both(types) of them interchangebly around 80%
interface structure{
    // this(INTERFACE) dont generate js code
    name:string,
    readonly value?:number
}

const var1:structure={
    name:"varkkk",
    value:50
}

interface functionInterface{
    (price:number):number
    // no paranthesis
}

const discountCalculatot:functionInterface=(p)=>p*5

// index signature
interface rating{
    [index:number]:string
    // for function use paranthesis for object uses square brackets
}

const userRating:rating={
    1:"rice",
    2:"milk"
}

interface User{
    name:string
}
interface User{
    age:number
}
// now look here things get merged
const user:User={
    name:"adnan",
    age:45
    // here you have to satisfy all the prop
}

// extending the interface
interface A{a:string}
interface B{b:string}
interface C extends A,B {}

