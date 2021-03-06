import React, { useState, useContext } from 'react';
import { Button, Icon, Form } from 'semantic-ui-react'
import { BookStackContext } from '../contexts/BookStackContext';
import { EditFormContext } from '../contexts/EditFormContext';


/**
 * Construct a Form component for editing an existing.
 *
 * @return {JSX} Form Component for editing a book.
 */
const EditBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const { dispatch, books } = useContext(BookStackContext)
    const { isEdit, show, hide, id, displayEdit } = useContext(EditFormContext)

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
                <Button icon labelPosition='right' floated='left' type='submit' basic color='orange'>
                    Edit book
                    <Icon name='plus circle' />
                </Button>
            </Form>
            <Button icon labelPosition='right' floated='right' basic color='olive' onClick={() => displayEdit(id)}>
                Cancel
                <Icon name='cancel' />
            </Button>
        </div>
    );
}

export default EditBook;
