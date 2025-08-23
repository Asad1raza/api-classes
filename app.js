// ✅ New Currency API (ExchangeRate-API)
const BASE_URL = "https://open.er-api.com/v6/latest";

// Flags country code mapping
const countryList = {
  USD: "US", EUR: "FR", GBP: "GB", PKR: "PK", INR: "IN", JPY: "JP", AUD: "AU",
  CAD: "CA", CNY: "CN", AED: "AE", SAR: "SA", RUB: "RU", THB: "TH", TRY: "TR",
  ZAR: "ZA", BDT: "BD", MYR: "MY", IDR: "ID", QAR: "QA", KWD: "KW"
};

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", ()=>{
  updateExchangeRate();

})


// Populate dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Update flag
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click",  (evt) => {
  evt.preventDefault();
  updateExchangeRate();

  // let amount = document.querySelector(".amount input");
  // let amtVal = amount.value;

  // if (amtVal === "" || amtVal <= 0) {
  //   amtVal = 1;
  //   amount.value = "1";
  // }

  
  // const URL = `${BASE_URL}/${fromCurr.value}`;
  // let response = await fetch(URL);
  // const data = await response.json();

  // let rate = data.rates[toCurr.value];  

  // console.log("Rate:", rate);

  // let finalAmount = amtVal * rate;  

  // msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
});

const updateExchangeRate = async ()=>{
    let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal <= 0) {
    amtVal = 1;
    amount.value = "1";
  }

  
  const URL = `${BASE_URL}/${fromCurr.value}`;
  let response = await fetch(URL);
  const data = await response.json();
  
  let rate = data.rates[toCurr.value];  

  console.log("Rate:", rate);

  let finalAmount = amtVal * rate;  

  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
}
