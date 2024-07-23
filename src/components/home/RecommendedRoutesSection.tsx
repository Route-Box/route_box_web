import styled from 'styled-components';
import SubSectionTitle from './SubSectionTitle copy';
import SectionTitle from './SectionTitle';
import ImageCard from './ImageCard';
import SampleImageBase from '@/assets/png/sample-image.png';
import { MarginDiv } from '@/styles';
import HorizontalScroll from '../common/HorizontalScroll';

const RecommendedRoutesSection = () => {
  return (
    <Container>
      <SubSectionTitle content="따뜻한 6월엔 여기로 데이트 어때요?" />
      <SectionTitle content="오늘의 추천 루트" isArrow />
      <MarginDiv mt={1} />
      <HorizontalScroll>
        <ImageCards>
          <ImageCard
            imageSrc={SampleImageBase}
            title="경주 200% 즐기는 법"
            description="루트 간략 설명이 들어가는"
          />
          <ImageCard
            imageSrc={SampleImageBase}
            title="경주 200% 즐기는 법"
            description="루트 간략 설명이 들어가는"
          />
          <ImageCard
            imageSrc={SampleImageBase}
            title="경주 200% 즐기는 법"
            description="루트 간략 설명이 들어가는"
          />
          <ImageCard
            imageSrc={SampleImageBase}
            title="경주 200% 즐기는 법"
            description="루트 간략 설명이 들어가는"
          />
        </ImageCards>
      </HorizontalScroll>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 1.38rem;
  box-sizing: border-box;
  margin-top: 3.75rem;
`;

const ImageCards = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export default RecommendedRoutesSection;
