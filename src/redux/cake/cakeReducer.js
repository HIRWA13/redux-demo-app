import { BUY_CAKE } from "./cakeTypes";

// what is a reducer?
// a reducer is a function that accepts state and an action and returns a new state

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: 
        return {
            ...state,
            numberOfCakes: action.numberOfCakes - 1
        }
    default: return state;
  }
};

export default cakeReducer;