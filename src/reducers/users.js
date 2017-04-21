import { reducerCall } from './index';

export default function users(state = {}, action) {
  return reducerCall(state, action, reducerClass);
}

class reducerClass {

  //The user 
  static fetchListSuccess(new_state, action) {
    new_state.list = action.users;
    return new_state;
  }

}