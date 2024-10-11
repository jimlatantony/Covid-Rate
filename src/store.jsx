
import { legacy_createStore as createStore } from 'redux'



const initialState = {
  data: [], 
  selectedState: null, 
};


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


const store = createStore(covidReducer);

export default store;
