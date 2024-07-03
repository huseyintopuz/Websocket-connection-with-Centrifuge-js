export const mergeAndSumArrays = (arrays) => {
  const askMap = new Map();

  arrays.forEach(([price, amount]) => {
    // console.log(price, amount);
    price = parseFloat(price);
    amount = parseFloat(amount);
    if (!isNaN(amount) && amount !== 0) {
      const currentAmount = askMap.get(price) || 0;
      askMap.set(price, currentAmount + amount);
    }
  });
  return Array.from(askMap.entries());
};
