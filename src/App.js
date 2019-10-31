import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, [])

  async function getEvents() {
    const response = await fetch('https://api.github.com/events');
    const events = await response.json();
    setEvents(events);
  }

  return (
    <div className="App">
      <h1>Karl Coelho</h1>
      <p>I'm a software engineer and student.</p>

      <div className="links">
        <a href="https://github.com/karlcoelho">Github</a> | &nbsp;
        <a href="https://linkedin.com/in/karlcoelho">LinkedIn</a> | &nbsp;
        <a href="mailto:karl@gmail.com">Email</a>
      </div>

      <div className="events">
        {events.map(event => <Event {...event}/> )}
      </div>
    </div>
  );
}

const Event = ({id, type}) => (
  <div className="event">
    <h1>{type}</h1>
    <p>ID: {id}</p>
  </div>
)

export default App;
