import React from 'react'

import classes from './Repos.module.css'

function Repos(props) {
  const repos = props.repos
  console.log(repos)
  return (
    <div>
      <ul className={classes.ReposContainer}>
        {
          repos.map(repo => {
          return (
            <li key={repo.id} className={classes.RepoTile}> 
              <p> Name: {repo.name} </p>
              <p> Langauge: {repo.language} </p>
              <p> URL: <a href={repo.clone_url}> Link </a> </p> 
              <p> Stars: {repo.stargazers_count} </p>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Repos
