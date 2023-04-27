//events
//built in events full reference:  https://developer.mozilla.org/en-US/docs/Web/Events

// const elem = document.getElementById("demo");

// //on click

// elem.addEventListener("click", () => {
//   console.log("clicked", Math.random());
// });

// //mouse enter etc
// //passive event listener

// elem.addEventListener("mouseenter", () => {
//   console.log("mouse entered");
// });

// elem.addEventListener("mouseleave", () => {
//   console.log("left");
// });

// // https://developer.mozilla.org/en-US/docs/Web/Events

// 18:56

// const button = document.getElementById("button");

// button.addEventListener("click", (event) => {
//   console.log("Button clicked");
//   // event.stopPropagation(); ///generally don't stop bubbling!!!!
// });

// const parentDiv = document.getElementById("parentDiv");

// parentDiv.addEventListener("click", (event) => {
//   console.log("parent Div clicked");
//   // event.stopPropagation();
// });

//see event bubbling here https://domevents.dev/

// const link = document.getElementById("link");

// // link.addEventListener("click", (event) => {
// //   console.log("link clicked", event.clientX, event.clientY);  //shows mouse coordinates https://slides.com/jmsherry/javascript-in-the-browser?token=K-ZXPle0#/0/49

// //   event.preventDefault(); //common - dont do particular thing etc
// //   location.href = "https://apple.com";  ///redirect link to somewhere else - needs prevent default to work
// // });

// link.addEventListener("click", (event) => {
//   console.log(e.key); //use e.key but be aware of mobile issues
// });

const input = document.getElementById("input");

input.addEventListener("keydown", (e) => {
  // console.log(e.key, e.keyCode, e.code, e.which); //use e.key but be aware of mobile issues

  const keyPressed = e.key || e.keyCode || e.code || e.which;

  console.log(keyPressed); //if key use it otherwise use this or this...
});

//scroll event

//see 19:18 on Video https://drive.google.com/file/d/1tch4EDS9HXF7fxZqeqXBZEYYwjYc1NXi/view?ts=6448feca

//attach event listener to window

window.addEventListener("scroll", (event) => {
  console.log(window.pageXOffset, window.pageYOffset);
});

//deligated event - 19:38 - deligated listener - multiple things so listening on parent instead of all the children

// document.getElementById("btn1").addEventListener("click", () => {
//   console.log("clicked1");
// });

// document.getElementById("inner").innerHTML = `<button id="btn5">click</button>`; ----WRONG

//DELIGATED LISTENER - listen on the parent - https://codepen.io/jmsherry/pen/VwZpRPV?editors=0010

document.getElementById("parent").addEventListener("click", (e) => {
  console.log("clicked", e.target.id);
});

//Creating Elements Programatically - https://slides.com/jmsherry/javascript-in-the-browser?token=K-ZXPle0#/0/53

// const domRef = document.getElementById("inner");

// const text = document.createTextNode("Hello World");
// const element = document.createElement("h1");

// element.classList.add("important");
// element.append(text);
// domRef.append(element);

function updateDom(id, tag, text) {
  const _text = document.createTextNode(text);
  const element = document.createElement(tag);

  // element.classList.add("important");
  element.append(_text);
  // domRef.append(element);
  document.getElementById(id).append(element);
}

updateDom("parent", "h4", "hello world");

updateDom("parent", "h1", "YO!");

//Inserting into the DOM (with DOMStrings) - https://slides.com/jmsherry/javascript-in-the-browser?token=K-ZXPle0#/0/55
document
  .getElementById("parent")
  .insertAdjacentHTML("afterend", `<h1> YO </h1>`);

//see this for more explanation https://codepen.io/jmsherry/pen/NWKRRzQ?editors=0010

//Replacing Elements - 20:00

setTimeout(() => {
  document.getElementById("parent").remove();
}, 3000);
