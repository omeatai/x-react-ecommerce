// import redux from 'redux';
// import { legacy_createStore as createStore } from 'redux';

const redux = require("redux");
const createStore = redux.legacy_createStore;

//action type
const BUY_CAKE = "BUY_CAKE";

//action function (action creator)
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//intial state
const initialState = {
  numOfCakes: 10,
};

//reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

//create store
const store = createStore(reducer);
console.log("Initial state", store.getState());

//listener service
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

//perform action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

//close service
unsubscribe();
