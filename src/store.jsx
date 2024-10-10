// import { createStore } from 'redux';
import { legacy_createStore as createStore } from 'redux'


// Initial state
const initialState = {
  data: [], // This will hold the COVID data (total cases, recovered, deaths, etc.)
  selectedState: null, // This will hold the selected state for filtering
};

// Reducer function
function covidReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_SELECTED_STATE':
      return {
        ...state,
        selectedState: action.payload,
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(covidReducer);

export default store;
