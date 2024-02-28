export default function DateFormat(array) {
  const FormatedArray = array.map((obj) => {
    const isoDate = new Date(obj.createdAt);
    const newDate = isoDate.toLocaleDateString("pt-BR");

    return {
      ...obj,
      createdAt: newDate,
    };
  });
  return FormatedArray;
}
