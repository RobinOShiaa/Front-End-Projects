class Storage {
  constructor() {
    this.city;
    this.country;
  }

  locationRetrieve(){
    if(localStorage.getItem('city') === null) {
      this.city = 'Dublin'
    } else {
      this.city = localStorage.getItem('city');
      console.log(this.city);
    }

    if(localStorage.getItem('country') === null) {
      this.country = 'IE';
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country
    }
  }


  setLocation(city,country) {
    localStorage.setItem('city',city);
    localStorage.setItem('country',country);
  }
}