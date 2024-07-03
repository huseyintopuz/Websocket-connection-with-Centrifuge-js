import { useEffect, useState } from "react";
import { centrifuge, orderbookSub } from "../utils/socket";
import { mergeAndSumArrays } from "../utils/mergeAndSumArrays";

export const useGetAsksBids = () => {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);

  useEffect(() => {
    const handlePublication = (data) => {
      const orderbookData = data.data;
      
      if (orderbookData.bids) {
        setBids((prevBids) => {
          const newBids = mergeAndSumArrays([...prevBids, ...orderbookData.bids])
            .sort((a, b) => b[0] - a[0])
            .slice(0, 11);
          return newBids;
        });
      }

      if (orderbookData.asks) {
        setAsks((prevAsks) => {
          const newAsks = mergeAndSumArrays([...prevAsks, ...orderbookData.asks])
            .sort((a, b) => a[0] - b[0])
            .slice(0, 11);
          return newAsks;
        });
      }
    };

    orderbookSub.on("publication", handlePublication);

    orderbookSub.on("subscribing", () => {
      console.log("Subscribing to the orderbook channel...");
    });

    orderbookSub.on("subscribed", () => {
      console.log("Subscribed to the orderbook channel");
    });

    orderbookSub.on("unsubscribed", () => {
      console.log("Unsubscribed from the orderbook channel");
    });

    orderbookSub.subscribe();
    centrifuge.connect();

    return () => {
      if (orderbookSub) {
        orderbookSub.unsubscribe();
      }
    };
  }, []);

  return { bids, asks };
};
