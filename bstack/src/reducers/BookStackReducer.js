import uuid from 'uuid/v4';

export const BookStackReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
    const stack = { 
        id: uuid(),
        title: action.book.title, 
        author: action.book.author, 
    }

    return Object.assign({}, state, {
            stackList: [...state.stackList, stack.id],
            objStack: {
                ...state.objStack, [stack.id]: stack
            },
        }
    )

    case 'REMOVE_BOOK':
        const newObjStack = {...state.objStack}
        delete newObjStack[action.id]

        return Object.assign({}, state, {
                stackList: state.stackList.filter(id => id !== action.id),
                objStack: {
                    ...newObjStack
                },
            }
        )

    case 'EDIT_BOOK':
        const updateStack = {
            id: action.book.id,
            title: action.book.title, 
            author: action.book.author, 
        }

        return Object.assign({}, state, {
            objStack: {
                ...state.objStack, [updateStack.id]: updateStack
            },
        }
    )

    default:
      return state;
  }
}
