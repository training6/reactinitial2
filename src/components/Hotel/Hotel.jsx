import React, {useState} from 'react';
import Subscription from '../Subscription/Subscription.jsx'

const Hotel = ({hotel}) => {
  const [buttonShow, setButtonShow] = useState(true);
  const [subShow, setSubShow] = useState(false);

  return (
    <div>
      <p>{hotel.name}</p>
      <button onClick={() => setButtonShow(!buttonShow)}>
        {
          buttonShow
          ? "Show more"
          : "Show less"
        }
      </button>

      {
        buttonShow 
        ? ''
        : <>
          <p>{hotel.city} ({hotel.stars})</p>
          <button onClick={() => setSubShow(!subShow)}>Request more info</button>
          {
            subShow
            ? <Subscription hotel = {hotel} setSubShow={setSubShow} />
            //kell a subscription fileba
            : ''
          }
          </>
      }
      
      
    </div>
  )
}

export default Hotel
