import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button ref={ref} className={`cursor-pointer ${className}`} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
