import React, { useEffect, useState } from 'react';
import { Nickname } from './nickname';
import { Birth } from './birth';
import { Gender } from './gender';
import FlexBox from '@/components/common/flex-box';

interface ProfileInfoProps {
  handleInputChange: (name: string, value: string) => void;
  nickname: string;
  birthDay: string;
  gender: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  handleInputChange,
  nickname,
  birthDay,
  gender,
}) => {
  return (
    <FlexBox col gap={2}>
      <Nickname
        nickname={nickname}
        handleInputChange={(_, value) => handleInputChange('nickname', value)}
      />
      <Birth
        birthDay={birthDay}
        handleInputChange={(_, value) => handleInputChange('birthDay', value)}
      />
      <Gender
        gender={gender}
        handleInputChange={(_, value) => handleInputChange('gender', value)}
      />
    </FlexBox>
  );
};
