// FORK THIS PEN

// You'll have to select and store the lights as a variable
//(although it may help you later to have a reference to all of them at once via the 'light' class)

// You'll have to select and store the buttons as separate variables
// then, add an event listener to each of the buttons

// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light

// Also make the lights go on and off on hover (of the light!!)

// 2. (Extra credit): Have a go at making it so that only one light can be on at one time

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically
//(You'll have to add new start and stop buttons to the page)

const { log } = console;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Wire up the buttons to the lights

  //buttons - changed class from ID in HTML becuse then can use querySelector
  const goButton = document.querySelector("button.go");
  const cautionButton = document.querySelector("button.caution");
  const stopButton = document.querySelector("button.stop");
  const clearButton = document.querySelector("button.clear");

  //lights here
  const goLight = document.querySelector(".light.go");
  const cautionLight = document.querySelector(".light.caution");
  const stopLight = document.querySelector(".light.stop");
  const clearLights = [stopLight, cautionLight, goLight];

  //make all go off?

  const live = "on";

  const turnOff = (clearLights) => {
    for (const clearLight of clearLights) {
      clearLight.classList.remove(live);
    }
  };

  // On mouseover/mouseout

  goLight.addEventListener("mouseover", (event) => {
    goLight.classList.add(live);
  });
  goLight.addEventListener("mouseout", (event) => {
    goLight.classList.remove(live);
  });

  cautionLight.addEventListener("mouseover", (event) => {
    cautionLight.classList.add(live);
  });
  cautionLight.addEventListener("mouseout", (event) => {
    cautionLight.classList.remove(live);
  });

  stopLight.addEventListener("mouseover", (event) => {
    stopLight.classList.add(live);
  });
  stopLight.addEventListener("mouseout", (event) => {
    stopLight.classList.remove(live);
  });

  // //2. try and make one at time
  // const changeLights = () => {
  //   turnOff(clearLights);
  // };

  //make buttons do stuff

  goButton.addEventListener("click", () => {
    turnOff(clearLights);
    goLight.classList.add("on");
  });

  cautionButton.addEventListener("click", () => {
    turnOff(clearLights);
    cautionLight.classList.add("on");
  });

  stopButton.addEventListener("click", () => {
    turnOff(clearLights);
    stopLight.classList.add("on");
  });

  //clear lights
  clearButton.addEventListener("click", () => {
    turnOff(clearLights);
  });
});
