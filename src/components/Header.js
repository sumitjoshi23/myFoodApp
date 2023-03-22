import { useEffect } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../utils/images/googleIcon.png";
import ButtonList from "../ButtonList";
import appLogo from "../utils/images/appLogo.jpg";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { setSignedInUser, setSignedInUserProfile } from "../store";

function Header() {
  const { user, profile } = useSelector((store) => store.signedInUser);
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => dispatch(setSignedInUser(codeResponse)),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          dispatch(setSignedInUserProfile(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [user, dispatch]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    dispatch(setSignedInUserProfile(null));
  };

  return (
    <>
      <nav className="sticky top-0 shadow-lg z-10 flex items-center justify-between bg-[#810000] p-4">
        <div className="flex items-center text-white mx-4">
          <Link className="flex items-center" to="/">
            <img
              src={appLogo}
              alt="logo"
              className="rounded w-14 mr-5 hover:rotate-180 hover:scale-125 duration-700 "
            />
            <span className="hover:text-white hover:scale-110 font-semibold text-xl">
              J Foods & Co.
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <ButtonList />
        </div>
        <div className="mr-4 w-40">
          {!profile ? (
            <button
              className="flex items-center text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:scale-125 duration-300 hover:text-[#810000] hover:bg-white mt-4 lg:mt-0"
              onClick={login}
            >
              <img
                className="rounded-full w-8"
                src={googleIcon}
                alt="googleIcon"
              />
              <span className="m-2">Sign In</span>
            </button>
          ) : (
            <button
              className="flex items-center text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:scale-110 duration-300 hover:text-[#810000] hover:bg-white mt-4 lg:mt-0 "
              onClick={logOut}
            >
              <img
                className="rounded-full w-8"
                src={profile.picture}
                alt="userProfile"
              />
              <span className="m-2 ">Sign out</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
