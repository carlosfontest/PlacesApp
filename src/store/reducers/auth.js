import { ADD_USER, REMOVE_USER } from '../actions/actionTypes'

const initialState = {
  userName: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userName: action.name
      };

    case REMOVE_USER:
    return {
      ...state,
      userName: ''
    };

    default:
      return state;
  }
};

export default reducer;