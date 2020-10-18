import React, {useContext} from 'react';
import { BookStackContext } from '../contexts/BookStackContext';
// import { Card, Button, Icon } from 'semantic-ui-react'
// import { Header, Divider } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react';


const StackDetails = ({ book }) => {

    // dispatch action on delete and edit
    const { dispatch } = useContext(BookStackContext)

    const deleteStack = (e) => {
        e.preventDefault();
        dispatch({ type: 'REMOVE_BOOK', id: book.id });

    }

    return (
        <div className="card">
            <div>
                <p>{book.title}</p>
            </div>
            <div>
                <p>{book.author}</p>
            </div>
            <div className="btn-down">
                <Button icon basic color='red'  floated='left' onClick={deleteStack}>
                    <Icon name='trash alternate outline' />      
                </Button>
                <Button icon basic color='green' floated='right'>
                    <Icon name='pencil alternate' />    
                </Button>
            </div>
        </div>

    );
}

export default StackDetails;