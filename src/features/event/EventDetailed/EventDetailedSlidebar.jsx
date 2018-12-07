import React, { Component } from 'react'
import { Segment, List, Item, Label } from 'semantic-ui-react'
import './EventDetailedSlidebar.css'

export class EventDetailedSlidebar extends Component {
  render() {

    const { attendees } = this.props
    return (
      <div>
        <Segment
          textAlign="center"
          style={{ border: 'none' }}
          attached="top"
          secondary
          inverted
          color="teal"
        >
          {attendees && attendees.length > 1 ? `${attendees.length} People` : `1 Person`}  Going
            </Segment>
        <Segment attached>
          <List relaxed divided>
            {attendees && attendees.map(att => (
              <Item key={att.id} style={{ position: 'relative' }}>
                {att.isHost && (
                  <Label
                    style={{ position: 'absolute' }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
              </Label>
                )}
                <Item.Image src={att.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <a>{att.name}</a>
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
          </List>
        </Segment>
      </div>
    )
  }
}

export default EventDetailedSlidebar