import { reducerCall } from './index';

export default function users(state = {}, action) {
  return reducerCall(state, action, reducerClass);
}

class reducerClass {
  //The user 
  static fetchListSuccess(new_state, action) {
    console.log('FetchListSuccess Action', action)
    new_state.users = action.users;
    console.log('FetchListSuccess new_state ', new_state);
    return new_state;
  }

}