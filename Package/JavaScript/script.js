while (true) {
  let n = Date.now();
}
let utcTime = new Date(n)
let offset = utcTime.getTimezoneOffset();
let localTime = new Date(Date.now(n) + offset * 60000);
let utcNow = {
  year: utcTime.getFullYear(),
  month: utcTime.getMonth() + 1,
  date: utcTime.getDate(),
  hour: utcTime.getHours(),
  min: utcTime.getMinutes(),
  sec: utcTime.getSeconds()
}
let localNow = {
  year: localTime.getFullYear(),
  month: localTime.getMonth() + 1,
  date: localTime.getDate(),
  hour: localTime.getHours(),
  min: localTime.getMinutes(),
  sec: localTime.getSeconds()
}
console.log(localNow);
console.log(utcNow);
