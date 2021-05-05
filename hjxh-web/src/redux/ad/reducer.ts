import { AnyAction } from "redux";
import {AD_ACTION_TYPE, SET_AD} from "./types";

export interface AdState {
  ad: [];
}

export const getInitAdState = (): AdState => ({ ad: [] });

export const adReducer = (
  state = getInitAdState(),
  action: AnyAction
): AdState => {
  switch (action.type as AD_ACTION_TYPE) {
    case SET_AD:
      return { ad: action.payload };
    default:
      return state;
  }
};
