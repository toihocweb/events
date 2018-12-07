import React from 'react'
import { Segment, Item, Icon, List, Button, Divider } from "semantic-ui-react";
import EventListAttandee from './EventListAttandee';
import { Link } from 'react-router-dom'


const EventListItem = (props) => {
    const {event,onOpenEvent,onDeleteEvent} = props
    return (
        <div>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as="a">{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by <a>{event.hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {event.date} |
                  <Icon name="marker" /> {event.venue}
                </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees &&event.attendees.map( att => (
                            <EventListAttandee key={att.id} info={att}  />
                        ))}
                    </List>
                </Segment>
                <Segment clearing>
                <span>{event.description}</span>
                <Button as="a" color="orange" floated="right" content="Delete"   onClick = {onDeleteEvent(event.id)}/>
                    <Button as={Link} to={`event/${event.id}`} color="teal" floated="right" content="View"   />
                </Segment>
            </Segment.Group>
            <Divider />
        </div>
    )
}

export default EventListItem
