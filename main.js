const carList = document.getElementById("carlist");
const message = document.getElementById("message");

function populateFilters() {
  const makeSelect = document.getElementById("make");
  const colorSelect = document.getElementById("color");

  const makes = [...new Set(usedCars.map(car => car.make))];
  const colors = [...new Set(usedCars.map(car => car.color))];

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
    colorSelect.appendChild(option);
  });
}

function displayCars(cars) {
  carList.innerHTML = "";

  if (cars.length === 0) {
    message.textContent = "No cars available fitting these criteria.";
    return;
  }

  message.textContent = "";

  cars.forEach(car => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
      "<h3>" + car.year + " " + car.make + " " + car.model + "</h3>" +
      "<p>Mileage: " + car.mileage + "</p>" +
      "<p>Price: $" + car.price + "</p>" +
      "<p>Color: " + car.color + "</p>" +
      "<p>" + car.gasMileage + "</p>";

    carList.appendChild(card);
  });
}

function getSelectedValues(selectId) {
  return Array.from(document.getElementById(selectId).selectedOptions)
    .map(option => option.value);
}

function applyFilters() {
  const minYear = Number(document.getElementById("minYear").value);
  const maxYear = Number(document.getElementById("maxYear").value);
  const maxMileage = Number(document.getElementById("maxMileage").value);
  const minPrice = Number(document.getElementById("minPrice").value);
  const maxPrice = Number(document.getElementById("maxPrice").value);

  const selectedMakes = getSelectedValues("make");
  const selectedColors = getSelectedValues("color");

  const filtered = usedCars.filter(car => {
    return (
      (!minYear || car.year >= minYear) &&
      (!maxYear || car.year <= maxYear) &&
      (!maxMileage || car.mileage <= maxMileage) &&
      (!minPrice || car.price >= minPrice) &&
      (!maxPrice || car.price <= maxPrice) &&
      (selectedMakes.length === 0 || selectedMakes.includes(car.make)) &&
      (selectedColors.length === 0 || selectedColors.includes(car.color))
    );
  });

  displayCars(filtered);
}

document.getElementById("filterBtn").addEventListener("click", applyFilters);

populateFilters();
displayCars(usedCars);
