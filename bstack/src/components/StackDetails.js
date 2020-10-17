import React, {useContext} from 'react';
import { BookStackContext } from '../contexts/BookStackContext';
import { Card, Button, Icon } from 'semantic-ui-react'


const StackDetails = ({ book }) => {

    const { dispatch } = useContext(BookStackContext)
    return (
        <div>
            <Card>
                <Card.Content>
                    <Card.Header>{book.title}</Card.Header>
                    <Card.Meta>{book.author}</Card.Meta>
                </Card.Content>
            </Card>
            <div>
                <Button icon basic color='red' labelPosition='right' floated='left'>
                    <Icon name='trash alternate outline' />
                        Delete
                </Button>
                <Button icon basic color='green' labelPosition='right'>
                    <Icon name='pencil alternate' />
                        Edit
                </Button>
            </div>
        </div>
    );
}

export default StackDetails;