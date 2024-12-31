import { getWeatherData, getGifData } from "./getDatafromServer";
import { displayInformation, removeAllElement } from "./displaycontent";
import "./styles.css";

const Input = document.querySelector("#text");
const SubmitButton = document.querySelector(".submit");
SubmitButton.addEventListener("click", () => {
  submitSearch();
});

async function submitSearch() {
  console.log(Input.value);
  try {
    if (typeof Input.value != "string" || Input.checkValidity() === false) {
      throw "Invalid type! Try again.";
    } else {
      message("Loading...")
      const weatherObject = await getWeather(Input.value);
      displayInformation(weatherObject);
    }
  } catch (err) {
    message("Unable to Load.")
    console.log(err);
    alert(err);
  }
}

async function getWeather(location) {
  try {
    const weatherDataResult = await getWeatherData(location);
    const weatherObject = new locationObject(weatherDataResult);
    return weatherObject;
  } catch (err) {
    throw err;
  }
}

class locationObject {
  constructor(json) {
    this.address = json.address;
    this.currentConditions = json.currentConditions;
    this.days = json.days;
  }
}

function message(message) {
  const current = document.querySelector(".current");
  const today = document.querySelector(".today");
  const thisweek = document.querySelector(".thisweek");
  removeAllElement(current)
  removeAllElement(today)
  removeAllElement(thisweek )
  const loading = document.createElement("div");
  loading.textContent = message;
  current.appendChild(loading)
}
