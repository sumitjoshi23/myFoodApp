// This is displayed to overcome CORS error while making initial request to API server
export const fallBackLandingPage = `</br></br></br><b>If you are not able to see any content. Kindly install this SAFE extention named CORS:</b></br>
</br>
<a target="_blank" href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en">Click here for Google Chrome</a></br>
<a target="_blank" href="https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag">Click for Microsoft Edge</a></br>
<a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/">Click for Mozilla Firefox</a></br></br>
<i>After installing the extension turn it on to proceed by clicking the</i> C<span>&#8942;</span> <i>icon.</i> and refresh the browser.`;

// This price is in paise and is used for the items which do not hold any price in the API used.
export const fallbackItemPrice = 10000;

export const getETA = (mins) => {
  return (
    <>
      {mins} minutes ({" "}
      <span className="text-[#E97171] font-semibold">
        {new Date(new Date().getTime() + mins * 60 * 1000).toLocaleTimeString()}
      </span>{" "}
      )
    </>
  );
};
