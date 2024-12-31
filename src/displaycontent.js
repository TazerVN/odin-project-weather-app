import { getGifData } from "./getDatafromServer";
import { format } from "date-fns";

function displayInformation(obj) {
  displayCurrent(obj);
  displayToday(obj);
  displayThisWeek(obj);
}

//.............................................

async function displayCurrent(obj) {
  const img = document.createElement("img");
  img.classList.add("img");

  loadImg(img, obj);

  //displaying temp at this current time

  const current = document.querySelector(".current");

  removeAllElement(current);

  const card = document.createElement("div");
  card.classList.add("card");

  const locationName = document.createElement("div");
  locationName.classList.add("text");

  locationName.textContent = obj.address.toUpperCase();

  const locationTime = document.createElement("div");
  locationTime.classList.add("text");
  locationTime.textContent = obj.currentConditions.datetime;

  const locationConditions = document.createElement("div");
  locationConditions.classList.add("text");
  locationConditions.textContent = obj.currentConditions.conditions;

  const temp = document.createElement("div");
  temp.textContent = obj.currentConditions.temp + "°C";
  temp.classList.add("text");

  card.appendChild(locationName);
  card.appendChild(locationTime);
  card.appendChild(locationConditions);
  card.appendChild(temp);

  current.appendChild(img);
  current.appendChild(card);
}

function displayToday(obj) {
  console.log(obj)
  const today = document.querySelector(".today");
  removeAllElement(today);

  for(let i = 0; i < 23; i += 3){
    const card = document.createElement("div")

    const datetime = document.createElement("div")
    const time = obj.days[0].hours[i].datetime.slice(0, -3);
    datetime.textContent = time;
    
    const averagetemp = document.createElement("div")
    averagetemp.textContent = obj.days[0].hours[i].temp + "°C"
    
    

    card.appendChild(datetime)
    card.appendChild(averagetemp)

    today.appendChild(card)
  }

  // obj.days[0].hours.forEach(hours => {


  //   const card = document.createElement("div")

  //   const datetime = document.createElement("div")
  //   datetime.textContent = hours.datetime
    
  //   const averagetemp = document.createElement("div")
  //   averagetemp.textContent = hours.temp + "°C"
    
    

  //   card.appendChild(datetime)
  //   card.appendChild(averagetemp)

  //   today.appendChild(card)
  // });
  //display temp through out the day
}

function displayThisWeek(obj) {
  const thisweek = document.querySelector(".thisweek")
  thisweek.style.backgroundColor = "rgb(83, 112, 131)";
  thisweek.style.boxShadow = "box-shadow: 0 10px 10px 0px #071116";
  
  obj.days.forEach(day =>{

    const dayoftheWeek = document.createElement("div")
    const datetime = document.createElement("div")
    datetime.textContent = "Date: " + day.datetime;
    
    const tempmax = document.createElement("div")
    tempmax.textContent = "Max temp: " + day.tempmax + "°C";
    
    const tempmin = document.createElement("div")
    tempmin.textContent = "Min temp:" + day.tempmin + "°C";
    
    const temp = document.createElement("div")
    temp.textContent = "Average temp: " + day.temp + "°C";
    
    dayoftheWeek.appendChild(datetime)
    dayoftheWeek.appendChild(tempmin)
    dayoftheWeek.appendChild(tempmax)
    dayoftheWeek.appendChild(temp)

    thisweek.appendChild(dayoftheWeek)
  })
  
  //display temp through out the week
}

function removeAllElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

async function loadImg(img_element, obj) {
  const imgData = await getGifData(obj.address);
  img_element.src = imgData.data.images.downsized_medium.url;
}

export { displayInformation, removeAllElement };
