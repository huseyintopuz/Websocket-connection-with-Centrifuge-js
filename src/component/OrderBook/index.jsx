import React from "react";
import { useGetAsksBids } from "../../hooks/useGetAsksBids";
import "./style.css";
const Orderbook = () => {
  const { bids, asks } = useGetAsksBids();
  return (
    <div className="orderbook">
      <h1>OrderBook</h1>
      <table>
        <thead className="head">
          <tr>
            <th>Price <span className="currency">USD</span></th>
            <th>Amount <span className="currency">SOL</span></th>
          </tr>
        </thead>
        <tbody className="body">
          {bids.map((bid, index) => (
            <tr key={index}>
              <td className="bid-price">{bid[0]}</td>
              <td>{bid[1].toFixed(4)}</td>
            </tr>
          ))}
          <tr>
            <td>---</td>
          </tr>
          {asks.map((ask, index) => (
            <tr key={index}>
              <td className="ask-price">{ask[0]}</td>
              <td>{ask[1].toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orderbook;
