export default function MyDate({ date }) {
  const getKorTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    return new Date(timestamp).toLocaleString("en", options);
  };

  return <time dateTime={date}>{getKorTimestamp(date)}</time>;
}
