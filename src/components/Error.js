import { useRouteError } from "react-router-dom";

function Error() {
  let err = useRouteError();
  return (
    <div className="">
      Oops {err.status} !!! Landed to a wrong page..
      <p>please check url and retry!!!!!</p>
    </div>
  );
}
export default Error;
