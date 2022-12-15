// DOME
const touches = [...document.querySelectorAll(".bouton")];
// console.log(touches);
const listeKeyCode = [];
for (const num of touches) {
    listeKeyCode.push(num.dataset.key)
}
const ecran = document.querySelector('.ecran');
// console.log(listeKeyCode);


// Les événements à declanché
document.addEventListener('keydown', (e) => {
    // Imprimer la valeur 
    const valeur = e.keyCode.toString();
    calculer(valeur);
    // console.log(valeur, typeof valeur);
});

document.addEventListener('click', (e) => {
    // console.log(e);
    const valeur = e.target.dataset.key;
    calculer(valeur);
    // console.log( valeur, typeof valeur);
});

// CREATION DE LA FONCTION CALCULER
const calculer = (valeur) => {
    if(listeKeyCode.includes(valeur)){
        // console.log(listeKeyCode);
        switch(valeur){
            case '8' :
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;

            default:
                const indexKeycode = listeKeyCode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML; 
        }
    }
}

// Message d'erreur 

window.addEventListener('error', (e) => {
    alert("Une errreur est survenue dans votre calcul :  " + e.message);
}) 
