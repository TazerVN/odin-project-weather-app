async function getWeatherData(location) {
    try {
      const data = await fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
          location +
          "?unitGroup=metric&key=NAY4YGXZSZTPZQFNDUMAW4UZJ&contentType=json",
        {
          method: "GET",
          headers: {},
        }
      );
      const locationData = await data.json();
      console.log(locationData)
      return locationData;
    } catch (err) {
      throw err
    }
  }
  
  async function getGifData(location) {
    try {
      const data = await fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=bdw6FCMyznvuCZDGIso1Z5P33BpNqP2d&s=" +
          location +"meme",
        { mode: "cors" }
      );
  
      const gifData = await data.json();
      return gifData
    } catch (err) {
      throw err;
    }
  }

  export {getWeatherData, getGifData}