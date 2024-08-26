import styled from 'styled-components';
import SubSectionTitle from './SubSectionTitle copy';
import SectionTitle from './SectionTitle';
import ImageCard from './ImageCard';
import SampleImageBase from '@/assets/png/sample-image.png';
import { MarginDiv } from '@/styles';
import HorizontalScroll from '../common/HorizontalScroll';
import { useQuery } from '@tanstack/react-query';
import { RecommendRoutesResponse } from '@/api/home/types';
import { homeService } from '@/api/home/homeService';
import Loader from '../common/Loader';
import { useNativeBridge } from '@/hooks/useNativeBridge';
import { useCallback } from 'react';

const RecommendedRoutesSection = () => {
  const { data, isLoading } = useQuery<RecommendRoutesResponse>({
    queryKey: ['recommendRoutes'],
    queryFn: homeService.getRecommendRoutes,
  });

  const { sendMessageToNative } = useNativeBridge();

  const handleMoveRoute = useCallback(
    (_id: number) => {
      sendMessageToNative({
        type: 'PAGE_CHANGE',
        payload: {
          page: 'route',
          id: String(_id),
        },
      });
    },
    [sendMessageToNative]
  );

  return isLoading ? (
    <Loader $fullScreen />
  ) : (
    <Container>
      <SubSectionTitle content={data?.comment ?? ''} />
      <SectionTitle content="오늘의 추천 루트" isArrow />
      <MarginDiv mt={1} />
      <HorizontalScroll>
        <ImageCards>
          {data?.routes.map((imgCard, idx) => (
            <ImageCard
              key={idx}
              onClick={() => {
                handleMoveRoute(imgCard.id);
              }}
              imageSrc={imgCard.routeImageUrl}
              title={imgCard.routeName}
              description={imgCard.routeDescription}
            />
          ))}
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
