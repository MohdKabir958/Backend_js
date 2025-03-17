import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  })

  return (
    <>
      <h3>Chai and Full Stack </h3>
      <div>Jokes : {jokes.length}</div>

      {
        jokes.map((joke, index) => {
          return (
            <div key={joke.id} className='joke'>
              <h3>{index + 1}. {joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          )

        })
      }

    </>
  )
}

export default App
