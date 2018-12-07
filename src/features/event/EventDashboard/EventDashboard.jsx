
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid,Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid'
import { createEvent , updateEvent , deleteEvent } from '../eventActions';

const mapState = (state) => ({
    events : state.events
})


const action = {
    createEvent,
    updateEvent,
    deleteEvent
}

export class EventDashboard extends Component {
    state = {
        isFormOpen : false,
        selectedEvent : null,
    }

  
    handleFormOpen = () => {
        this.setState({
            selectedEvent : null,
            isFormOpen : true
        })    
    }

    handleOpenEvent  = (onOpenEvent) => () => {
        this.setState({
            selectedEvent : onOpenEvent,
            isFormOpen : true
        })
    }

    handleUpdateEvent = (onUpdateEvent) => {
        this.props.updateEvent(onUpdateEvent)
        this.setState({
            isFormOpen : false,
            selectedEvent : null,
        })
    }

    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = 'https://randomuser.me/portraits/women/36.jpg';
        this.props.createEvent(newEvent);
        this.setState({
            isFormOpen : false,
        })

    }
    hanleCancel = () => {
        this.setState({
            isFormOpen : false
        })
    }

    handleDeleteEvent = (eventId) => () => {
       this.props.deleteEvent(eventId)
    }



  render() {
    const {events} = this.props
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <EventList events = {events} onOpenEvent = {this.handleOpenEvent} onDeleteEvent = {this.handleDeleteEvent}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content="Create Event" onClick = {this.handleFormOpen}  />
                     { this.state.isFormOpen && <EventForm hanleCancel = {this.hanleCancel}  updateEvent = {this.handleUpdateEvent} createEvent = {this.handleCreateEvent} selectedEvent = {this.state.selectedEvent}  /> }   
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
  }
}

export default connect(mapState,action)(EventDashboard)
