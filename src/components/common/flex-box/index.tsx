interface FlexBoxProps {
  col?: boolean;
  gap?: number;
  justify?: string;
  children?: React.ReactNode;
}

const FlexBox = ({ col, gap, justify, children }: FlexBoxProps) => {
  return <div>{children}</div>;
};

export default FlexBox;
