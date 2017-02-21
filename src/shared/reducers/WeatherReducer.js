//import Immutable from 'immutable';
import DefaultForecast from '../../forecast';

export default function weatherReducer(state = DefaultForecast, action) {
  switch(action.type) {
    case 'GET_WEATHER':
      return state; // .concat(action.text);
    // case 'EDIT_TODO':
    //   return state.set(action.id, action.text);
    // case 'DELETE_TODO':
    //   return state.delete(action.id);
    default:
      return state;
  }
}
