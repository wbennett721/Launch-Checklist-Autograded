// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   const div = document.getElementById("missionTarget");
   div.innerHTML = `<h2>Mission Destination</h2>
      <ol>
       <li>Name: ${name} </li>
       <li>Diameter: ${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons: ${moons} </li>
   </ol>
   <img src="${imageUrl}">
   
   
   `;

 }
 
 
 function validateInput(input) {
    
    if (input === "") {
        return "Empty"
    }
    if(!isNaN(Number(input))) {
        return "Is a Number"
    }
    if(isNaN(Number(input))) {
        return "Not a Number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const items = document.getElementById("faultyItems");
    const status = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   
    if (fuelLevel < 10000){
        items.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        status.innerHTML = "Shuttle Not Ready for Launch";
        status.style.color = "red";

    }else {fuelStatus.innerHTML = "Fuel level high enough for launch"};

    if (cargoLevel > 10000) {
        items.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        status.innerHTML = "Shuttle Not Ready for Launch";
        status.style.color = "red";

    }else {cargoStatus.innerHTML = "Cargo mass low enough for launch"};

    if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        status.style.color = "green";
        status.innerHTML = "Shuttle is Ready for Launch";

    };

   
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random(planets.length))];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;