import { combineReducers} from 'redux';
import users from './users';

export const reducers = combineReducers({
  users
});

export function reducerCall(state, action, reducerClass) {
  const [, method] = action.type.split('.');

  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if (name !== 'length' && name !== 'name' && name !== 'prototype') {
      return name;
    }
  });

  if (method.find(x => x == method)) {
    const new_state = cloneObject(state);

    return reducerClass[method](new_state, action);
  } else {
    return state;
  }

}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}