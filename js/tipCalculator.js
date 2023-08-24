//cost
//tip
//# of ppl
//pay

const allFieldsEntered = (cost, tip, numberOfPeople) => {
    const hasCostValue = cost.value.length > 0;
    const hasTipValue = tip.value.length > 0;
    const hasNumberOfPeopleValue = numberOfPeople.value.length > 0;

    return hasCostValue && hasTipValue && hasNumberOfPeopleValue;
}

const setSplitAmount = (cost, tip, numberOfPeople) => {
    const c = parseFloat(cost.value);
    const t = parseFloat(tip.value) / 100;
    const n = parseFloat(numberOfPeople.value);

    const total = (c + c * t) / n;

    const pay = document.getElementById("pay");
    pay.innerText = "$" + total.toFixed(2);
}

const cost = document.getElementById("cost");
const tip = document.getElementById("tip");
const numberOfPeople = document.getElementById("numberOfPeople");

const valueOfCost = cost.value;

const calculateTip = () => {
    const cost = document.getElementById("cost");
    const tip = document.getElementById("tip");
    const numberOfPeople = document.getElementById("numberOfPeople");

    const hasAllFields = allFieldsEntered(cost, tip, numberOfPeople);
        if(hasAllFields){
            setSplitAmount(cost, tip, numberOfPeople);
        }
}