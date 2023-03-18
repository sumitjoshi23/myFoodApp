import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
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
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    dispatch(setSignedInUserProfile(null));
  };

  return (
    <div className="sticky top-0 py-2 z-10 bg-[#2E4F4F] shadow-lg">
      <div className="grid grid-cols-5 items-center px-32">
        <Link to="/">
          <img className="w-1/4 rounded-full" src={appLogo} alt="logo" />
        </Link>
        <div className="flex col-span-3 justify-center">
          <ButtonList />
        </div>
        <div>
          {!profile ? (
            <Button className="float-right" onClick={login}>
              <img
                className="rounded-full w-6"
                src={googleIcon}
                alt="googleIcon"
              />
              <span className="m-2">Sign In</span>
            </Button>
          ) : (
            <Button className="float-right " onClick={logOut}>
              <img
                className="rounded-full w-6"
                src={profile.picture}
                alt="user image"
              />
              <span className="m-2 w-min">{profile.name}</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
