const formInput = document.getElementById("tele_form"); //tell js to look at the form in the html doc
const bayNumber = formInput.elements["bay_num"]; //Bay Number form input
const pHLevel = formInput.elements["pH_num"]; //pH level Number form input
const temperature = formInput.elements["temp_num"]; //temperature Number form input
const humidity = formInput.elements["hum_num"]; //humidity Number form input
const ec = formInput.elements["ec_num"]; //electrical conductivity Number form input
const submit = formInput.elements["submit_btn"]; // submit button for tele_form

function newCard() {
  //each of the following document.getElementByID should update the dashboard area, currently this is not functional
  document.getElementById("bay-num-out").innerText = bayNumber;
  document.getElementById("pH-num-out").innerText = pHLevel;
  document.getElementById("temp-num-out").innerText = temperature;
  document.getElementById("ec-num-out").innerText = ec;
  document.getElementById("humidity-num-out").innerText = humidity;
}

formInput.addEventListener("input", newCard); //looks for input for formInput, then executes newCard
try {
  //tries the code below while looking for errors to log
  newCard();
} catch (e) {
  console.log(e);
}
