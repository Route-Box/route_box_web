import styled from 'styled-components';
import SubSectionTitle from './SubSectionTitle copy';
import SectionTitle from './SectionTitle';
import { MarginDiv } from '@/styles';
import HorizontalScroll from '../common/HorizontalScroll';
import SimpleCard from './SimpleCard';
import { PopularRoutesResponse } from '@/api/home/types';
import { useQuery } from '@tanstack/react-query';
import { homeService } from '@/api/home/homeService';
import Loader from '../common/Loader';
import { useCallback } from 'react';
import { useNativeBridge } from '@/hooks/useNativeBridge';

const PopularRoutesSection = () => {
  const { data, isLoading } = useQuery<PopularRoutesResponse>({
    queryKey: ['popularRoutes'],
    queryFn: homeService.getPopularRoutes,
  });

  const { changePage } = useNativeBridge();

  const handleMoveRoute = useCallback(
    (_id: number) => {
      changePage('ROUTE', String(_id));
    },
    [changePage]
  );

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <SubSectionTitle content="여행 일정, 루트 박스가 대신 짜드립니다" />
      <SectionTitle content="오늘의 인기 루트" isArrow />
      <MarginDiv mt={1} />
      <HorizontalScroll>
        <SimpleCards>
          {data?.routes.map((route, idx) => (
            <SimpleCard
              key={idx}
              bgColor={route.id % 2 === 0 ? '#E2F1EC' : '#FDF6EB'}
              content={route.name}
              onClick={() => {
                handleMoveRoute(route.id);
              }}
            />
          ))}
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
