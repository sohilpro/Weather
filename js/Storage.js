class Storage {
  constructor() {
    this.city;
    this.state;
    this.defCity = "Fars";
    this.defState = "Shiraz";
  }

  getLocalStorage() {

    if (localStorage.getItem("city") === null) {
      this.city = this.defCity;
    } else {
      this.city = localStorage.getItem("city");
    }
    if (localStorage.getItem("state") === null) {
      this.state = this.defState;
    } else {
      this.state = localStorage.getItem("state");
    }

    return {
      city: this.city,
      state: this.state,
    };
  }

  setLocalStorage(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}