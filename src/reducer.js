const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + action.payload.num;
    case "MINUS":
      return state - action.payload.num;
    case "PLUS_ONE":
      return state + 1;
    case "MINUS_ONE":
      return state + -1;
    default:
      return state;
  }
};

export default reducer;
