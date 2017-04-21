export default function users(state = {}, action) {
  console.log('reducer user action', action)
  switch (action.type) {
    case 'USERS_LIST_SAVE':
      return action.users;

    case 'USERS_USER_SAVE':
      const { user } = action
      return state
        .filter((u) => u._id !== user._id)
        .concat(user)

    default: 
      return state; 
  }
}