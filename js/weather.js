class Weather {
  constructor(city, state) {
    this.apiKey = "85d83c05491023b54591869459086bd6";
    this.city = this.capitalizeFirstLetter(city);
    this.state = this.capitalizeFirstLetter(state);
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw Error(response.status);
    }
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  selectLocation(city, state) {
    this.city = this.capitalizeFirstLetter(city);
    this.state = this.capitalizeFirstLetter(state);
  }

  get location() {
    return this.city + "," + this.state;
  }
}