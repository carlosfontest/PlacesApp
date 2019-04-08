import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE } from '../actions/actionTypes'

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, { 
          name: action.placeName, 
          key: Math.random().toString(), 
          image: { uri: 'https://www.adorama.com/alc/wp-content/uploads/2018/08/san-juans-feature-825x465.jpg'} 
        }]
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => (place.key === action.placeKey))
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;
  }
};

export default reducer;