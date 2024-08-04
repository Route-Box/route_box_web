import styled from 'styled-components';
import SubSectionTitle from './SubSectionTitle copy';
import SectionTitle from './SectionTitle';
import { MarginDiv } from '@/styles';
import HorizontalScroll from '../common/HorizontalScroll';
import SimpleCard from './SimpleCard';

const PopularRoutesSection = () => {
  return (
    <Container>
      <SubSectionTitle content="여행 일정, 루트 박스가 대신 짜드립니다" />
      <SectionTitle content="오늘의 인기 루트" isArrow />
      <MarginDiv mt={1} />
      <HorizontalScroll>
        <SimpleCards>
          <SimpleCard bgColor="#E2F1EC" content={`여자친구에게 칭찬 왕창\n받은 데이트 코스`} />
          <SimpleCard bgColor="#FDF6EB" content={`6월에 여기 안가면\n후회해요`} />
          <SimpleCard bgColor="#E2F1EC" content={`여자친구에게 칭찬 왕창\n받은 데이트 코스`} />
          <SimpleCard bgColor="#FDF6EB" content={`6월에 여기 안가면\n후회해요`} />
        </SimpleCards>
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

const SimpleCards = styled.div`
  display: flex;
  gap: 0.81rem;
`;

export default PopularRoutesSection;
