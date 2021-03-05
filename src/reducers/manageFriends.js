export function manageFriends(state, action) {
  let newState;
  switch (action.type) {
    case "ADD_FRIEND":
      newState = { friends: [...state.friends, action.friend] };
      return newState;
    case "REMOVE_FRIEND":
      const indexToRemove = state.friends.findIndex(
        (friend) => friend.id == action.id
      );
      newState = {
        friends: [
          ...state.friends.slice(0, indexToRemove),
          ...state.friends.slice(indexToRemove + 1),
        ],
      };
      return newState;
    default:
      return state;
  }
}
