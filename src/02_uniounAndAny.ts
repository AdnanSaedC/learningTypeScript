// unioun type
let subs:string|number = 45
subs = "1M"

// another way
let airlineSeat : 'aisle' | 'window' | 'middle' = "middle"
let apiRequest : "pending" | "success" | "error" = "success"

let var3:any | undefined = "kkk"
// it is recommended to avoid any

const orders = [45,55,55,66,333,0]
let  var4:number|undefined; //whenever you are using a variable in loop you have add undefined

for(let order in orders){
    if(parseInt(order)=== 55){
        var4 = parseInt(order)
    }
}

console.log(var4)