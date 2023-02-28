import classNames from "classnames";
import React from "react";
import { IButtonProps } from "../../Button";

const Secondary = ({
  className = "",
  type = "button",
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "bg-white text-darkBlue border border-darkBlue px-[12px] py-[5px] rounded-[4px]",
        className
      )}
    >
      {children}
    </button>
  );
};

export { Secondary };
