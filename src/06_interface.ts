function printSomething(obj:{type:string,name:number}){
    console.log(obj.name)
}

// interface in ts and type in ts
// so the things is when we are declaring variable in class then use this syntax
// two ways we can do this one is type for more than one var and another one interface for only one variable


// this is the exaple where you are decalring the data types not the possible values
type TeaRecipe={
    water:number,
    milk:number
}

class food implements TeaRecipe{
    water=100;
    milk=50;
}

interface singleVariable{
    number:45|50;
}

class anotherFood implements singleVariable{
    number: 45 | 50=50;
}

// everything so far was not correct this is the correct version the only use of interface is to combine which types cant they have onlyn unioun property
// fileA.ts
interface User {
  id: number;
}

// fileB.ts (or later in same file)
interface User {
  name: string;
}

// merged result: User has both id and name
const u: User = { id: 1, name: "Adnan" }; // OK

// incase of types you have to change them by adding union and that can painful and catastrophic
// so the bydefacto for classes is interface

interface Response {
    ok:true|false
}
class myres implements Response{
    ok=true
}

// so the summary is use interface in case of classes and types in case of functions
// this is also known as literal type which means u r giving ur value notgenric data types
type values="x"|"y"|"z"
// this is unioun

function maths(var1:values){
    console.log(var1)
}

// now how to combine types
type base={ingredient:number}
type extra={masala?:number} //here means masala is optional and if it comes it would be a number value

type combine=base & extra

const dish : combine = {
    ingredient:4,
    masala:5
}

// readonly
// you can assign value only one time

type config={
    readonly appName:string
}

const cfg:config={
    appName:"adnanApp"
}

// cfg.appName="llll" this will throw an error since you can assign value onlt one time