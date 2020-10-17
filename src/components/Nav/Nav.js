import React from 'react'

import classes from './Nav.module.css'

function Nav(props) {
  const languages = ["All", "Javascript", "Ruby", "Python"]

  return (
    <nav className={classes.Navbar}>
      <ul>
        {
          languages.map((lang) => (
            <li
              className={classes.NavbarItem} 
              key={lang} 
              onClick={() => props.onSelectLanguage(lang)}
            >
              {lang}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
