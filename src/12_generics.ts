// Generic is also a template
function convertToArray<anyType>(item:anyType):anyType[]{
    // some logic
    return [item]
}

// it his job to convert that datatype into array
convertToArray("adnan")
convertToArray(45)
convertToArray({value:454})

function pair<A,B>(a:A,b:B):[A,B]{
    // some logic
    return[a,b]
}

pair({},{})
pair(4,"masala")

// generic interfaces
interface sameType<dataType>{
    content:dataType 
}
interface numberWala<dataType>{
    content:number 
}

const obj1:sameType<string>={
    content:"hello"
}
const obj2:sameType<number>={
    content:45
}

// realworld example
interface ApiResponse<dataType>{
    status:number,
    content:dataType
}

const response: ApiResponse<{flavour:string}>={
    status:400,
    content:{
        flavour:"something"
    }
}