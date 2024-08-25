import FlexBox from '@/components/common/flex-box';
import React from 'react';
import { IntroEdit, ProfileImg } from './style';
import profile from '../../../assets/svg/profile.svg';
import introductionEdit from '../../../assets/svg/introduction_edit.svg';
import { useNavigate } from '@tanstack/react-router';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const userName = '고작가';
  const rootNum = 5;
  const introduction = '안녕하세요. 고작가입니다. 책을 읽고 쓰는 것을 좋아합니다.';

  return (
    <FlexBox col>
      <FlexBox col gap={0.75}>
        <ProfileImg src={profile} alt="profile img" />
        <FlexBox col gap={0.38}>
          <div className="heading-m">{userName}</div>
          <FlexBox gap={0.25}>
            <span className="body-r-m">루트</span>
            <span className="body-b-m">{rootNum}개</span>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox gap={0.25} py={1} bb>
        <span className="body-r-m"> {introduction}</span>
        <IntroEdit onClick={() => navigate({ to: '/my-page/intro-edit' })}>
          <img src={introductionEdit} alt="edit" />
        </IntroEdit>
      </FlexBox>
    </FlexBox>
  );
};

export default Profile;
