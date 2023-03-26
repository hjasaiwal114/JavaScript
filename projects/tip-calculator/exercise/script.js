
const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');


let totalBill = 0
let numberOfPerson = parseFloat(numberOfPeople.textcontent);

const calculateBill = () => {
  const bill = parseFloat(billTotalInput.value);
  const tip = parseFloat(tipInput.value)/100;
  const tip_amount = bill * tip;
  const total = tip_amount + bill;
  const perPerson = total / numberOfPerson;
  perPersonTotal.textContent = perPerson.toFixed(2);
}

const increasePeople = () => {
  numberOfPerson = parseFloat(numberOfPeople.textcontent) + 1;
  numberOfPeople.textContent = `${numberOfPerson}`;
  totalBill = total / numberOfPerson;
  const perPerson = totalBill / numberOfPerson;
  perpPersonTotal.textContent = person.toFixed(2);
}

const decreasePeople = () => {
  if (numberOfPerson > 1 && total > 0) {
    numberOfPerson = parseFloat(numberOfPeople.textContent) - 1;
    numberOfPeople.textContent = `${numberOfPerson}`;
    totalBill = total / numberOfperson;
    const perPerson = totaBill / numberOfPerson;
    perPersonTotal.textcontent = person.toFixed(2);
  } else{
    consloe,log("you can't decrease the number of people to 0 or negative!");
  }
}