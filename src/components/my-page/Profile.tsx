import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import styled from 'styled-components';
import profile from '../../assets/profile.svg';
import introductionEdit from '../../assets/introduction_edit.svg';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const userName = '고작가';
  const rootNum = 5;
  const introduction = '안녕하세요. 고작가입니다. 책을 읽고 쓰는 것을 좋아합니다.';

  return (
    <Frame>
      <ProfileImg src={profile} alt="profile img" />
      <UserName>{userName}</UserName>
      <Route>
        루트 <RouteNum>{rootNum}개</RouteNum>
      </Route>
      <Introduction>
        {introduction}
        <IntroductionEdit
          src={introductionEdit}
          alt="edit"
          onClick={() => navigate({ to: '/my-page/intro-edit' })}
        />
      </Introduction>
    </Frame>
  );
};

const Frame = styled.div`
  width: 100%;
  color: var(--Gray1_, #333);
  border-bottom: 0.0625rem solid var(--Gray6_disable-btn-bg, #f2f2f2);
`;

const ProfileImg = styled.img`
  width: 4.25rem;
  height: 4.25rem;
  flex-shrink: 0;
`;

const UserName = styled.div`
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  margin-top: 0.75rem;
  margin-bottom: 0.38rem;
`;

const Route = styled.div`
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */
`;
const RouteNum = styled.span`
  font-weight: 700;
  line-height: 1.5rem;
`;

const Introduction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--Gray4_disable-text, #96979b);
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const IntroductionEdit = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export default Profile;
