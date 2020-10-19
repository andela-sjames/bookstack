import React, { Component, createContext } from 'react';

export const EditFormContext = createContext();

class EditFormContextProvider extends Component {
  state = {
    isEdit: false,
    show: 'block',
    hide: 'none',
  }
  displayEdit= () => {
    this.setState({ isEdit: !this.state.isEdit });
  }
  render() { 
    return (
      <EditFormContext.Provider value={{...this.state, displayEdit: this.displayEdit}}>
        {this.props.children}
      </EditFormContext.Provider>
    );
  }
}

export default EditFormContextProvider;
