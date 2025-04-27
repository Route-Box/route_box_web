import React from 'react';
import { Theme } from '@radix-ui/themes';

// 메인 컬러 정의 (jade 색상 계열을 사용)
export const themeOptions = {
  accentColor: 'jade',
  grayColor: 'slate',
  panelBackground: 'solid',
  scaling: '100%',
  radius: 'full',
} as const;

// 커스텀 테마 스타일 - 전역 CSS로 적용해야 함
export const customThemeColors = `
  /* 메인 컬러 #21C8B6 커스텀 */
  .radix-themes {
    --jade-1: hsl(171, 82%, 98%);
    --jade-2: hsl(171, 78%, 95%);
    --jade-3: hsl(171, 72%, 90%);
    --jade-4: hsl(171, 68%, 85%);
    --jade-5: hsl(171, 65%, 75%);
    --jade-6: hsl(171, 63%, 65%);
    --jade-7: hsl(171, 60%, 55%);
    --jade-8: hsl(171, 70%, 45%);
    --jade-9: hsl(171, 72%, 45%);
    --jade-10: hsl(171, 75%, 40%);
    --jade-11: hsl(171, 78%, 35%);
    --jade-12: hsl(171, 80%, 15%);
    
    /* 메인 컬러 값 직접 지정 */
    --main-color: #21C8B6;
  }
`;

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <Theme
      accentColor={themeOptions.accentColor}
      grayColor={themeOptions.grayColor}
      panelBackground={themeOptions.panelBackground}
      scaling={themeOptions.scaling}
      radius={themeOptions.radius}
    >
      {children}
    </Theme>
  );
};
