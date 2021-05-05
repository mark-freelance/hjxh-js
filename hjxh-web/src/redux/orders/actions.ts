import { SET_ORDERS } from "./types";

export const setOrders = (data: any) => ({
  type: SET_ORDERS,
  payload: data,
});
