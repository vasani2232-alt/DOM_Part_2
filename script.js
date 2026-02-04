// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class","newClass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "purple";
// div.style.backgroundColor = "Black";
// // div.style.visibility = "hidden";

// div.style.fontSize = "25px";

// div.innerText = "Hello!"; //change the inner text

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";

// console.log(newBtn);

// let p = document.querySelector("p");
// // div.append(newBtn); //Adds at the end of the node
// //div.prepend(newBtn); //Adds at the start of the node
// //div.before(newBtn); //Adds before the node (outside)
// p.after(newBtn); //Adds after the node (outside)

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();

//Practice Que1
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

//Practice Que2
let para = document.querySelector("p");