
export const formatDate = function (date, time) {
  return new Date([date.split('/').reverse().join('-') , "T", "19:00"].join(''));
};

export const isCurrentTimeInRange = function (date, startTime, endTime) {
    return formatDate(date, startTime) <= Date.now() && formatDate(date, endTime) > Date.now();
};