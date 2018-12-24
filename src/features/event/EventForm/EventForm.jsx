import React, { Component } from 'react'
import { Grid, Segment, Form, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createEvent, updateEvent } from '../eventActions'
import cuid from 'cuid'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../app/commom/form/TextInput';
import TextArea from '../../../app/commom/form/TextArea';
import SelectInput from '../../../app/commom/form/SelectInput';


const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id
    let event = {}
    if (eventId && state.events.length > 0) {
        event = state.events.filter(evt => evt.id === eventId)[0]
    }
    return {
        initialValues :  event
    }
}

const actions = {
    createEvent,
    updateEvent
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {



    onFormSubmit = values => {
        if (this.props.initialValues.id) {
            this.props.updateEvent(values)
            this.props.history.goBack ()
        } else {
            const newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL: '/assets/user.png',
                hostedBy : 'Bob'
            }
            this.props.createEvent(newEvent)
            this.props.history.goBack()
        }
    }

    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment>
                        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                            <Header content='Event Details' sub color='teal' />
                            <Field component={TextInput} type='text' placeholder = 'Give your event a name' name='title'/>
                            <Field component={SelectInput} type='text' placeholder = 'What is your event about' name='category' options={category}/>
                            <Field component={TextArea} type='text' rows={3} placeholder = 'Tell us about your event' name='description'/>
                            <Header content='Event Location Details' sub color='teal' />
                            <Field component={TextInput} type='text' placeholder = 'Event title' name='city'/>
                            <Field component={TextInput} type='text' placeholder = 'Event Venue' name='venue'/>
                            <Field component={TextInput} type='text' placeholder = 'Event Date' name='date'/>
                            <Button positive type="submit">
                                Submit
                    </Button>
                            <Button type="button" onClick={this.props.history.goBack} >Cancel</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapState, actions)(reduxForm({form : 'eventForm', enableReinitialize : true})(EventForm))
