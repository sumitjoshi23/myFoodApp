import classNames from "classnames";

const Button = ({ children, className, ...rest }) => {
  const buttondefaultClasses =
    "font-semibold flex justify-center items-center hover:bg-[#2C3333] hover:text-white mx-2 px-5 text-xl bg-[#CBE4DE] border-4 rounded-full border-[#2C3333] hover:duration-500 h-14";
  const finalButtonClasses = classNames(buttondefaultClasses, className);
  return (
    <button {...rest} className={finalButtonClasses}>
      {children}
    </button>
  );
};

export default Button;
