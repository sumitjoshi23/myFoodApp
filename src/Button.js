const Button = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export default Button;
