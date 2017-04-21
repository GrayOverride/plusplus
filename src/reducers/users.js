export default function users(state = {}, action) {
  console.log('reducer user action', action)
  switch (action.type) {
    case 'USERS_LIST_SAVE':
      return action.users;

    default: 
      return state; 
  }
}