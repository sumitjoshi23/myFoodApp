import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { FaRegUserCircle } from "react-icons/fa";
import ButtonList from "../ButtonList";
import appLogo from "../utils/images/appLogo.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="sticky top-0 py-2 z-10 bg-[#2E4F4F] shadow-lg">
      <div className="grid grid-cols-5 items-center px-32">
        <Link to="/">
          <img className="rounded-lg w-1/2" src={appLogo} alt="logo" />
        </Link>
        <div className="flex col-span-3 justify-center">
          <ButtonList />
        </div>
        <div>
          {!isLoggedIn ? (
            <Button
              className="float-right"
              onClick={() => setIsLoggedIn(false)}
            >
              <span>
                <FaRegUserCircle />
              </span>
              <span className="m-2">Login</span>
            </Button>
          ) : (
            <Button
              className="float-right "
              onClick={() => setIsLoggedIn(true)}
            >
              <span>
                <FaRegUserCircle />
              </span>
              <span className="m-2">LogOut</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
