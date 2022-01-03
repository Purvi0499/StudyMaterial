import React from "react";
import "./HandlingEvents.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }
  render() {
    return (
      <>
        <div
          className={`tubeLightOff ${
            this.state.isToggleOn ? `onLight` : `offLight`
          }`}
        ></div>
        <button
          className={`onOffBtn ${this.state.isToggleOn ? `onBtn ` : `offBtn`}`}
          onClick={this.toggleBtn}
        >
          {this.state.isToggleOn ? `ON` : `OFF`}
        </button>
      </>
    );
  }
}
export { Toggle };
