import React from 'react';
import Tabs from './tabs';
import WeatherClock from './weatherclock';

class Widget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Tabs</h1>
        <Tabs/>
        <br/>
        <WeatherClock/>
      </div>
    );
  }
}

export default Widget;
