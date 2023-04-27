import backup from "./backup.js";
const API_URL = `http://data.fixer.io/api/latest?access_key=8b853c03d3313d0cd8af733b49ee4538&base=EUR`;
let apiData;
const output = document.getElementById("output");
const currency = document.getElementById("currency");

const getData = async () => {
  console.log("Getting new data");
  try {
    const { data } = await axios.get(API_URL);

    if (!data.success) {
      apiData = backup;
    } else {
      apiData = data;
    }

    setAvailableCurrencies();
  } catch (error) {
    alert("Sorry, the API is over quota!");
  }
};
getData();

//get new data every so often
setInterval(() => {
  getData();
}, 100 * 1000);

document.addEventListener("input", (event) => {
  const form = document.forms["currencyForm"];
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  //each time the user has changed the form
  output.value = convertCurrency(data.eur, data.currency);
});

const convertCurrency = (fromValue, to) => {
  return fromValue * apiData.rates[to];
};

const setAvailableCurrencies = () => {
  for (const property in apiData.rates) {
    const option = document.createElement("option");
    option.value = property;
    option.text = property;
    currency.add(option);
  }
};
