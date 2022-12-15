// DOME
const touches = [...document.querySelectorAll(".bouton")];
// console.log(touches);
const listeKeyCode = [];
for (const num of touches) {
    listeKeyCode.push(num.dataset.key)
}
console.log(listeKeyCode);
