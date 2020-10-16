import React from 'react';
import { Button, Icon, Form } from 'semantic-ui-react'


const AddBook = () => {
    return ( 
        <div className="add-form">
            <Form>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Book Title' />
                </Form.Field>
                <Form.Field>
                    <label>Author</label>
                    <input placeholder='Book Author' />
                </Form.Field>
                <Button icon labelPosition='right' type='submit' basic color='blue'>
                    Add book
                    <Icon name='plus circle' />
                </Button>
            </Form>
        </div>
    );
}
 
export default AddBook;