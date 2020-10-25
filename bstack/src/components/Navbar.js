import React from 'react';
import { Header } from 'semantic-ui-react'


/**
 * Construct a Navbar component.
 *
 * @return {JSX} Navar.
 */
const Navbar = () => {
    return ( 
    <div className="navbar">
        <Header as='h1' textAlign="center">
            Bookstack checklist
        </Header>
    </div>
     );
}
 
export default Navbar;

