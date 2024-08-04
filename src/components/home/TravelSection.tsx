import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ImageButton from './ImageButton';
import ImageBase1 from '@/assets/png/image-button-1.png';
import ImageBase2 from '@/assets/png/image-button-2.png';

const TravelSection = () => {
  return (
    <Container>
      <SectionTitle content="당신의 모든 여행을 위해" />
      <ImageButtons>
        <ImageButton imageSrc={ImageBase1} content={`내 여행 루트\n기록하러 가기`} />
        <ImageButton imageSrc={ImageBase2} content={`다른 사람 루트\n구경하러 가기`} />
      </ImageButtons>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.38rem;
  box-sizing: border-box;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 0.81rem;
`;

export default TravelSection;
