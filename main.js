const carList = document.getElementById("carlist");
const message = document.getElementById("message");

function makeFilters() {
  const makeSelect = document.getElementById("make");
  const colorSelect = document.getElementById("color");

  const makes = [...new Set usedCars.map(car => car.make))];
  const colors = [...new Set usedCars.map(car => car.color))];

  makes.forEach(make => {
    const option = document.createElement("option");
    option.value = make;
    option.textContent = make;
    makeSelect.appendChild(option);
  });

  colors.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    makeSelect.appendChild(option);
  }); 

}

function displayCars(cars) {
  carList.innerHTML = "";

  if (cars.length === 0) {
    message.textContent = "No cars available fitting these criteria.";
    return;
  }

  message.textContent = "";
  
};
