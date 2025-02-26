class Car {
  brand;
  model;
  speed = 0;

  constructor(brand, model) {
    this.brand = brand;
    this.model = model; 
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`)
  }

  go() {
    this.speed += 5;
    this.speed = Math.max(0, Math.min(this.speed, 200));
  }

  brake() {
   this.speed = Math.max(0, this.speed - 5);
  }
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');

car1.go();
car2.brake();
car1.displayInfo()
car2.displayInfo();