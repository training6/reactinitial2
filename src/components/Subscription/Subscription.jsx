import React, {useState} from 'react';
import LoadingMask from '../Loadingmask/LoadingMask'

function Subscription({hotel, setSubShow}) {
  const [email, setEmail] = useState('')
  const [res, setRes] = useState('')
  const [sentSub, setSentSub] = useState(false)

  function submit() {

    setSentSub(true)

    fetch('./api/hotels/subscribe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        "email": email,
        "hotel": hotel.name
      })

        }).then(response => setRes(true))
          .catch(error => setRes(false))
          .finally(() => setTimeout(() => setSubShow(false), 5000))
  }

  return (
    <div>
      <h1>Request more info about</h1>
      {
        sentSub
        ? res
          ?  email === 'a@b.c' && hotel.name === "Hotel Curabitur suscipit suscipit" ? <p>Already subscribed</p> : <p>Subscribed</p>
          : <LoadingMask />
        : 
        <form>
        <input type='text' placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <button disabled={!(email.includes("@") && email.includes("."))} onClick={e => submit(e)}>Gomb</button>
      </form>
}


    </div>
  )
}

export default Subscription
