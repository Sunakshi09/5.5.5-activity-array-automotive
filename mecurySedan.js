//this includes the vehicle class as a module
import { Vehicle } from "./vehicle.js";
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}
    
checkService(); {
         
        if (this.mileage > 30000) {            
        this.scheduleService = true
        return this.scheduleService;                       
    }
}

start(); {
    
    if (this.fuel > 0) {
        console.log("engine started...!!!");
        return this.started = true;
    } else {
        console.log("engine cannot start...");
        return this.started = false;
    }
}

loadPassenger(num); {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

        }
    } else {
        console.log(this.model + " " + this.make + " is full");
    }
}


let myCar = new Car('mercury', 'sable_sedan', '2009', 'silver', 57832)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)



let mytruck = new truck('ford', 'maverick', '2022', 'oxford white', 40000)
 
mytruck.start()
mytruck.loadPassenger(5)
mytruck.stop()
mytruck.checkService()

console.log(mytruck)
