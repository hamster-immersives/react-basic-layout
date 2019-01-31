import React, { Component } from 'react';


class Form extends Component {

  state = {
    email: '',
    password: ''
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} name="email" />
        <input onChange={this.handleInput} name="password" />
        <button>Submit</button>
      </form>
    )
  }
}



class App extends Component {

  state = {
    email: "",
    password: ""
  }


  handleSubmit = (data) => {
    console.log(data)
    this.setState({
      email: data.email,
      password: data.password
    })
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit}/>
        {`My email is: ${this.state.email} and my password is: ${this.state.password}`}
      </div>
    );
  }
}

export default App;
