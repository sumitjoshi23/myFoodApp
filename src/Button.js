import classNames from "classnames";

const Button = ({ children, className, ...rest }) => {
  const buttonDefaultClasses =
    "font-semibold flex justify-center items-center hover:bg-[#2C3333] hover:text-white px-4 text-xl bg-[#CBE4DE] rounded-full duration-500 h-12";
  const finalButtonClasses = classNames(buttonDefaultClasses, className);
  return (
    <button {...rest} className={finalButtonClasses}>
      {children}
    </button>
  );
};

export default Button;
