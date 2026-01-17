class basic{

    static count=5
    public name:string = "lemon";
    // similarly we have private access modifier also
    // protected you will get in this class and those classes which inherit this class
    price:number;
    // another way to declare private varuables
    // #number = 100 this is js syntax
    private _someything:string="xyz" //look underscore just  another way to tell everybody that its private nothing much(just a good practice)

    public readonly readOnlyVariable:number=250

    constructor(name:string,price:number){
        this.name=name,
        this.price=price
        this.readOnlyVariable=this.readOnlyVariable;//if u apply diffrent variable it will cause error
    }

    get something(){
        return this._someything
    }
    set something(value:string){
        this._someything=value
    }
}

const obj1 = new basic("keyborad",45)
console.log(obj1.something)
obj1.something="525554"
console.log(basic.count) //since count is a static variable

// abstract classes this are the classes using which you can't craete objcets
abstract class noObjectClass{
    abstract func():void //this is the way to describe abstart functions
}

class fromAbstract extends noObjectClass{
    func(): void {
        console.log("demo")
    }
}



// composition
class Heater{
    heat(){}
}

class toaster{
    // you can also declare variables here no issue
    constructor(private heater:Heater){}

    make(){
        this.heater.heat()
    }
}