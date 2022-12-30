// Demander à l'utilisateur plusieurs mots (séparés par des virgules).
let mots  = prompt("Entrer plusieurs mots séparés par des virgules");
// Mettez les mots dans un tableau.
const tabMot = mots.split(",");
console.log(tabMot);
let tailleMaximale = -1;
let asterix = '';
let espace = ' ';
// Console.log les mots un par ligne, dans un cadre rectangulaire comme indiqué ci-dessous.
for(let i of tabMot) {
    if(i.length > tailleMaximale) {
      tailleMaximale = i.length;
    }
}
tailleMaximale += 4;
for(let i = 1; i <= tailleMaximale;i++) {
    asterix+='*';
}
console.log(asterix);
for(let i of tabMot) {
    if(i.length < (tailleMaximale -4)) {
        //space*=(maxLenght-4-Number(i.length));
        for(let j=0; j<(tailleMaximale-4-Number(i.length));j++) {
            espace+=' ';
        }
        console.log(`* ${i}${espace}*`);
        espace = ' ';
    }else {
        console.log(`* ${i} *`);
    }    
}
console.log(asterix);

