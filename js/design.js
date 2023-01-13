class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.main = document.getElementById("w-main");
    this.icon = document.getElementById("w-icon");
    this.temp = document.getElementById("w-temp");
    this.temp_min = document.getElementById("w-temp_min");
    this.temp_max = document.getElementById("w-temp_max");
    this.pressure = document.getElementById("w-pressure");
    this.humidity = document.getElementById("w-humidity");
    this.wind_speed = document.getElementById("w-wind_speed");
    this.lon = document.getElementById("w-lon");
    this.lat = document.getElementById("w-lat");
  }

  paint(weather, location) {
    this.location.textContent = location;
    this.main.textContent = weather.weather[0].main;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.temp.textContent = weather.main.temp;
    this.temp_min.textContent = weather.main.temp_min;
    this.temp_max.textContent = weather.main.temp_max;
    this.pressure.textContent = weather.main.pressure;
    this.humidity.textContent = weather.main.humidity;
    this.wind_speed.textContent = weather.wind.speed;
    this.lon.textContent = weather.coord.lon;
    this.lat.textContent = weather.coord.lat;
  }
}
