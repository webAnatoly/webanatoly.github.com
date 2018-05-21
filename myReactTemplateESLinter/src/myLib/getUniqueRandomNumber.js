let counter = Math.random();

const getUniqueRandomNumber = () => {
  const randomNumber = counter;
  counter += 1.1234;
  return randomNumber;
};

export default getUniqueRandomNumber;
