class Weather {
  constructor(city,ca) {
    this.apiKey = '04d8a8332852869d7638af7c5c280aa7';
    this.city = city;
    this.ca = ca;
  }

  async weatherReport() {
    console.log(this.ca);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.ca}&appid=${this.apiKey}`)
    const responseData = await response.json();


    return responseData;
  }


  changeLocation(city,ca){
    this.city = city;
    this.ca = ca;
  }
}