import { DEFAULT_SVG_FILL, DEFAULT_SVG_FILL_HOVER } from "helpers/aliasConsts";
import React, { FC, ReactElement, ReactNode, useState } from "react";
import { IconProps } from "types/types";
import styles from "./Button.module.scss";
import classNames from "classnames";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  id: string;
  children?: ReactNode;
  icon?: (props: IconProps) => ReactElement;
  className?: string;
  disabled?: boolean;
};

const Button: FC<Props> = ({
  icon,
  className,
  disabled,
  children,
  ...restProps
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const Icon = icon;
  const buttonClasses = classNames(styles.basicButton, className, {
    [styles.disabled]: disabled,
    [styles.oneColumn]: !Icon || !children,
  });

  return (
    <button
      {...restProps}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={buttonClasses}
    >
      {Icon && (
        <Icon fill={isHover ? DEFAULT_SVG_FILL_HOVER : DEFAULT_SVG_FILL} />
      )}
      {children && <span>{children}</span>}
    </button>
  );
};
export default Button;
