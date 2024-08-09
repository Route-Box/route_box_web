import React from 'react';
import styled from 'styled-components';

// Typography 속성 정의
interface TypographyProps {
  variant:
    | 'Heading_L'
    | 'Heading_M'
    | 'Heading_S'
    | 'Title_XL'
    | 'Title_L'
    | 'Title_M'
    | 'Title_S'
    | 'Body_B_XL'
    | 'Body_B_L'
    | 'Body_B_M'
    | 'Body_B_S'
    | 'Body_B_XS'
    | 'Body_R_XL'
    | 'Body_R_L'
    | 'Body_R_M'
    | 'Body_R_S'
    | 'Body_R_XS';
  children: React.ReactNode;
  className?: string;
}

// Typography 스타일 정의
const StyledTypography = styled.div<TypographyProps>`
  font-family: 'Pretendard', sans-serif;
  font-weight: ${(props) => (props.variant.startsWith('Body_R') ? 'normal' : 'bold')};
  font-size: ${(props) => {
    switch (props.variant) {
      case 'Heading_L':
        return '28px';
      case 'Heading_M':
        return '24px';
      case 'Heading_S':
        return '20px';
      case 'Title_XL':
        return '20px';
      case 'Title_L':
        return '18px';
      case 'Title_M':
        return '16px';
      case 'Title_S':
        return '14px';
      case 'Body_B_XL':
      case 'Body_R_XL':
        return '20px';
      case 'Body_B_L':
      case 'Body_R_L':
        return '18px';
      case 'Body_B_M':
      case 'Body_R_M':
        return '16px';
      case 'Body_B_S':
      case 'Body_R_S':
        return '14px';
      case 'Body_B_XS':
      case 'Body_R_XS':
        return '12px';
      default:
        return '16px';
    }
  }};
  line-height: ${(props) => {
    switch (props.variant) {
      case 'Heading_L':
        return '36px';
      case 'Heading_M':
        return '32px';
      case 'Heading_S':
        return '26px';
      case 'Title_XL':
        return '30px';
      case 'Title_L':
        return '26px';
      case 'Title_M':
        return '24px';
      case 'Title_S':
        return '20px';
      case 'Body_B_XL':
      case 'Body_R_XL':
        return '30px';
      case 'Body_B_L':
      case 'Body_R_L':
        return '26px';
      case 'Body_B_M':
      case 'Body_R_M':
        return '24px';
      case 'Body_B_S':
      case 'Body_R_S':
        return '20px';
      case 'Body_B_XS':
      case 'Body_R_XS':
        return '18px';
      default:
        return '24px';
    }
  }};
`;

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  return (
    <StyledTypography variant={variant} className={className}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
