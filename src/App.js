import React, { Component } from 'react';




class App extends Component {

  state = {
    email: "",
    password: ""
  }

  handleInput = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} name="email" />
          <input onChange={this.handleInput} name="password" />
          <button>Submit</button>
        </form>
        {`My email is: ${this.state.email} and my password is: ${this.state.password}`}
      </div>
    );
  }
}

export default App;
