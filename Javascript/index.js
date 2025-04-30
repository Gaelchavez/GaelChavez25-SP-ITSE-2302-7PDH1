document.getElementById("myForm").addEventListener("submit", submit); //Eventlisterner//
document.getElementById("myForm").addEventListener("reset", reset); //Eventlisterner//
const test = "popping off!"; // Constant
let total1 = 0; // Let
const WaB = document.getElementById("WaB"); // const
const BaF = document.getElementById("BaF"); // const

const pk1 = document.getElementById("pk1"); // const
const pk2 = document.getElementById("pk2"); // const
const pk3 = document.getElementById("pk3"); // const
const firstName = document.getElementById("fname"); // const
const lastName = document.getElementById("lname"); // const
const eMail = document.getElementById("eMail"); // const

let shirtChoice = "";
let packageChoice = "";

function submit(event) {
  event.preventDefault();
  // alert("Pop!");
  if (validation()) {
    //If and Else statement
    // console.log(calculation1().toFixed(2));
    calculation1();
    document.getElementById("rec1").innerHTML =
      "First Name:   " + firstName.value; //String Method
    document.getElementById("rec2").innerHTML = "Lastname:" + lastName.value; //String Method
    document.getElementById("rec3").innerHTML = "Email:" + eMail.value; //String Method
    document.getElementById("rec4").innerHTML = "Shirt Chosen:" + shirtChoice; //String Method
    document.getElementById("rec5").innerHTML =
      "Package Chosen: " + packageChoice; //String Method
    document.getElementById("rec6").innerHTML = "Total: " + total1.toFixed(2); //String Method
  } else {
    console.log("false");
    return;
  }
}

function validation() {
  // check if first name is empty
  //If statement
  if (firstName.value.trim() === "") {
    alert("Please enter a first name!");
    firstName.focus();
    return false;
  }
  //If statement
  // Check if last name is empty
  if (lastName.value.trim() === "") {
    alert("Please enter a last name!");
    lastName.focus();
    return false;
  }
  //If statement
  //Check if the Email is empty//
  if (eMail.value.trim() === "") {
    alert("Please enter a eMail");
    eMail.focus();
    return false;
  }

  return true;
}

function calculation1() {
  // => boolean because of .check
  let WaB = document.getElementById("WaB").checked; // Let
  let BaF = document.getElementById("BaF").checked; // Let
  
  let pk1 = document.getElementById("pk1").checked; // Let
  let pk2 = document.getElementById("pk2").checked; // Let
  let pk3 = document.getElementById("pk3").checked; // Let

total1 = 0; // the fix

  console.log(`Total before Calc: ${total1.toFixed(2)}`);
  if (WaB) {
    //If statement
    // shirtChoice = Wab.name
    shirtChoice = ("White and Black shirt ");
    total1 += parseFloat(document.getElementById("WaB").value);
    // console.log(parseFloat(document.getElementById("WaB").value));
    console.log(`Added1: ${total1.toFixed(2)}`);
    console.log(WaB);
  }
  if (BaF) {
    //If statement
    shirtChoice = ("Blue and Flowers shirt ");
    total1 += parseFloat(document.getElementById("BaF").value);
    console.log(`Added2: ${total1}`);
    console.log(BaF);
  }


  if (pk1) {
    //If statement
    packageChoice = document.getElementById("pk1").name;
    pkChoice1 = parseFloat(document.getElementById("pk1").value);
    total1 += pkChoice1;
    console.log(`Added4: ${total1.toFixed(2)}`);
    console.log(pk1);
  }
  if (pk2) {
    //If statement
    packageChoice = document.getElementById("pk2").name;
    pkChoice2 = parseFloat(document.getElementById("pk2").value);
    total1 += pkChoice2;
    console.log(`Added5: ${total1}`);
    console.log(pk2);
  }
  if (pk3) {
    //If statement
    packageChoice = document.getElementById("pk3").name;
    pkChoice3 = parseFloat(document.getElementById("pk3").value);
    total1 += pkChoice3;
    console.log(`Added6: ${total1}`);
    console.log(pk3);
  }
  //Arithmetic Operator
  const tax = total1 * 0.0825; // Variables // Constant
  console.log(`TAXES: ${tax.toFixed(2)}`);
  total1 = total1 + tax;
  console.log(total1.toFixed(2));
  // total1 = total1.toFixed(2);
  // const num = total1.toFixed(2)
  // const newNum = num;
  // return newNum
  // total1 = total1;

  
  return total1
}
// create a function that resets the page
// set all the values back to their OG state
// example total1 = 0;
// example all the innerHTML will go back to "" for the reciept

function reset() {
  document.getElementById("rec1").innerHTML = "";
  document.getElementById("rec2").innerHTML = "";
  document.getElementById("rec3").innerHTML = "";
  document.getElementById("rec4").innerHTML = "";
  document.getElementById("rec5").innerHTML = "";
  document.getElementById("rec6").innerHTML = "";

  total1 = 0;
}
