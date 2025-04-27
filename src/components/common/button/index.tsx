import { Button as RadixButton } from '@radix-ui/themes';
import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes';

// Radix Button 기본 속성에 추가적인 커스텀 속성 정의
interface ButtonProps extends RadixButtonProps {
  fullWidth?: boolean;
  // 메인 컬러는 jade를 기본값으로 사용
}

const Button = ({
  children,
  size = '3',
  variant = 'solid',
  color = 'jade', // jade 컬러는 #21C8B6으로 테마에서 커스텀됨
  radius = 'full',
  fullWidth = false,
  className = '',
  style,
  ...props
}: ButtonProps) => {
  // 전체 너비 스타일 적용
  const buttonStyle = {
    width: fullWidth ? '100%' : undefined,
    height: size === '3' ? '3.75rem' : undefined, // 기존의 height 값을 유지하고 싶은 경우
    ...style,
  };

  return (
    <RadixButton
      size={size}
      variant={variant}
      color={color} // 커스텀된 jade 컬러가 적용됨
      radius={radius}
      className={className}
      style={buttonStyle}
      {...props}
    >
      {children}
    </RadixButton>
  );
};

export default Button;
