import { useState } from 'react'
import background from './assets/background.jpg'

function App() {
  const [background, setCount] = useState(background)
  const [plays, setPlays] = useState(0)
  const [hearts, setHearts] = useState(0)
  const [title, setTitle] = useState(0)
  const [artist, setArtist] = useState(0)
  const [album, setAlbum] = useState(0)
  const [year, setYear] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)


  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App
 