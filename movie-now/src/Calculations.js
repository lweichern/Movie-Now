const convertTime = (time) => {
  const hours = Math.floor(time / 60);

  const minutes = time % 60;

  return `${hours}hr ${minutes}min`;
};

export default { convertTime };
