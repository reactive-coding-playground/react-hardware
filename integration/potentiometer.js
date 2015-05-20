/*eslint no-console:0*/
import React from '../';

const {
  Board,
  Potentiometer,
  Led,
  mode,
} = React;

const HIGH = 255;
const LOW = 0;

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: LOW};
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    var POT_LOW = 15;
    var POT_HIGH = 1000;
    var value = (event.target.value - POT_LOW) / POT_HIGH * HIGH;
    if (value < 10) value = 0;
    console.log('new value', value, event.target.value);

    this.setState({value});
  }

  render(): ?ReactElement {
    return (
      <Board>
        <Potentiometer
          pin={14}
          onChange={this.onChange}
          />
        <Led pin={11} mode={mode.PWM} value={this.state.value} />
      </Board>
    );
  }
}

var PORT = '/dev/tty.usbmodem1411';
React.render(<Application value={HIGH} />, PORT);


