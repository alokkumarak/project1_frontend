export const initialState = null;

//create reducer
export const reducer = (state, action) => {
  if (action.type === "STUDENT") {
    return action.payload;
  }
  if (action.type === "TEACHER") {
    return action.payload;
  }
  if (action.type === "CLEAR") {
    return null;
    }
  return state;
};
