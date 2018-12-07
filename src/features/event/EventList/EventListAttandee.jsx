import React from 'react'
import { Image, List } from 'semantic-ui-react'

const EventListAttandee = (props) => {
    const {info} = props

    return (
            <List.Item>
                <Image as='a' size='mini' circular src={info.photoURL} />
            </List.Item>
    )
}

export default EventListAttandee
