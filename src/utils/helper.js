// This is displayed to overcome CORS error while making initial request to API server
export const fallBackLandingPage = `</br></br></br><b>If you are not able to see any content. Kindly install this SAFE extention named CORS:</b></br>
</br>
<a target="_blank" href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en">Click here for Google Chrome</a></br>
<a target="_blank" href="https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag">Click for Microsoft Edge</a></br>
<a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/">Click for Mozilla Firefox</a></br></br>
<i>After installing the extension turn it on to proceed by clicking the</i> C<span>&#8942;</span> <i>icon.</i> and refresh the browser.`;

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
