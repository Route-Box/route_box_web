import { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const CustomButton = ({
  disabled = false,
  className = '',
  children,
  ...props
}: CustomButtonProps) => {
  const btnClass = classNames(
    styles.button,
    disabled ? styles.disabled : styles.enabled,
    className
  );

  return (
    <button className={btnClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
