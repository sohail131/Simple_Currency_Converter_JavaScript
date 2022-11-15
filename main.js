//Write your code here
const input = require("sync-input");

const currencyData = [
  { name: "USD", rate: 1.0 },
  { name: "JPY", rate: 113.5 },
  { name: "EUR", rate: 0.89 },
  { name: "RUB", rate: 74.36 },
  { name: "GBP", rate: 0.75 },
];

function welcomeMessage() {
  console.log("Welcome to Currency Converter!");
}

function displayCurrencyData() {
  currencyData.forEach((currency) => {
    console.log(`1 USD equals ${currency.rate} ${currency.name}`);
  });
}

function getInputs() {
  console.log("What do you want to convert?");

  const source = getSource();
  const destination = getDestination();
  const amount = getAmount();

  calculateAmount(source, destination, amount);
}

function getSource() {
  let source = null;

  while (true) {
    source = input("From: ").toUpperCase();

    if (checkCorrectCurrency(source)) {
      break;
    } else {
      console.log("Unknown currency");
    }
  }

  return source;
}

function getDestination() {
  let destination = null;

  while (true) {
    destination = input("To: ").toUpperCase();

    if (checkCorrectCurrency(destination)) {
      break;
    } else {
      console.log("Unknown currency");
    }
  }

  return destination;
}

function getAmount() {
  let amount = null;

  while (true) {
    amount = Number(input("Amount: "));

    if (isNaN(amount)) {
      console.log("The amount has to be a number");
    } else if (amount < 1) {
      console.log("The amount cannot be less than 1");
    } else {
      break;
    }
  }

  return amount;
}

function calculateAmount(source, destination, amount) {
  const total =
    (amount / getCurrencyRate(source)) * getCurrencyRate(destination);

  console.log(
    `Result: ${amount} ${source} equals ${total.toFixed(4)} ${destination}`
  );
}

function checkCorrectCurrency(currency) {
  return currencyData.some((item) => item.name === currency);
}

function getCurrencyRate(currencyName) {
  return currencyData.filter((item) => item.name === currencyName)[0].rate;
}

function mainLoop() {
  while (true) {
    console.log("What do you want to do?");

    const option = Number(input("1-Convert currencies 2-Exit program\n"));

    if (option === 1) {
      getInputs();
    } else if (option === 2) {
      console.log("Have a nice day!");

      break;
    } else {
      console.log("Unknown input");
    }
  }
}

function init() {
  welcomeMessage();
  displayCurrencyData();
  mainLoop();
}

init();
