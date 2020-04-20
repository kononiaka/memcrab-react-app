const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const genID = (length = 10) => {
  const chars = "123456789qwertyuiopasdfghjklzxcvbnm";
  const max = chars.length - 1;

  let id = "";
  for (let i = 0; i < length; i++) {
    const index = randomInteger(0, max);
    id += chars[index];
  }

  return id;
};

export { randomInteger, genID };
