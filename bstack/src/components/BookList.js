import React , { useContext } from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'
import { BookStackContext } from '../contexts/BookStackContext';
import StackDetails from './StackDetails';


/**
 * Display a segment or return a book grid
 *
 * @return {JSX} segment or book details.
 */
const BookList = () => {
    const { books } = useContext(BookStackContext);
    
    return books['stackList'].length ? (
        <div className="grid-container">
            {books['stackList'].map(book => {
                return ( <StackDetails book={books.objStack[book]} key={book} /> );
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
