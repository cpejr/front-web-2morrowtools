export default function formatDate({ value, local = "pt-BR", options = {} }) {
  // Verifica se o valor de data é válido
  if (!value || isNaN(new Date(value))) {
    return "";
  }

  const dateObject = new Date(value);

  const dateFormatter = new Intl.DateTimeFormat(local, {
    ...options,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const formattedDate = dateFormatter.format(dateObject);

  const timeFormatter = new Intl.DateTimeFormat(local, {
    ...options,
    hour: "numeric",
    minute: "numeric",
  });
  const formattedTime = timeFormatter.format(dateObject);

  return `${formattedDate} ${formattedTime}`;
}
