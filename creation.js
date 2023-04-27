// const domRef = document.getElementById("inner");

// const text = document.createTextNode("hello");
// const element = document.createElement("h1");
// element.classList.add("import")
// element.appent(text);

// domRef.appent(element);

function updateDom(id, tag, text) {
  const text = document.createTextNode(text);
  const element = document.createElement(tag);
  element.append(_text);
  document.getElementById(id).append(element);
}

updateDom("parent", "h4", "hello");

updateDom("parentDiv", "h1", "hello world");

//another method inserting dom nodes

const text = document.createTextNode("Hello World");
const element = document.createElement("p");
element.append(text);
document.getElementById("parent").append(element);
