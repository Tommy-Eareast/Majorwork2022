let time = new Date();
let utc = {
    year: time.getUTCFullYear(),
    mon: time.getUTCMonth() + 1,
    date: time.getUTCDate(),
    hour: time.getUTCHours(),
    min: time.getUTCMinutes(),
    sec: time.getUTCSeconds()
};
