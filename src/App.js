import React, { Component } from 'react'

// import Loading from './Loading'
import Nav from './components/Nav/Nav'
import axios from 'axios'
import Repos from './components/Repos/Repos'

class App extends Component {
  state = {
    repos: [],
    activeLanguage: "all",
    loading: true
  }

  componentDidMount() {
    axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${this.activeLanguage}&sort=stars&order=desc&type=Repositories`)
    .then(response => {
      this.setState({ 
        repos: response.data.items,     
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleSelectLanguage = (lang) => {
    this.setState({
      activeLanguage: lang
    })

    console.log(lang)
  }

  render() {
    return (
      <div className="container">
        <Nav onSelectLanguage={this.handleSelectLanguage} />
        <Repos 
          activeLanguage={this.activeLanguage} 
          repos={this.state.repos}
        />

        {/* {
          (this.state.loading === true)
            ? <Loading />
            : <div>
              {this.state.activeLanguage}
            </div>
        } */}
      </div>
    )
  }
}

export default App
