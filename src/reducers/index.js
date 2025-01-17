let defaultState = {
  color: "red"
};

const mainReducer = (state = defaultState, action) => {
  //   console.log(state);
  if (action.type === "CHANGE_COLOR") {
    return {
      ...state,
      color: action.color
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
