const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79174c5e1emshbd65eaa6cc73f24p165e16jsn718ddcae9839",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

let getWeather = (city) =>{
cityName.innerHTML = city;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    // cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    max_temp.innerHTML = response.max_temp
    min_temp.innerHTML = response.min_temp
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
    wind_degrees.innerHTML = response.wind_degrees
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e) =>{
	e.preventDefault();
	getWeather(city.value);
})


getWeather("Delhi")


// console.log("hey im connected")
//pune
let cities = ["pune", "shimla", "kerala"]
for(city of cities){
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
		options
	  )
		.then((response) => response.json())
		.then((response) => {
		  console.log(response);
		  pune_cloud_pct.innerHTML = response.cloud_pct
		  pune_feels_like.innerHTML = response.feels_like
		  pune_humidity.innerHTML = response.humidity
		  pune_max_temp.innerHTML = response.max_temp
		  pune_min_temp.innerHTML = response.min_temp
		  pune_sunrise.innerHTML = response.sunrise
		  pune_sunset.innerHTML = response.sunset
		  pune_temp.innerHTML = response.temp
		  pune_wind_degrees.innerHTML = response.wind_degrees
		  pune_wind_speed.innerHTML = response.wind_speed
		})
		.catch((err) => console.error(err));
}



/*

let city = ['pune','delhi','mumbai']
let data = []
for (let i of city){
	data.push({i : res.filter((res)=> res.city == i)})
}

*/

	
	