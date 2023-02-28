import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Secondary } from "./variants/Secondary";

export interface IButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "button" | "submit" | "reset";
}

const Button = ({
  className = "",
  type = "button",
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "bg-darkBlue text-white px-[12px] py-[5px] rounded-[4px]",
        className
      )}
    >
      {children}
    </button>
  );
};

Button.Secondary = Secondary;

export { Button };
