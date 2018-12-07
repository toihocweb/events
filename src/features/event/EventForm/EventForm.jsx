import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const emptyEvent = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
}



export class EventForm extends Component {

    state = {
        event : emptyEvent
    }

    componentDidMount() {
        if(this.props.selectedEvent !== null) {
            this.setState({
                event : this.props.selectedEvent,
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selectedEvent !== this.props.selectedEvent){
            this.setState({
                event : nextProps.selectedEvent || emptyEvent
            })
        }
    }

    onInputChange = (evt) => {
        const newEvent = this.state.event
        newEvent[evt.target.name] = evt.target.value
        this.setState({
            event : newEvent
        })
    }

    onFormSubmit = (evt) => {
        evt.preventDefault()
        if(this.state.event.id){
            this.props.updateEvent(this.state.event)
        }else{
            this.props.createEvent(this.state.event)
        }
    }

  render() {
      const {event} = this.state
        const {hanleCancel} = this.props
    return (
        <Segment>
        <Form onSubmit = {this.onFormSubmit}>
            <Form.Field>
                <label>Event Title</label>
                <input name='title' placeholder="First Name" value = {event.title} onChange={this.onInputChange}/>
            </Form.Field>
            <Form.Field>
                <label>Event Date</label>
                <input   name="date" type="date" placeholder="Event Date" value = {event.date} onChange={this.onInputChange} />
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <input name="city" placeholder="City event is taking place" value = {event.city} onChange={this.onInputChange}/>
            </Form.Field>
            <Form.Field>
                <label>Venue</label>
                <input name="venue" placeholder="Enter the Venue of the event"  value = {event.venue} onChange={this.onInputChange}/>
            </Form.Field>
            <Form.Field>
                <label>Hosted By</label>
                <input name="hostedBy" placeholder="Enter the name of person hosting"  value = {event.hostedBy} onChange={this.onInputChange}/>
            </Form.Field>
            <Button positive type="submit">
                Submit
                    </Button>
            <Button onClick = {hanleCancel} type="button">Cancel</Button>
        </Form>
    </Segment>
    )
  }
}

export default EventForm
