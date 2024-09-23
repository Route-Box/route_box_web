import styled from 'styled-components';

export const RouteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const RouteItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.875rem;
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 0.5rem;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 0.5rem; */
  height: 5rem;
  justify-content: space-between;

  .route_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;

    div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div:first-child {
      color: var(--Black_);
    }

    div:last-child {
      color: var(--gray-3-placeholder-text);
    }
  }

  .create_date {
    color: var(--gray-3-placeholder-text);
  }
`;

export const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Black_, #161616);
`;

export const Preview = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray-3-placeholder-text);
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  color: var(--gray-3-placeholder-text);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ItemImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Date = styled.div``;

export const More = styled.button`
  background-color: transparent;
  border: none;
`;
