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
    case 10:
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

testIf(10);
