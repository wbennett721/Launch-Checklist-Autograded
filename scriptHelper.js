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
 
 
 function validateInput(string) {
    
    // let pilot = document.getElementById("pilotName");
    // let copilot = document.getElementById("copilotName").value;
    // let fuel = document.getElementById("fuelLevel").value;
    // let cargo = document.getElementById("cargoMass").value;


    if (string === "") {
        return "Empty";
    } 
    // if (string === "") {
    //     return "Empty"
    //} 
    if(!isNaN(Number(string))) {
        return "Is a Number";
    }else {return "Not a Number";
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
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         if (response.status >= 400) {
            throw new Error("bad response");
         }else {return response.json()}
         
         
 });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;