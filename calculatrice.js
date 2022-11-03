
// LES FONCTIONS QUE NOUS ALLONS UTILISER POUR LA FAIRE LE CALCULE

// La fonction addition
function addition(nombreA, nombreB){
    return nombreA + nombreB;
}

// La fonction Soustraction
function soustraction(nombreA, nombreB){
    return nombreA - nombreB;
}

// La fonction Multiplication 

function multiplication(nombreA, nombreB){
    return nombreA * nombreB;
}

// function Division 

function division(nombreA, nombreB){
    if(nombreB == 0){
        throw new Error("Impossible de divisé par 0.");
    }
    return nombreA / nombreB;
}

// FAIRE  LE CHOIX AVEC LE 4 POSSIBILITE DANS LA BOULCLE

let restart = false;
do{
        let choix;
    do {
        choix = Number(prompt('Que voulez vous faire ?\n\n 1- Addition \n 2- Soustraction\n 3- Multiplication\n 4- Division'));
    } while (choix != 1 && choix != 2 && choix != 3 && choix !=4);



    // FAIRE LE CHOIX AVEC LE DEUX NOMBRE UN ET DEUX
    let premierNombre;
    let deuxiemeNombre;

    do{
        premierNombre   = Number(prompt('Entrez le premier nombre : '));
        deuxiemeNombre  = Number(prompt('Entrez le deuxième nombre :'));
    }while (isNaN(premierNombre) || isNaN(deuxiemeNombre))


    // FAIRE LE CHOIX DE CALCUL avec le SWITCH


    let resultat;
    try{
        switch(choix){
            case 1:
                resultat = addition(premierNombre, deuxiemeNombre);
                break;
            case 2:
                resultat = soustraction(premierNombre, deuxiemeNombre);
                break;
            case 3:
                resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
            case 4:
                resultat = division(premierNombre, deuxiemeNombre);
                break;
        
            default:
                throw new Error("Une erreur est survenue");
        }
        
        alert("Voici le resultat : " + resultat);
    }
    catch(error){
        alert(error);
    }
    restart = confirm("Souhaitez-vous recommencer un calcul ?");
}while(restart)
