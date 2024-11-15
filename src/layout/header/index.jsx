import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'


function Header({ data, setData }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [option, setOption] = useState('')

  // console.log(data);

  const changeOption = (e) => {
    const selectValue = e.target.value;
    setOption(selectValue)

    console.log(option);

    if (selectValue === 'like') {
      data.sort((a, b) => b.reactions.likes - a.reactions.likes)
      setData([...data])
    } else if (selectValue === 'dislike') {
      data.sort((a, b) => b.reactions.dislikes - a.reactions.dislikes)
      setData([...data])
    } else if (selectValue === 'view') {
      data.sort((a, b) => b.views - a.views)
      setData([...data])
    }

  }

  const changeTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark');
    }

  }

  return (
    <div className="header flex justify-between w-full my-5">
      <div className="logo text-3xl font-bold">PostAt</div>
      <select value={option} onChange={changeOption}>
        <option value="dislike">Most DisLiked</option>
        <option value="like">Most Liked</option>
        <option value="view">Most Viewed</option>
      </select>
      <div onClick={changeTheme} className="theme-icon relative rounded-full w-12 h-12 flex items-center justify-center bg-gray-200 cursor-pointer">
        <FontAwesomeIcon className={`absolute  ${isDarkMode ? `opacity-1` : `opacity-0`}`} icon={faSun} />
        <FontAwesomeIcon className={`absolute ${isDarkMode ? `opacity-0` : `opacity-1`}`} icon={faMoon} />
      </div>
    </div>
  )
}

export default Header
