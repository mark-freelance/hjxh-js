import { ORDERS_ACTION_TYPE, SET_ORDERS } from "./types";
import { AnyAction } from "redux";

export interface Order {
  order_sn: string;
  goods_name: string;
  spec: string;
  goods_number: number;
  order_amount: number;
  order_status_string: string;
  order_time: number;
  nickname: string;
  created_at: number;
  receive_name: string;
  thumb_url: string;
}

export interface OrderState {
  orders: Order[];
  visOrders: Order[];
}

export const getInitOrderState = (): OrderState => ({
  orders: [],
  visOrders: [],
});

export const ordersReducer = (
  state = getInitOrderState(),
  action: AnyAction
): OrderState => {
  switch (action.type as ORDERS_ACTION_TYPE) {
    case SET_ORDERS:
      return {
        orders: action.payload,
        visOrders: action.payload,
      };
    default:
      return state;
  }
};
