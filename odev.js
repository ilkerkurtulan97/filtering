import data from "./data.js";
import { createTableElements } from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity");
});

/* START CODING HERE */

// Button declerations

let populationBiggerButton = document.getElementById("populationBigger");
let landAreaLessButton = document.getElementById("landAreaLess");
let doesAnyCityButton = document.getElementById("isPopulationLess");
let doesEveryCityButton = document.getElementById("isLandBigger");
let citySelect = document.getElementById("selectCity");
let resetButton = document.getElementById("reset");



//Table declerations

let tableFiltered = document.getElementById("allcities");
let tableFoundItem = document.getElementById("singlecity");


populationBiggerButton.addEventListener("click", function () {
  let populationBiggerthan = data.filter((city) => {
    return city.population > 500000;
  });
  console.log(populationBiggerthan);
  createTableElements(populationBiggerthan, "allcities");
  createTableElements([], "singlecity");
});

landAreaLessButton.addEventListener("click", function () {
  let areaLessThan = data.filter((city) => {
    return city.landArea < 1000;
  });
  createTableElements(areaLessThan, "allcities");
  createTableElements([], "singlecity");
});


doesAnyCityButton.addEventListener("click", function () {
  let anyCityLessThan = data.some((city) => {
    return city.population < 100000;
  });
  if (anyCityLessThan) {
    alert("Yes");
  }
  else {
    alert("No");
  }

});

doesEveryCityButton.addEventListener("click", function () {
  let everyCityLand = data.every((city) => {
    return city.population > 100;
  });
  if (everyCityLand) {
    alert("Yes");
  }
  else {
    alert("No");
  }

});


//Select city

const cityName = data.map(cityName => cityName.name); // Returns all city names with map
console.log(cityName);

//------------------------------------------------
//Using for each to create option for every city

cityName.forEach((element) => {
  let cityCreate = document.createElement("option");
  cityCreate.text = element;
  cityCreate.value = element;
  citySelect.appendChild(cityCreate);
});

// Found Item

citySelect.addEventListener("change", (e) => {
  const selectCities = data.filter(cities => e.target.value === cities.name);
  createTableElements(selectCities, "singlecity");
});






