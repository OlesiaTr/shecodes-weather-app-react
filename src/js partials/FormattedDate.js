export default function FormattedDate({ date }) {
  console.log(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = date.getDate();
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
  const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  console.log(minutes);

  const showDate = `${day} | ${month} ${currentDate} | ${hours}:${minutes}`;

  return showDate;
}
