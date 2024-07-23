import styled from 'styled-components';
import RouteBoxIconBase from '@/assets/png/routebox_icon.png';
import ArrowIconBase from '@/assets/svg/arrow_right.svg';

const InfoCard = () => {
  return (
    <Container>
      <Frame>
        <LeftSplit>
          <Title>
            <RouteBoxIcon src={RouteBoxIconBase} alt="routebox_icon" />
            루트박스 200% 즐기는 방법?
          </Title>
          <BodyText>루트박스의 모든 것, 여기서 알려드립니다!</BodyText>
        </LeftSplit>
        <RightSplit>
          <ArrowIcon src={ArrowIconBase} />
        </RightSplit>
      </Frame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 1.38rem;
  box-sizing: border-box;
`;

const Frame = styled.div`
  display: flex;
  width: 20.6875rem;
  padding: 1.25rem;
  align-items: flex-start;
  gap: 0.6875rem;
  box-sizing: border-box;
  border-radius: 0.625rem;
  background: #d6f8e6;
  box-shadow: 0px 6px 8px 0px rgba(162, 218, 211, 0.08);
`;

const LeftSplit = styled.div``;

const RightSplit = styled.div``;

const RouteBoxIcon = styled.img`
  width: 1.5rem;
  height: 1.492rem;
  flex-shrink: 0;
`;

const Title = styled.h3`
  color: var(--Black_, #161616);
  font-feature-settings: 'case' on;
  display: flex;
  gap: 0.25rem;

  /* Title_L */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 144.444% */
`;

const BodyText = styled.p`
  color: var(--Gray1_, #333);
  font-feature-settings: 'case' on;

  /* Body_R/M */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
`;

const ArrowIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
`;

export default InfoCard;
