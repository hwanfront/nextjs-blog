export default function MyDate({ date }) {
  const getKorTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };

    return new Date(timestamp).toLocaleString("ko-KR", options);
  };

  return <time dateTime={date}>{getKorTimestamp(date)}</time>;
}
