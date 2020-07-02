import React, { Component } from 'react'
import Nav from './Nav'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: [],
      activeLanguage: "all",
      loading: true
    }

    this.handleSelectLanguage = this.handleSelectLanguage.bind(this)
  }

  handleSelectLanguage(lang) {
    this.setState({
      activeLanguage: lang
    })
  }

  render() {
    return (
      <div>
        <Nav onSelectLang={this.handleSelectLanguage}/>
        <h2> Language: {this.state.activeLanguage} </h2>
      </div>
    )
  }
}

export default App
