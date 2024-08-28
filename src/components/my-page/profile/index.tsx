import FlexBox from '@/components/common/flex-box';
import React from 'react';
import { IntroEdit, ProfileImg } from './style';
import introductionEdit from '../../../assets/svg/introduction_edit.svg';
import { useNavigate } from '@tanstack/react-router';

interface ProfileProps {
  introduction?: string;
  nickname?: string;
  numOfRoutes?: number;
  profileImageUrl?: string;
}

const Profile: React.FC<ProfileProps> = ({
  profileImageUrl,
  nickname,
  numOfRoutes,
  introduction,
}) => {
  const navigate = useNavigate();

  return (
    <FlexBox col>
      <FlexBox col gap={0.75}>
        <ProfileImg src={profileImageUrl} alt="profile img" />
        <FlexBox col gap={0.38}>
          <div className="heading-m">{nickname}</div>
          <FlexBox gap={0.25}>
            <span className="body-r-m">루트</span>
            <span className="body-b-m">{numOfRoutes}개</span>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox gap={0.25} py={1} bb>
        <span className="body-r-m" style={{ color: 'var(--Gray4_disable-text)' }}>
          {introduction}
        </span>
        <IntroEdit onClick={() => navigate({ to: '/my-page/intro-edit' })}>
          <img src={introductionEdit} alt="edit" />
        </IntroEdit>
      </FlexBox>
    </FlexBox>
  );
};

export default Profile;
