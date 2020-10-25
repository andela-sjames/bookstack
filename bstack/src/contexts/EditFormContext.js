import React, { Component, createContext } from 'react';

export const EditFormContext = createContext();


/**
 * Represents the Edit form Context provider Component.
 *
 * @class EditFormContextProvider
 * @extends {React.Component}
 */
class EditFormContextProvider extends Component {
  state = {
    isEdit: false,
    show: 'block',
    hide: 'none',
    id: '',
  }

  /**
   * Method used to update state when the edit form
   * is displayed.
   *
   * @param {id} id of the book to edit
   * @memberof EditFormContextProvider
   */
  displayEdit = (id) => {
    this.setState({ 
        isEdit: !this.state.isEdit,
        id: id,
     });
  }


  /**
   * Renders EditFormContextProvider component
   *
   * @returns {JSX} jsx
   * @memberof EditFormContextProvider
   */
  render() {
    return (
      <EditFormContext.Provider value={{...this.state, displayEdit: this.displayEdit}}>
        {this.props.children}
      </EditFormContext.Provider>
    );
  }
}

export default EditFormContextProvider;
