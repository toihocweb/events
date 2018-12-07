import React, { Component } from 'react'
import {connect}  from 'react-redux';
import { Grid } from '../../../../node_modules/semantic-ui-react';
import { EventDetailedHeader } from './EventDetailedHeader';
import { EventDetailedInfo } from './EventDetailedInfo';
import { EventDetailedChat } from './EventDetailedChat';
import { EventDetailedSlidebar } from './EventDetailedSlidebar';


const mapState = (state , ownProps) => ({
  events : state.events.filter(evt => evt.id === ownProps.match.params.id)[0]
})


export class EventDetailedPage extends Component {

  render() {
    const {events} = this.props
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventDetailedHeader event={events} />
            <EventDetailedInfo />
            <EventDetailedChat />
          </Grid.Column>
          <Grid.Column width={6}>
            <EventDetailedSlidebar attendees={events.attendees} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(mapState)(EventDetailedPage)
