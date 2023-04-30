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

  //auto buttons

  const aGoButton = document.querySelector("button.aGo");
  const aStopButton = document.querySelector("button.aStop");

  //lights here
  const goLight = document.querySelector(".light.go");
  const cautionLight = document.querySelector(".light.caution");
  const stopLight = document.querySelector(".light.stop");
  const allLights = [stopLight, cautionLight, goLight];

  const live = "on";

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

  const turnOff = (allLights) => {
    for (const allLight of allLights) {
      allLight.classList.remove(live);
    }
  };

  //make buttons do stuff

  goButton.addEventListener("click", () => {
    turnOff(allLights);
    goLight.classList.add("on");
  });

  cautionButton.addEventListener("click", () => {
    turnOff(allLights);
    cautionLight.classList.add("on");
  });

  stopButton.addEventListener("click", () => {
    turnOff(allLights);
    stopLight.classList.add("on");
  });

  //clear all the lights -

  clearButton.addEventListener("click", () => {
    turnOff(allLights);
  });

  // order for lights
  const order = [[stopLight], [cautionLight], [goLight], [cautionLight]];

  let i = 0;

  let timer = null;
  const gap = 2;

  const changeLights = () => {
    turnOff(allLights); // clear lights

    const currentLights = order[i];
    log(currentLights);

    for (const light of currentLights) {
      light.classList.add(live);
      // loop them
    }

    if (i < order.length - 1) {
      i += 1;
    } else {
      i = 0;
    }
  };

  aGoButton.addEventListener("click", () => {
    changeLights();
    timer = setInterval(changeLights, gap * 1000);
  });

  aStopButton.addEventListener("click", () => {
    turnOff(allLights);
    stopLight.classList.add("on");
    clearInterval(timer); ///NOT SURE HOW TO DO THIS>>>ASK JON//RUSSELL
  });

  clearButton.addEventListener("click", () => {
    turnOff(allLights);
    i = 0;
    clearInterval(timer);
  });
});
