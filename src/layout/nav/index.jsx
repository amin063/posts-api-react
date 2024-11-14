import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function Nav({ pageIndex, setPageIndex }) {
    const selectNavItem = (index)=>{
        return pageIndex === index ? 'text-blue-500' : 'text-gray-500';
    }
    return (
        <div className="nav fixed bottom-5 left-1/2 transform -translate-x-1/2 space-x-20 flex bg-gray-200 p-3 rounded-full">
            <div className="home">
                <FontAwesomeIcon onClick={() => setPageIndex(1)
                } className={`cursor-pointer ${selectNavItem(1)}`} icon={faHouse} />
            </div>

            <div className="liked">
                <FontAwesomeIcon onClick={() => setPageIndex(2)
                } className={`cursor-pointer ${selectNavItem(2)}`} icon={faThumbsUp} />
            </div>

            <div className="disliked">
                <FontAwesomeIcon onClick={() => setPageIndex(3)
                } className={`cursor-pointer ${selectNavItem(3)}`} icon={faThumbsDown} />
            </div>

            <div className="saved">

                <FontAwesomeIcon onClick={() => setPageIndex(4)
                } className={`cursor-pointer ${selectNavItem(4)}`} icon={faBookmark} />
            </div>
        </div>
    )
}

export default Nav