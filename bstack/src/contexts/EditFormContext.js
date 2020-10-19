import React, { Component, createContext } from 'react';

export const EditFormContext = createContext();

class EditFormContextProvider extends Component {
  state = {
    isEdit: false,
    show: 'block',
    hide: 'none',
    id: '',
  }

  displayEdit = (id) => {
    this.setState({ 
        isEdit: !this.state.isEdit,
        id: id,
     });
  }


  // useEffect should do something
  render() {
    return (
      <EditFormContext.Provider value={{...this.state, displayEdit: this.displayEdit}}>
        {this.props.children}
      </EditFormContext.Provider>
    );
  }
}

export default EditFormContextProvider;
