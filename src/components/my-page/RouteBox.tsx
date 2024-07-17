import React from 'react';
import styled from 'styled-components';
import SubComponent from './SubComponent';
import { RouteBoxItem } from './RouteBoxItem';
import { routeData } from './Dummy';

const RouteBox: React.FC = () => {
  return (
    <Frame>
      <SubComponent title="내 박스에 담긴 루트" />
      <RouteList>
        {routeData.map((route, index) => (
          <RouteBoxItem
            key={index}
            title={route.title}
            preview={route.preview}
            like={route.like}
            comment={route.comment}
            date={route.date}
          />
        ))}
      </RouteList>
    </Frame>
  );
};

const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RouteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default RouteBox;
