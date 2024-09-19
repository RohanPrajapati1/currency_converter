const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const to = document.querySelector(".to select");
// console.log(dropdown)

// for (code in countryList){
//     console.log(code , countryList[code]);
// }

let i = 0;

for(let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        // console.log(currCode)
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
       }
       else  if(select.name === "to" && currCode === "INR"){
        newOption.selected = "selected";
   } 
        select.append(newOption);
    }

    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click" , async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    if(amountValue === "" || amountValue < 1){
        amountValue = 1;
        amount.value = "1";
    }


    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let res = await fetch(URL);
    let data = await res.json();
    // let data1 = data.fromCurr['inr'];
    console.log(data.usd);
});