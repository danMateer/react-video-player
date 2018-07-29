import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
  super(props);

  this.handleClick = this.handleClick.bind(this);
}

  handleClick(e) {
    let text = e.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="low" /> low
        <input type="radio" name="src" value="med" /> med
        <input type="radio" name="src" value="high" /> high
        <input type="radio" name="src" value="hi_def" /> hi_def
      </form>
    );
  }
}
