import React from 'react'

function Nav(props) {
  const languages = ["all", "javascript", "ruby", "python"]

  return (
    <nav>
      <ul>
        {
          languages.map((lang) => (
            <li key={lang} onClick={() => props.onSelectLang(lang)}>
              {lang}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
