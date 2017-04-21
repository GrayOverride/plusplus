import { combineReducers} from 'redux';
import users from './users';

export const reducers = combineReducers({
  users
});

export function reducerCall(state, action, reducerClass) {
  const [, method] = action.type.split('.');

  console.log('reducerCall state ', state)
  console.log('reducerCall action ',  action)

  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if (name !== 'length' && name !== 'name' && name !== 'prototype') {
      return name;
    }
  });

  if (methods.find(x => x == method)) {
    const new_state = cloneObject(state);
      console.log('Reducer call FOUND matching method ', new_state)
    
    return reducerClass[method](new_state, action);
  } else {
      console.log('Reducer call DID NOT FOUND ', state)
    return state;
  }

}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}