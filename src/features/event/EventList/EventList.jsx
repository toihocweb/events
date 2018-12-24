import React from 'react'
import EventListItem from './EventListItem';

const EventList = (props) => {
    const {events,onDeleteEvent} = props
  return (
    <div>
      <h1>Event List</h1>
      {events && events.map(event => (
          <EventListItem key={event.id} event={event} onDeleteEvent = {onDeleteEvent}/>
      ))}
      
    </div>
  )
}

export default EventList
