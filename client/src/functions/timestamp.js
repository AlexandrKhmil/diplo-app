export const timestampToData = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const timestampToDataTime = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let year = date.getFullYear();
  let hour = date.getHours();
  hour = hour < 10 ? `0${hour}` : hour;
  let minute = date.getMinutes();
  minute = minute < 10 ? `0${minute}` : minute;
  return `${hour}:${minute} ${day}-${month}-${year}`;
};