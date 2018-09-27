import React, { Component } from 'react';
import User from './User';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
state={
  user:{}
}

  getUser=() =>{
    const name=this.refs.name.value;
    fetch(`http://api.github.com/users/${name}`).then(response => response.json())
    //se hace un tdd a ver que se carga
    // .then(data => console.log(data))
    .then(data =>{
      this.setState({
        user:{
          name: data.name,
          location: data.location,
          followers: data.followers,
          following: data.following,
          login: data.login
        }
      })
    })
  }

  
  render() {
    const {user}=this.state;
    return (
      <div className="App">
        < h1 className="App">GITHUB api con REACT</h1>
        <input type="test" placeholder="nombre del usuario" ref="name"/>
        <button onClick={this.getUser}>Buscar usuario</button>
        <User user={user}/>
      </div>
    );
  }
}

export default App;
