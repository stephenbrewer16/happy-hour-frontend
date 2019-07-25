import React, { Component } from 'react'
import './App.css'
import MainContainer from './containers/MainContainer'
import Nav from './containers/Nav'

export default class App extends Component {
  state = {
    reviews: [],
    bars: []
  }
  render() {
    return (
      <div>
        < Nav/>
        < MainContainer/>
      </div>
    )
  }
}

