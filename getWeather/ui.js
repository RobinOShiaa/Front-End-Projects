class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.description = document.getElementById('description');
    this.temp = document.getElementById('string');
    

    this.details = document.getElementById('details');
    this.tempMax = document.getElementById('dewpoint');
    this.tempMin = document.getElementById('wind');
    this.feelsLike = document.getElementById('feels-like');
    this.icon = document.getElementById('icon');
    this.humidity = document.getElementById('humidity');
    
  }



  templatInsert(weather) {
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    const country = regionNames.of(weather.sys.country);
    this.location.textContent = 'Location: ' + country + '/' + weather.name;
    this.description.textContent = 'Summary: '+ weather.weather[0].main + '/' + weather.weather[0].description;
    this.temp.textContent = 'Temperture: ' + this.kelvinConverter(weather.main.temp) + '°C';
    this.tempMax.textContent = 'Max Temperture: ' + this.kelvinConverter(weather.main.temp_max) + '°C';
    this.tempMin.textContent = 'Feels like: ' +  this.kelvinConverter(weather.main.temp_min) + '°C';
    this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = 'Humidity: ' +  weather.main.humidity + '%';
    this.feelsLike .textContent = 'Min Temperture: ' + this.kelvinConverter(weather.main.temp_min) + '°C';

  }




  kelvinConverter(kel) {
    return Math.round(kel - 273.15);
  }
}