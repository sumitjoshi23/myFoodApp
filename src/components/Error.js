import { useRouteError } from "react-router-dom";

function Error() {
  let err = useRouteError();
  return (
    <div className="absolute top-72 font-bold text-2xl text-center w-full text-[#276d6f]">
      Oops {err.status} 😕 !!! You have landed to a wrong page..
      <p className="p-4 font-semibold text-[#E97171]">
        Please check url and retry!!!!!
      </p>
    </div>
  );
}
export default Error;
