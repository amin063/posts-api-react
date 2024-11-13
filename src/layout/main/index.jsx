import React from 'react'
import Post from '../../components/post'

function Main({ data, setData, pageIndex, setPageIndex }) {
  return (
    <div className="posts">

      {
        data.map(post => {
          if (pageIndex === 1) {
            return <Post post={post} data={data} setData={setData} key={post.id} />
          } else if (pageIndex === 2) {
            if (post.isLiked === true)
              return <Post post={post} data={data} setData={setData} key={post.id} />
            console.log("isledi");
          } else if (pageIndex === 3) {
            if (post.isDisLiked === true) {
              return <Post post={post} data={data} setData={setData} key={post.id} />
            }
          }
          else if (pageIndex === 4) {
            if (post.isSaved === true) {
              console.log(`${[...data]} datam`);
              return <Post post={post} data={data} setData={setData} key={post.id} />

            } else {
              <p>Saved List Is Empty</p>
              console.log("saved list bosdu qaqa save ele");
            }
          }
        })
      }


    </div>
  );
}

export default Main