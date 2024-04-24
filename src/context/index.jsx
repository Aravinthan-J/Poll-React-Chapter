import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import { STATE_ACTIONS } from "../helper/constants";

const initialState = {
  isAuthenticated: false,
  userId: null,
  pollState: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case STATE_ACTIONS.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload.userId,
      };
    case STATE_ACTIONS.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userId: null,
      };
    case STATE_ACTIONS.UPDATE_POLL_STATE:
      return {
        ...state,
        pollState: action.payload.pollState,
      };
    default:
      return state;
  }
};

// Create the context
export const PollContext = createContext();

// Create the context provider component

export const PollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define the action functions
  const login = (userId) => {
    dispatch({ type: "LOGIN", payload: { userId } });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const updatePollState = (pollState) => {
    dispatch({ type: "UPDATE_POLL_STATE", payload: { pollState } });
  };

  // Provide the state and action functions to the children components
  return (
    <PollContext.Provider
      value={{
        state,
        login,
        logout,
        updatePollState,
      }}
    >
      {children}
    </PollContext.Provider>
  );
};
PollProvider.propTypes = {
  children: PropTypes.node,
};
