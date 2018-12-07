import React, { Component } from 'react'
import { Grid } from '../../../../node_modules/semantic-ui-react';
import { EventDetailedHeader } from './EventDetailedHeader';
import { EventDetailedInfo } from './EventDetailedInfo';
import { EventDetailedChat } from './EventDetailedChat';
import { EventDetailedSlidebar } from './EventDetailedSlidebar';
import { connect } from 'react-redux'


const event = {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
        {
            id: 'a',
            name: 'Bob',
            photoURL: 'https://randomuser.me/api/portraits/men/40.jpg',
        },
        {
            id: 'b',
            name: 'Tom',
            photoURL: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
    ]
}


export class EventDetailed extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventDetailedHeader event={event} />
                        <EventDetailedInfo />
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

export default connect()(EventDetailed)
