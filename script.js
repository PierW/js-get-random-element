// TODO: restituire un elemento casuale dall'array arr
//       che non sia presente nell'array skipped
function getRandom(min, max) {
  var dif = max - min +1;
  var randomValue = Math.floor(Math.random() * dif) + min;
  return randomValue;
}

function getRandomElement(arr) {
//////////////////////////Restituisce un elemento random dell'array
  var rndInd = getRandom (0, arr.length-1);
  var rndElem = arr[rndInd];
  return rndElem;
}

function getRandomElementWOSkipped(arr, skipped) {
  var trovato= false; //Inizializzo variabile esterna
  do {
    trovato=false;  // Se non lo mettessi sarebbe un loop infinito
    var elemento = getRandomElement(arr); //Prendo elemento random del primo array
    for (var i=0; i < skipped.length; i++) {
      if (skipped[i]==elemento) { //Faccio il ciclo almeno una volta e mi garantisco che nessuno sia uguale.
        trovato=true; //Se almeno uno è uguale cambio in true
      }
    }
    console.log(elemento,trovato,skipped); // Controllo finito il for in console log
  } while (trovato==true);
  return elemento;
}

var values  = [ 1, 2, 3, 4, 5, 6,  7 ];
var skipped = [ 5, 6, 7, 8, 9, 10, 11 ];

var rndElem = getRandomElementWOSkipped(values, skipped);
document.getElementById("data").innerHTML = rndElem;
