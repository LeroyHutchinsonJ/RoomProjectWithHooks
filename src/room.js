import React, { useReducer } from "react";

var Reducer = (state, action) => {
  switch (action.type) {
    case 0:
      return action.type + 1;

    case 1:
      return action.type + 4;

    case 5:
      return action.type + 5;

    case 10:
      return 0;
    default:
      return state;
  }
};

var Room = () => {
  var [state, dispatch] = useReducer(Reducer, 0);

  var room = {
    padding: "20px",
    backgroundColor: "Blue",
    marginLeft: "120px",
    marginRight: "120px",
    marginTop: "20px",
    opacity: state / 10
  };

  return (
    <>
      <div style={room} />
      <button onClick={() => dispatch({ type: state })}>Change Light</button>
    </>
  );
};

export default Room;
