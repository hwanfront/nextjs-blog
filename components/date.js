const getKorTimestamp = (date) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return new Date(date).toLocaleString("en", options);
};

const MyDate = ({ date }) => {
  return <time dateTime={date}>{getKorTimestamp(date)}</time>;
};

export default MyDate;
