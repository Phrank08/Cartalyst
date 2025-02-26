
class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model; 
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'opened' : 'closed'
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk : ${trunkStatus}`)
  }

  go() {
    if(!this.isTrunkOpen && this.speed < 200) {
      this.speed += 5;
    }
  }

  brake() {
   this.speed = Math.max(0, this.speed - 5);
  }

  openTrunk() {
    if(this.speed === 0) {
      this.isTrunkOpen = true
    }
  }

  closedTrunk() {
    this.isTrunkOpen = false;

  }
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');


car1.go()
car1.openTrunk();
car1.displayInfo();

car2.displayInfo();


class RaceCar extends Car {
  acceleration;

  constructor(brand, model, acceleration) {
    super(brand, model)
    this.acceleration = acceleration;
  }

  go() {
    this.speed += this.acceleration;
    this.speed = Math.max(0, Math.min(this.speed, 300))
  }

  openTrunk() {
    return `Don't have a trunk`
  }

  closedTrunk() {
    return `Don't have a trunk`
  }
}

const raceCar1 = new RaceCar('McLaren', 'F1', 20);
//console.log(raceCar1)
