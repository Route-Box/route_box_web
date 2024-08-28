import { MarginDiv } from '@/styles';
import styled from 'styled-components';

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ImageCard = ({ imageSrc, title, description, onClick }: ImageCardProps) => {
  return (
    <Container onClick={onClick}>
      <CardImage src={imageSrc} />
      <MarginDiv mt={0.94} />
      <Title>{title}</Title>
      <MarginDiv mt={0.25} />
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled.div``;

const CardImage = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
`;

const Title = styled.h3`
  color: #222;
  font-feature-settings: 'case' on;

  /* Title_M */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
`;

const Description = styled.p`
  color: #999;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default ImageCard;
