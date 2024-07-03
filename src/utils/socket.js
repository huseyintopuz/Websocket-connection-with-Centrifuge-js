import { Centrifuge } from "centrifuge";

const WEBSOCKET_URL = process.env.REACT_APP_BASE_API
const JWT_TOKEN = process.env.REACT_APP_JWT_TOKEN;
const crypto = "SOL";

export const centrifuge = new Centrifuge(WEBSOCKET_URL, {
  token: JWT_TOKEN,
});

export const orderbookSub = centrifuge.newSubscription(
  `orderbook:${crypto}-USD`
);
