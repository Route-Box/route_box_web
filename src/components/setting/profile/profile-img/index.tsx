import React from 'react';
import FlexBox from '@/components/common/flex-box';
import profile from '@/assets/svg/profile.svg';
import upload from '@/assets/svg/profile_image_upload.svg';
import { UploadBtn } from './style';

export const ProfileImg: React.FC = () => {
  return (
    <FlexBox justify="center">
      <img src={profile} alt="profile" />
      <UploadBtn>
        <img src={upload} alt="upload" />
      </UploadBtn>
    </FlexBox>
  );
};
