const convertTime = (time) => {
  const hours = Math.floor(time / 60);

  const minutes = time % 60;

  return `${hours}hr ${minutes}min`;
};

// Convert a number to money formatting
const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export default { convertTime, convertMoney };
