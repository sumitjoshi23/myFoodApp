import { useRouteError } from "react-router-dom";

function Error() {
  let err = useRouteError();
  return <div>{err.status}</div>;
}
export default Error;
