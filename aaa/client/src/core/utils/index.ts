const random = () =>
  (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

export const uuid = () => {
  return (
    random() +
    random() +
    "-" +
    random() +
    "-" +
    random() +
    "-" +
    random() +
    "-" +
    random() +
    random() +
    random()
  );
};
