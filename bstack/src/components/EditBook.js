import React, { useState, useContext } from 'react';
import { Button, Icon, Form } from 'semantic-ui-react'
import { BookStackContext } from '../contexts/BookStackContext';
import { EditFormContext } from '../contexts/EditFormContext';


const EditBook = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const { dispatch, books } = useContext(BookStackContext)
    const { isEdit, show, hide, id } = useContext(EditFormContext)

    const display = isEdit ? show : hide;

    var book = '';
    if (id) {
        book  = books.objStack[id]
    }

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
                    <input placeholder={book === undefined ? 'Nothing to Edit' : book.title }
                      name="title" value={title} required
                      onChange={(e) => setTitle(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Author</label>
                    <input placeholder={book === undefined ? 'Nothing to Edit' : book.author }
                      name="author" value={author} required
                      onChange={(e) => setAuthor(e.target.value)} />
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
