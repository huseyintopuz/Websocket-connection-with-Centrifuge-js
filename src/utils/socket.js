import { Centrifuge } from "centrifuge";

const WEBSOCKET_URL = process.env.REACT_APP_BASE_API
const JWT_TOKEN = process.env.REACT_APP_JWT_TOKEN;
// const WEBSOCKET_URL = "wss://api.prod.rabbitx.io/ws?p_limit=10&p_page=1&p_order=DESC";
// const JWT_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MDAwMDAwMDAwIiwiZXhwIjo2NTQ4NDg3NTY5fQ.o_qBZltZdDHBH3zHPQkcRhVBQCtejIuyq8V1yj5kYq8";

const crypto = "SOL";

export const centrifuge = new Centrifuge(WEBSOCKET_URL, {
  token: JWT_TOKEN,
});

export const orderbookSub = centrifuge.newSubscription(
  `orderbook:${crypto}-USD`
);
