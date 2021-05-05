import { SET_AD } from "./types";

export const setAd = (data: any[]) => ({
  type: SET_AD,
  payload: data,
});
