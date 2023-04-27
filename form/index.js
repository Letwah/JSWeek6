///GETTING DATA FROM A FORM
//DEMO HERE - https://codepen.io/jmsherry/pen/gOoJXYb?editors=0011

//or putting values back into forms - https://git.sr.ht/~dvko/populate.js

const signUp = document.forms["signUp"];
//submit event

signUp.addEventListener("submit", (event) => {
  event.preventDefault();

  // const formData = new FormData(signUp);
  // console.log(Object.fromEntries(formData));

  console.log(Object.fromEntries(new FormData(signUp)));

  // //loop over all data
  // const data = {};

  // for (let i = 0; i < signUp.elements.length; i++) {
  //   console.log(signUp.elements[i].name, signUp.elements[i].value);

  //   data[signUp.elements[i].name] = signUp.elements[i].value;
  // }

  // console.log(data);
  //   console.log(signUp.elements["email"].value);

  //   console.log("submit", event.target, signUp.elements)
});

const login = document.forms["login"];
//submit event

login.addEventListener("login", (event) => {
  event.preventDefault();

  for (let i = 0; i < signUp.elements.length; i++) {
    console.log(signUp.elements[i].name, signUp.elements[i].value);
  }
  //   console.log("submit", event.target);
});

///input event - https://slides.com/jmsherry/javascript-in-the-browser?token=K-ZXPle0#/0/67

signUp.addEventListener("input", (e) => {
  console.log(e.target.name, e.target.value);

  if (e.target.name === "email" && !e.target.value.includes("@")) {
    document.getElementById("signUpError").innerHTML = "Invalid email";
  } else {
    document.getElementById("signUpError").innerHTML = "";
  }
});

//change event - when you move away from input box

///debounce libraries  - so youre not annoying people by showing error immediately
// https://lodash.com/docs/4.17.15#throttle
