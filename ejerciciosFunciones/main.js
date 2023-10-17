/*function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}*/

function testIf(number) {
  /*money, tenis, adult, gender*/

  /*if( money && !tenis && adult && (gender === "H" || gender === "M") ){
        "puedes entrar"
    } else if(money && tenis) {
        "vas a tener que pagar doble para entrar"
    }*/

  /*if (number === 10) {
    console.log("primer condición");
    console.log("ganaste 10 puntos");
  } else if (number === 5) {
    console.log("segunda condición");
    console.log("ganaste 5 puntos");
  } else if (number === 3) {
    console.log("tercer condición");
    console.log("ganaste 3 puntos");
  } else {
    console.log("default");
    console.log("no ganaste nada");
  }*/

  switch (number) {
    case number > 10:
      console.log("ganaste 10 puntos");
      break;
    case 5:
      console.log("ganaste 5 puntos");
      break;
    case 3:
      console.log("ganaste 3 puntos");
      break;
    default:
      console.log("no ganaste nada");
      break;
  }
}

testIf(19);

/* 
    Vamos a crear un consejero de nombre para mi mascota, este consejero necesita saber qué especie es tu mascota (perro, gato, ave) y ofrecer el siguiente nombre
        perro -> Milaneso
        gato -> Michiflais
        ave -> Piolín

    si la especie no es conocida por el consejero, nos debe decir que no conoce esa especie
*/

/*
    tenemos un calculador de dados. Este calculador requiere saber los puntos que obtuviste en cada dado ( considerando dos dados). Una vez que le digas los números te debe avisar si ganaste o perdiste considerando las siguientes combinaciones ganadoras:

    2,2
    4,6
    1,1

    cualquier otra combinación se considera perdedora
    los dados sólo tienen puntos del 1 al 6
*/
