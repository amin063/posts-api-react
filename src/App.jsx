import { useEffect, useState } from 'react'
import './App.css'
import Header from './layout/header'
import Main from './layout/main'
import { postApi } from './service'
import Nav from './layout/nav'

function App() {
  const [data, setData] = useState([])
  const [pageIndex, setPageIndex] = useState(1)



  useEffect(() => {
    postApi.getPost()
      .then((posts) => {
        setData(posts);
      })
  }, [])


  return (
    <div className='container mx-auto w-8/12'>
      <Header data={data} setData={setData} />
      <Main data={data} setData={setData} pageIndex={pageIndex} setPageIndex={setPageIndex} />
      <Nav pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  )
}

export default App
