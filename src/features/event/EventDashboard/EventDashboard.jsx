
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList';
import { createEvent } from '../eventActions';

const mapState = (state) => ({
    events : state.events
})


const action = {
    createEvent
}

export class EventDashboard extends Component {

    handleDeleteEvent = (eventId) => () => {
       this.props.deleteEvent(eventId)
    }



  render() {
    const {events} = this.props
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <EventList events = {events}  onDeleteEvent = {this.handleDeleteEvent}/>
                </Grid.Column>
                <Grid.Column width={6}>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
  }
}

export default connect(mapState,action)(EventDashboard)
