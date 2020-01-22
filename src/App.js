import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios('https://api.github.com/repos/koyo-miyamura/vue_api_spa/pulls',{
        params: {
          state: 'closed'
        }
      })
      setData(results.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Hello React!!</h1>
      <ul>
        {data.map((pr) => (
          <li key={pr.id}>{pr.title}<a href={pr.html_url}>{pr.html_url}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default App;
