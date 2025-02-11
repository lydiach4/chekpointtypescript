interface Vehicle {
  make : String,
  model:String,
  year:number,
  start():void
} 
class Car implements Vehicle {
  model: String ;
  make: String ;
  year: number ;

  constructor(make:String,model:String,year:number){
this.make=make,
this.year=year,
this.model=model
  }
  start():void{
console.log("Car engine Started")
  }
}

const myCar = new Car ("Aston martin" , "DBS Superlegerra" , 2019)

myCar.start()