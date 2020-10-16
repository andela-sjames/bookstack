import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

const BookList = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='book' />
      You don't have any book to read at the moment.
    </Header>
  </Segment>
)

export default BookList