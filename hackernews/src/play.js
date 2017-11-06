import React, { Component } from 'react';

class ExplainDingindsComponent extends Component {
  constructor() {
    super();

    this.onClickMe = this.onClickMe.bind(this);
  }
  onClickMe() {
    console.log(this, 'bla');
  }

  render() {
    this.onClickMe();
    return (
      <button
        onClick={this.onClickMe}
        type="button"
      >
        Click Me
      </button>
    )
  }
}

function BolingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c',
    }

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahreinheitChange = this.handleFahreinheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahreinheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahreinheit = scale === 'c' ? tryConvert(temperature, toFahreinheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahreinheit}
          onTemperatureChange={this.handleFahreinheitChange}
        />
        <BolingVerdict celsius={celsius} />
      </div>
    )
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahreinheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

function toCelsius(fahreinheit) {
  return (fahreinheit - 32) * 5 / 9;
}

function toFahreinheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}

export default Calculator;