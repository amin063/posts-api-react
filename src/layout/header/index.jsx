import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'


function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () => {
    setIsDarkMode(checkTheme => {
      const theme = !checkTheme;
      if (theme) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark');
      }
      return theme;
    })
  }

  return (
    <div className="header flex justify-between w-full my-5">
      <div className="logo text-3xl font-bold">PostAt</div>
      <div onClick={changeTheme} className="theme-icon relative rounded-full w-12 h-12 flex items-center justify-center bg-gray-200 cursor-pointer">
        <FontAwesomeIcon className={`absolute  ${isDarkMode ? `opacity-1` : `opacity-0`}`} icon={faSun} />
        <FontAwesomeIcon className={`absolute ${isDarkMode ? `opacity-0` : `opacity-1`}`} icon={faMoon} />
      </div>
    </div>
  )
}

export default Header
