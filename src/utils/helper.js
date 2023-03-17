// This price is in paise and is used for the items which do not hold any price in the API used.
export const fallbackItemPrice = 10000;

const monthsList = [
  "January",
  "February",
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

export function getCurrentDate() {
  const dateObj = new Date();
  const month = monthsList[dateObj.getUTCMonth() + 1]; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  const newDate = day + " " + month + " " + year;
  return newDate;
}
export function getDateAfterNthDays(n) {
  const dateObj = new Date();
  const month = monthsList[dateObj.getUTCMonth() + 1]; //months from 1-12
  const day = dateObj.getUTCDate() + n;
  const year = dateObj.getUTCFullYear();

  const dateAfterNthDay = day + " " + month + " " + year;
  return dateAfterNthDay;
}
