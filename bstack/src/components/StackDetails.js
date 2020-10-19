import React, { useContext } from 'react';
import { BookStackContext } from '../contexts/BookStackContext';
import { Button, Icon } from 'semantic-ui-react';
import { EditFormContext } from '../contexts/EditFormContext';


const StackDetails = ({ book }) => {
    // dispatch action on delete
    const { dispatch } = useContext(BookStackContext)
    const { displayEdit } = useContext(EditFormContext)

    const deleteStack = (e) => {
        e.preventDefault();
        dispatch({ type: 'REMOVE_BOOK', id: book.id });
    }

    return (
        <div className="card">
            <div>
                <h5>{book.title}</h5>
            </div>
            <div>
                <p>{book.author}</p>
            </div>
            <div className="btn-down">
                <Button icon basic color='red'  floated='left' onClick={deleteStack}>
                    <Icon name='trash alternate outline' />      
                </Button>
                <Button icon basic color='green' floated='right' onClick={() => displayEdit(book.id)}>
                    <Icon name='pencil alternate' />    
                </Button>
            </div>
        </div>
    );
}

export default StackDetails;