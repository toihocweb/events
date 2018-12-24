import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '../../../../node_modules/semantic-ui-react';
import { EventDetailedHeader } from './EventDetailedHeader';
import { EventDetailedInfo } from './EventDetailedInfo';
import { EventDetailedChat } from './EventDetailedChat';
import { EventDetailedSlidebar } from './EventDetailedSlidebar';


const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0){
    event = state.events.filter(evt => evt.id === eventId)[0];
  }
  return {
    event : event
  }
}

class EventDetailedPage extends Component {
  render() {
    console.log(this.props)
    const {event} = this.props
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventDetailedHeader event={event} />
            <EventDetailedInfo event = {event}/>
            <EventDetailedChat />
          </Grid.Column>
          <Grid.Column width={6}>
            <EventDetailedSlidebar attendees={event.attendees} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(mapState)(EventDetailedPage)


