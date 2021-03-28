import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Input from "./Input/input";
import Validation from "./ValidationConpunent/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    useroutput: [
      { username: "Abu Nasib" },
      { username: "Roni" },
      { username: "Hasan" },
    ],
    userInput: { text: "aaaa" },
  };
  switchNameHandler = newName => {
    this.setState({
      useroutput: [
        { username: newName },
        { username: "Roni" },
        { username: "Hasan" },
      ],
    });
  };

  ChangeNameHandler = event => {
    this.setState({
      useroutput: [
        { username: "Abu Nasib" },
        { username: "Roni" },
        { username: event.target.value },
      ],
    });
  };
  changeInputHandler = event => {
    this.setState({
      userInput: { text: event.target.value },
    });
  };

  render() {
    const char = this.state.userInput.text.split("").map((ch, index) => {
      return <Char chars={ch} key={index} />;
    });
    return (
      <div className='App'>
        <UserOutput
          username={this.state.useroutput[0].username}
          clicked={() => this.switchNameHandler("Nasib Sarkar")}
        />
        <UserOutput username={this.state.useroutput[1].username} />
        <UserOutput username={this.state.useroutput[2].username} />
        <UserInput
          changed={this.ChangeNameHandler}
          name={this.state.useroutput[2].username}
        />

        <Input
          text={this.state.userInput.text}
          count={this.changeInputHandler}
        />
        <Validation count={this.state.userInput.text.length} />
        {char}
      </div>
    );
  }
}

export default App;
