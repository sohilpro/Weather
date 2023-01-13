const storage = new Storage()
const weatherStorage = storage.getLocalStorage()
const weather = new Weather(weatherStorage.city,weatherStorage.state);
const ui = new UI();
document.addEventListener("DOMContentLoaded", getWeather);
document.getElementById('w-change-btn').addEventListener('click',changeLoc);

function changeLoc() {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.selectLocation(city,state)
    storage.setLocalStorage(city,state)
    getWeather();
    $('#locationModal').modal('hide')
}
function getWeather() {
  weather
    .getWeather()
    .then((res) => {
      console.log(res);
      ui.paint(res,weather.location)
    })
    .catch((err) => console.log(err.message));
}
