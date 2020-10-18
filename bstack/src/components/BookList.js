import React , { useContext } from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'
import { BookStackContext } from '../contexts/BookStackContext';
import StackDetails from './StackDetails';


const BookList = () => {
    const { books } = useContext(BookStackContext);
    return books.length ? (
        <div className="grid-container">
            {books.map(book => {
                return ( <StackDetails book={book} key={book.id} /> );
            })}
        </div>
    ): (
    <Segment placeholder>
        <Header icon>
        <Icon name='book' />
        You don't have any book to read at the moment.
        </Header>
    </Segment>
    );
}

export default BookList
