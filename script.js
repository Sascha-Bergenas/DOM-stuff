const paragraph = document.createElement("p");

paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

document.body.appendChild(paragraph);

const title = document.createElement("h3");

title.textContent = "I'm a blue h3!";
title.style.color = "blue";

document.body.appendChild(title);
//

const div = document.createElement("div");
const title2 = document.createElement("h1");
const paragraph2 = document.createElement("p");

div.style.cssText = "background: pink; border: solid black";
title2.textContent = "I'm in a div!";
paragraph2.textContent = "ME TOO!";

document.body.appendChild(div);

div.appendChild(title2);
div.appendChild(paragraph2);

const container = document.createElement("div");

container.style.cssText = "color: white; background: purple";
container.textContent = "funkar det?";

document.body.appendChild(container);

const h2 = document.createElement("h2");

h2.textContent = "Ser så ut";

container.appendChild(h2);
