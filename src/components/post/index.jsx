import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function Post({ post, data, setData }) {

    const saveClick = () => {
        post.isSaved = !post.isSaved;

        console.log(post);

        setData([...data])
    }

    const clickLike = () => {
        post.isLiked = !post.isLiked;
        post.isLiked ? ++post.reactions.likes : --post.reactions.likes;
        post.isDisLiked ? --post.reactions.dislikes : post.isDisLiked = false;
        post.isDisLiked = false;
        setData([...data])
    }

    const disLikedClick = () => {
        post.isDisLiked = !post.isDisLiked;
        post.isDisLiked ? ++post.reactions.dislikes : --post.reactions.dislikes;
        post.isLiked ? --post.reactions.likes : post.isLiked = false;
        post.isLiked = false
        setData([...data])
    }

    return (
        <div className='post flex flex-col space-y-3'>
            <h4 className='font-bold text-lg'>{post.title}</h4>
            <p>{post.body}</p>
            <div className="tags flex space-x-5 text-green-900">
                {
                    post.tags.map((tag, index) => {
                        return <span key={index} className='rounded-full border px-4 py-2 border-green-600'>{tag}</span>
                    })
                }

            </div>
            <div className="stats flex space-x-10">
                <div className="like-stats flex items-center space-x-3">
                    <p>{post.reactions.likes}</p>
                    {post.isLiked ?
                        <FontAwesomeIcon className='cursor-pointer text-blue-700' onClick={() => clickLike()} icon={faThumbsUp} />
                        :
                        <FontAwesomeIcon className='cursor-pointer text-gray-400' onClick={() => clickLike()} icon={faThumbsUp} />
                    }

                </div>

                <div className="dislike-stats flex items-center space-x-3">
                    <p>{post.reactions.dislikes}</p>
                    {post.isDisLiked ?
                        <FontAwesomeIcon className='cursor-pointer text-red-700' onClick={() => disLikedClick()} icon={faThumbsDown} />
                        :
                        <FontAwesomeIcon className='cursor-pointer text-gray-400' onClick={() => disLikedClick()} icon={faThumbsDown} />

                    }
                </div>

                <div className="view-stats flex items-center space-x-3">
                    <p>{post.views}</p>
                    <FontAwesomeIcon icon={faEye} />
                </div>

                <div className="save-post">
                    {post.isSaved ?
                        <FontAwesomeIcon className='cursor-pointer text-green-700' onClick={() => saveClick()} icon={faBookmark} />
                        :
                        <FontAwesomeIcon className='cursor-pointer text-gray-400' onClick={() => saveClick()} icon={faBookmark} />
                    }
                </div>
            </div>
            <hr className='border-black' />
        </div>
    )
}

export default Post