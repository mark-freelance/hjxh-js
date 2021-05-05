import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import { ordersReducer } from "./orders/reducer";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { adReducer } from "./ad/reducer";

export const rootReducer = combineReducers({
  orders: ordersReducer,
  ad: adReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;

export type AppState = ReturnType<typeof rootReducer>;
