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

  if (
    (pHLevel < 5.0 || pHLevel > 7.5) &&
    (temperature < 55 || temperature > 95) &&
    (ec < 0.2 || ec > 4.5) &&
    (humidity < 30 || humidity > 90)
  ) {
    document.getElementById("Criticality").innerText = "critical";
  } else if (
    5.5 <= pHLevel <= 6.5 &&
    64.4 <= temperature <= 71.6 &&
    1.0 <= ec <= 2.0 &&
    50 <= humidity <= 70
  ) {
    document.getElementById("Criticality").innerText = "optimal";
  } else {
    document.getElementById("Criticality").innerText = "warning";
  }
}

formInput.addEventListener("input", newCard); //looks for input for formInput, then executes newCard
try {
  //tries the code below while looking for errors to log
  newCard();
} catch (e) {
  console.log(e);
}

// Critical
// ○ (pH < 5.0 OR pH > 7.5) AND (Temp < 55F OR Temp > 95F) AND (EC < 0.2 OR EC > 4.5 ) AND (RH < 30 OR RH > 90 )
// ● Optimal
// ○ (5.5 <= pH <= 6.5) AND (64.4F <= Temp <= 71.6F) AND (1.0 <= EC <= 2.0) AND (50 <= RH <= 70)
// ● Warning
// ○ (NOT Critical) AND (NOT Optimal)
