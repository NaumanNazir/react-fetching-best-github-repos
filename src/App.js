import React, { Component } from 'react'
import Loading from './Loading'
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
    this.fetchRepos = this.fetchRepos.bind(this)
  }

  componentDidMount() {
    this.fetchRepos(this.state.activeLanguage)
  }

  fetchRepos(lang) {
    this.setState({
      loading: true
    })

    window.API.fetchPopularRepos(lang)
      .then((repos) => {
        this.setState({
          loading: false,
          repos
        })
      }) 
  }

  handleSelectLanguage(lang) {
    this.setState({
      activeLanguage: lang
    })
  }

  render() {
    return (
      <div>
        <Nav onSelectLanguage={this.handleSelectLanguage}/>

        {
          (this.state.loading === true)
            ? <Loading />
            : <div> 
                {this.state.activeLanguage}
              </div>
        }
      </div>
    )
  }
}

export default App
