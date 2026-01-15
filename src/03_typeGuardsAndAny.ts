// the differnce between any and unknown is
// any - you dont know now and you dont have interest in dclaring later before using it
// on the other hand unknown you have to explictly declare the type u r expecting before using it if you dont know while declaring thats okay but before using you have to declare explictly

// it is also known as typeNarrowing

function getChai(parameter:string|number){
    if(typeof parameter === "string"){
        return `making this ${parameter}`
    }
    return `${parameter}` //here things are guaranteed that the value will be of number dataType
    // so you can evoke function of that like toFixed() etc  
    // the thing is we have narrow down to to type of variable
}

// the other thing finding truthiness
// this is just extra gurantee
function serverChai(msg?:string){
    if(msg){
        return `${msg}`
    }
    return `default value`
}

// exhautive check
function orderChai(size : "small"|"medium"|"large"|number){
    if(size === "small"){
        return `hhhh`
    }
    else if(size === "large" || size==="medium"){
        return `jjjj ${size}`
    }
    return `number ${size}` //now we know that this will run only for number
}

// now real life example
class A{
    serve(){
        return `serving from a`
    }
}
class B{
    serve(){
        return `serving from a`
    }
}

function serving(obj: A | B ){
    if(obj instanceof A){
        obj.serve() //now i guess it makes more sense here
    }
}