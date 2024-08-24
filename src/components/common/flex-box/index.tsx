import React, { ReactNode } from 'react';

interface FlexBoxProps {
  children: ReactNode;
  col?: boolean;
  items?: string;
  justify?: string;
  gap?: number;
  px?: number;
  py?: number;
  calc?: number;
  bb?: boolean;
}

const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  col,
  items,
  justify,
  gap,
  px,
  py,
  calc,
  bb,
}) => {
  return (
    <section
      style={{
        display: 'flex',
        gap: `${gap || 0}rem`,
        padding: `${py || 0}rem ${px || 0}rem`,
        justifyContent: justify || 'flex-start',
        alignItems: items || 'flex-start',
        flexDirection: col ? 'column' : 'row',
        width: `calc(100% - ${calc || 0}rem)`,
        boxSizing: 'border-box',
        borderBottom: bb ? '1px solid #F2F2F2' : 'none',
      }}
    >
      {children}
    </section>
  );
};

export default FlexBox;
