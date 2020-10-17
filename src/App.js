import React, { Component } from 'react'

import Loading from './components/Loading'
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
    this.fetchRepos(this.state.activeLanguage)
    // console.log("did mount")
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeLanguage !== this.state.activeLanguage) {
      this.fetchRepos(this.state.activeLanguage)
    }
    // console.log("did update")
  }

  fetchRepos = (language) => {
    axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    .then(response => {
      this.setState({ 
        repos: response.data.items,
        loading: false,     
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleSelectLanguage = (lang) => {
    this.setState({
      activeLanguage: lang,
      loading: true
    })

    console.log(lang)
  }

  render() {
    const repos = (
      (!!this.state.loading )
        ? <Loading />
        : <Repos repos={this.state.repos} />
      )

    return (
      <div className="container">
        <Nav onSelectLanguage={this.handleSelectLanguage} />
        {repos}
      </div>
    )
  }
}

export default App
