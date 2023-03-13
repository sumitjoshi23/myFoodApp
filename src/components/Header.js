import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import ButtonList from "../ButtonList";
import appLogo from "../utils/images/appLogo.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="sticky top-0 py-2 bg-[#2E4F4F] shadow-lg">
      <div className="container flex items-center justify-between mx-auto px-32">
        <Link to="/">
          <img className="w-1/3 rounded-lg " src={appLogo} alt="logo" />
        </Link>
        <ul className="flex">
          <li>
            <ButtonList />
          </li>
        </ul>
        <div className="w-1/12">
          {!isLoggedIn ? (
            <Button
              className="w-full float-right hover:bg-[#0E8388] py-2 bg-[#CBE4DE] border-4 rounded-full border-[#2C3333]"
              onClick={() => setIsLoggedIn(true)}
            >
              LogOut
            </Button>
          ) : (
            <Button
              className="w-full float-right hover:bg-[#0E8388] py-2 bg-[#CBE4DE] border-4 rounded-full border-[#2C3333]"
              onClick={() => setIsLoggedIn(false)}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
