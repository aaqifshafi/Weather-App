const apiKey = "4b6b7bcaa679151dd62e5afe0ffda446";
const imgSrc =
  "https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png";
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=metric';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) =>{
  if(data.cod=="404"){
    weather.innerHTML=`<h2 class="temperature">City not Found</h2>`
    return;
  }
  weather.innerHTML= `<div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="image">
            </div>
            <div>
                <h2 class="temperature">${data.main.temp} ºC</h2>
                <h4 class="sky">${data.weather[0].main}</h4>
            </div>`
}
form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
