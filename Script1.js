let average = 0,
  summe = 0,
  anzahl = 0;

// take input from the user
let user_input = parseInt(prompt("Bitte geben Sie eine Zahl ein:"));

while (user_input >= 0) {
  // add all positive numbers
  summe += user_input;
  // increase loop counter
  anzahl++;
  // take input again if the number is positive
  user_input = parseInt(prompt("Bitte geben Sie eine Zahl ein:"));
}
// output into console
// console.log("Anzahl: " , anzahl, "Summe: ",summe, "Average: ", average);
// average = summe / anzahl;
// console.log(`Die Summe der eingegebenen Zahlen ist: ${summe} !`);
// console.log(`Der durchschnittliche Wert der eingegebenen Zahlen ist: ${average} !`);


// output into console considering Anzahl = 0
if (anzahl != 0) {  
  average = summe / anzahl;
  console.log(`Die Summe der eingegebenen Zahlen ist: ${summe} !`);
  console.log(
    `Der durchschnittliche Wert der eingegebenen Zahlen ist: ${average} !`
  );
} else {
  console.log("Es wurden keine positiven Zahlen eingegeben.");
}
