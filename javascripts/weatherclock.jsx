import React from 'react';

class WeatherClock extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Clock/>
        <Weather/>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
  }

  componentDidMount(){
    setInterval(() => this.setState({time: new Date()}) , 1000);
  }

  render() {
    let month = this.state.time.getMonth();
    let day = this.state.time.getDay();
    let year = this.state.time.getYear() + 1900;
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    return(
      <div>
        <h1>Clock</h1>
        <article className="Make-America-Great-Again">
          <p className = "clocks">
            <span>Date: </span>
            <span>{month}/{day}/{year}</span>
          </p>
          <p className = "clocks">
            <span>Time: </span>
            <span>{hours}:{minutes}:{seconds}</span>
          </p>
        </article >
      </div>
    );
  }
}

// api key: bcb83c4b54aee8418983c2aff3073b3b

// url: 'api.openweathermap.org/data/2.5/weather',

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: [], weather: {}};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getWeather(position.coords.latitute, position.coords.longitude);
    });
  }

  getWeather(lat, lon) {
    let self = this;
    $.ajax({
      url: `http://www.api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=bcb83c4b54aee8418983c2aff3073b3b`,
      method: 'GET',
      success(response) {
        let temp = response.main.temp;
        let weather = response.main.main;
        self.setState({weather: {temp, weather}});
      }
    });
  }

  render() {
    console.log(this.weather);
    return (
      // stuff
      <div>WEATHER GOES HERE</div>
    );
  }
}

export default WeatherClock;
