import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login'
import axios from 'axios';
import { useState } from 'react'


function Session() {
  
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/api.js";
    script.async = true;

    document.body.appendChild(script);
// 8888888888
  const responseGoogle = response => {
    console.log(response)
    const { code } = response
    axios.post('/api/create-tokens', { code })
      .then(response => {
        console.log(response.data)
        setSignedIn(true)
      })
      .catch(error => console.log(error.message))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(summary, description, location, startDateTime, endDatetime)
    axios.post('/api/create-event', {
      summary,
      description,
      location,
      startDateTime,
      endDatetime,
    })
    .then(response => {
      console.log(response.data)
      setSignedIn(true)
    })
    .catch(error => console.log(error.message))

  };
  

  const responseError = error => {
    console.log(error)
  };

  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDatetime, setEndDateTime] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  return (
      <div>
        <div className="App">
          <h1 style={{color:'#18183D'}}>Add Sessions and Events</h1>
          </div>

              {
                !signedIn ? (
                  <div>
                  <GoogleLogin 
                      clientId="946455380445-mpf6nqe665i7inf6pgupo5k7mmoghp3h.apps.googleusercontent.com"
                      buttonText="Add sessions and events"
                      onSuccess={responseGoogle}
                      onFailure={responseError}
                      cookiePolicy={'single_host_origin'}
    
                      responseType="code"
                      accessType="offline"
                      scope="openid email profile https://www.googleapis.com/auth/calendar"
                      />
          </div>
                ) : (

      <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='summary'>summary</label>
        <br />
        <input type='text' id='summary' value={summary} onChange={e => setSummary(e.target.value) } />
      <br />

      <label htmlFor='description'>Description</label>
        <br />
        <textarea id='description' value={description} onChange={e => setDescription (e.target.value)} />
      <br />

      <label htmlFor='location'>location</label>
        <br />
        <input type='text' id='locaion' value={location} onChange={e => setLocation (e.target.value)} />
      <br />

      <label htmlFor='startDateTime'>Starting at</label>
        <br />
        <input type='text' id='startdate' value={startDateTime} onChange={e => setStartDateTime} />
      <br />

      <label htmlFor='endDateTime'>End date</label>
        <br />
        <input type='datetime-local' id='enddate' value={endDatetime} onChange={e => setEndDateTime} />
      <br />
      <button type='submit'>Create event</button>
      </form>
    </div>


)
}
</div>
)

}

export default Session