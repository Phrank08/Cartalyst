class Car {
  brand;
  model;

  constructor(brand, model) {
    this.brand = brand;
    this.model = model; 
  }
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');


console.log(car1)
console.log(car2);