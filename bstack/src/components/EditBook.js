import React, { useState, useContext } from 'react';
import { Button, Icon, Form } from 'semantic-ui-react'
import { BookStackContext } from '../contexts/BookStackContext';
import { EditFormContext } from '../contexts/EditFormContext';


const EditBook = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const { dispatch } = useContext(BookStackContext)
    const { isEdit, show, hide, id } = useContext(EditFormContext)

    const display = isEdit ? show : hide;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'EDIT_BOOK', book: { title, author, id }});
        setTitle('');
        setAuthor('');
    }

    return ( 
        <div className="add-form" style={{ display: display }}>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Book Title' value={title}
                      onChange={(e) => setTitle(e.target.value)} required />
                </Form.Field>
                <Form.Field>
                    <label>Author</label>
                    <input placeholder='Book Author' value={author}
                      onChange={(e) => setAuthor(e.target.value)} required/>
                </Form.Field>
                <Button icon labelPosition='right' type='submit' basic color='orange'>
                    Edit book
                    <Icon name='plus circle' />
                </Button>
            </Form>
        </div>
    );
}

export default EditBook;
