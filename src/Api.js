import React from 'react'

function FetchPopularRepos(language) {
  const encodedURI = encodedURI(`https://api.github.com/search/repositories?q=stars
    :>1+language:${language}&sort=stars&order=desc&type=Repositories`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    })
}

export default FetchPopularRepos