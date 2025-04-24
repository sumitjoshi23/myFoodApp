import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../utils/images/googleIcon.png';
import NavbarLinksSection from '../NavbarLinksSection';
import appLogo from '../utils/images/appLogo.jpg';
import axios from 'axios';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { setSignedInUser, setSignedInUserProfile } from '../store';
import Button from '../Button';

function Header() {
  const { user, profile } = useSelector((store) => store.signedInUser);
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => dispatch(setSignedInUser(codeResponse)),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          dispatch(setSignedInUserProfile(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [user, dispatch]);

  const logOut = () => {
    googleLogout();
    dispatch(setSignedInUserProfile(null));
  };

  return (
    <>
      <nav className="sticky top-0 shadow-lg z-10 flex items-center justify-between bg-[#fb6c3c] p-2">
        <div className="flex items-center mx-4">
          <Link className="flex items-center" to="/">
            <img
              src={appLogo}
              alt="logo"
              className="rounded w-14 mr-4 hover:rotate-180 hover:scale-125 duration-700 "
            />
            <span className="text-white hover:scale-110 duration-300 font-semibold text-xl">
              Jo Foods
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <NavbarLinksSection />
        </div>
        <div className="w-44">
          {!profile ? (
            <Button
              className="py-2 leading-none border text-white border-white hover:border-transparent hover:scale-125 hover:text-[#fb6c3c] hover:bg-white"
              onClick={login}
            >
              <img
                className="rounded-full w-9"
                src={googleIcon}
                alt="googleIcon"
              />
              <span className="m-2">Sign In</span>
            </Button>
          ) : (
            <Button
              className="py-2 leading-none  border text-white border-white hover:border-transparent hover:scale-125 hover:text-[#fb6c3c] hover:bg-white"
              onClick={logOut}
            >
              <img
                className="rounded-full bg-white p-1 w-9"
                src={profile.picture}
                alt="userProfile"
              />
              <span className="m-2">Sign out</span>
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
