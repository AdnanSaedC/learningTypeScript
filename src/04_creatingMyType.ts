// type is nothing burt object which has certain property

type order = {
    name:"string",
    quantity:number
}

// we are getting obj of any type and returning an obj of order type
function isOrder(obj:any):obj is order{
    return (
        typeof obj === "object" &&
        obj != null &&
        typeof obj.name === "string" && //this is to check whether it belongs to our type or not
        typeof obj.quantity === "string" 
    )
}

function servingOrder(item:order|string){
    if(isOrder(item)){
        return `the order is a valid order`
    }

    return `the ${item} is a invalid order`
}


type rice = { type : "rice" , price : number }
type friedRice = { type : "friedRice" , price : number }
type briyani = { type : "briyani" , price : number , isMeatAvailable : boolean }

type foodAvaible = rice | friedRice | briyani

function prepareFood(order:foodAvaible){
    switch(order.type){
        case "rice":
            return `make ${order.type}`
        case "friedRice":
            return `make ${order.type}`
        case "briyani":
            return `make ${order.type}`
    }
}

// another way to check is check the property

function isBriyaniOrNot(obj:foodAvaible){
    if("isMeatAvailable" in obj){
        return `it is an order of briyani`
    }
}

function checkingArray(obj:unknown):obj is string{
    if(typeof obj === "string"){
        return true
    }
    return true

    // look you cant return a string here you have to return true or false
    // if you want to return a string define your own type
}


function returningString(obj:unknown): string{
    if(typeof obj === "string"){
        return `hello`
    }
    return `hai`
    // if you want to return just a string use this approach
}