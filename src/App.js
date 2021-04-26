import { useState, useEffect } from 'react'
import LoadingMask from './components/Loadingmask/LoadingMask';
import Hotel from './components/Hotel/Hotel';

import './App.css'

const App = () => {

  const [data, setData] = useState([]);
  const [isMask, setIsMask] = useState (true);

  useEffect(() => {
    setIsMask(true)

//2.lépés fetch megadott címmre - api/hotels!!! volt ilyen is: `.../${data} szia`
    fetch('./api/hotels')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => setData(null))
    .finally(() => setIsMask(false))
  }, [])

  console.log(data)

  return (
    <div className="App">
      <h1>Hotels</h1>
      {
        isMask 
        ? <LoadingMask />
        : data.map(hotel => <Hotel key={hotel.name} hotel = {hotel} />)
        //key={uuidv4()}
      }
    </div>
  )
}

export default App
