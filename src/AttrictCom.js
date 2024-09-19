import React, { useReducer, useEffect } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: action.payload };
    default:
      return state;
  }
}

const initialState = { count: 0 };

export default function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  useEffect(() => {
    if (state.count === 120) {
      dispatch({ type: "reset" });
    } else if (state.count === 10) {
      dispatch({ type: "set", payload: 100 });
    }
  }, [state.count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <div style={{ fontSize: "2em", margin: "20px" }}>{state.count}</div>
      <button
        onClick={() => dispatch({ type: "increment" })}
        style={{ fontSize: "1em", padding: "10px 20px", margin: "5px" }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{ fontSize: "1em", padding: "10px 20px", margin: "5px" }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        style={{ fontSize: "1em", padding: "10px 20px", margin: "5px" }}
      >
        Reset
      </button>
    </div>
  );
}
