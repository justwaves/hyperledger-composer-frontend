import React, { Component } from "react";

export default class MemberInput extends Component {
  state = {
    $class: "",
    balance: 0,
    email: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getMember = () => {
    fetch("http://13.124.6.135:3000/api/Member")
      .then(res => res.json())
      .then(json => console.log(json));
  };

  _onSubmit = e => {
    e.preventDefault();
    this.setState({
      $class: this.state.$class,
      balance: this.state.balance,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });

    const data = {
      $class: this.state.$class,
      balance: this.state.balance,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    fetch("http://13.124.6.135:3000/api/Member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <p>멤버 추가</p>
        <form onSubmit={this._onSubmit}>
          <input
            placeholder="$class"
            value={this.state.$class}
            onChange={this.handleChange}
            name="$class"
          />
          <input
            placeholder="balance"
            value={this.state.balance}
            onChange={this.handleChange}
            name="balance"
          />
          <input
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <input
            placeholder="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            name="firstName"
          />
          <input
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            name="lastName"
          />
          <div>
            {this.state.$class}
            {this.state.balance}
            {this.state.email}
            {this.state.firstName}
            {this.state.lastName}
          </div>
          <button title="멤버추가">멤버추가</button>
        </form>
        <button title="멤버조회" onClick={() => this.getMember()}>
          멤버조회
        </button>
      </div>
    );
  }
}
