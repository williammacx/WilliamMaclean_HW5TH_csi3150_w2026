const carList = document.getElementById("carlist");
const message = document.getElementById("message");

function makeFilters() {
  const makeSelect = document.getElementById("make");
  const colorSelect = document.getElementById("color");

  const make = [...new Set usedCars.map(car => car.make))];

};
