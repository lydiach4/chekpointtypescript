interface Voiture {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Voiture {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}


