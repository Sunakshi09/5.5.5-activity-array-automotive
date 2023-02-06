class Vehicle {
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passenger = 0;
    this.speed = 0;
    this.mileage = mileage;
    this.started = false;
    this.numberOfWheels = 0;
  }

  start() {
    if (this.fuel > 0) {
      console.log("engine started...!!!");
      return (this.started = true);
    } else {
      console.log("engine cannot start...");
      return (this.started = false);
    }
  }
  accelerate() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log((this.speed += 1));
        this.fuel = this.fuel - 1;
      } else {
        console.log("out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  }
  decelerate() {
    if (this.started) {
      if (this.fuel > 0) {
        if (this.speed > 0) {
          console.log((this.speed -= 1));
          this.fuel = this.fuel - 1;
        } else {
          console.log(this + " has stopped moving");
          this.fuel = this.fuel - 1;
        }
      } else {
        console.log("out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  }
  stop() {
    this.started = false;
  }

  /*drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }*/

  typeOfVehicle(wheels) {
    if (this.numberOfWheels == 8 && 8 == wheels) {
      console.log(this.model + " " + this.make + " is a Truck");
    } else if (this.numberOfWheels == 4 && 4 == wheels) {
      console.log(this.model + " " + this.make + " is a CAr");
    } else if (this.numberOfWheels == 2 && 2 == wheels) {
      console.log(this.model + " " + this.make + " is a Bike");
    } else {
      console.log("Unknown type of vehicle");
    }
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  checkService() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("engine started...!!!");
      return (this.started = true);
    } else {
      console.log("engine cannot start...");
      return (this.started = false);
    }
  }

  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if (num + this.passenger <= this.maxPassengers) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          this.model +
            " " +
            this.make +
            " not have enough space to take all passengers."
        );
      }
    } else {
      console.log(this.model + " " + this.make + " is full");
    }
  }
}

let myCar = new Car("mercury", "sable_sedan", "2009", "silver", 57832);

myCar.start();
myCar.loadPassenger(5);
myCar.stop();
myCar.checkService();

console.log(myCar);







let myTruck = new Truck("ford", "maverick", "2022", "oxford white", 40000);

myTruck.start();
myTruck.loadPassenger(5);
myTruck.stop();
myTruck.checkService();

console.log(myTruck);
