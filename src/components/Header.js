import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import ButtonList from "../ButtonList";
import appLogo from "../utils/images/appLogo.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="sticky top-0 py-2 z-10 bg-[#2E4F4F] shadow-lg">
      <div className="grid grid-cols-5 items-center px-32">
        <Link className="w-1/2" to="/">
          <img className="rounded-lg " src={appLogo} alt="logo" />
        </Link>
        <div className="flex col-span-3 justify-center">
          <ButtonList />
        </div>
        <div>
          {!isLoggedIn ? (
            <Button
              className="w-1/3 float-right hover:bg-[#0E8388] py-2 bg-[#CBE4DE] border-4 rounded-full border-[#2C3333] hover:duration-500"
              onClick={() => setIsLoggedIn(true)}
            >
              LogOut
            </Button>
          ) : (
            <Button
              className="w-1/3 float-right hover:bg-[#0E8388] py-2 bg-[#CBE4DE] border-4 rounded-full border-[#2C3333] hover:duration-500"
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
