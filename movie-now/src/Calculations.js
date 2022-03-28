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

const convertAge = (birthdate) => {
  const today = new Date();
  const thisYear = today.getFullYear();
  const hyphenPosition = birthdate.indexOf("-");
  const birthYear = parseInt(birthdate.slice(0, hyphenPosition));
  const age = thisYear - birthYear;

  return age.toString();
};

export default { convertTime, convertMoney, convertAge };
