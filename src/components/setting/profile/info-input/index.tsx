import React, { useEffect, useState } from 'react';
import { Nickname } from './nickname';
import { Birth } from './birth';
import { Gender } from './gender';
import FlexBox from '@/components/common/flex-box';

interface ProfileInfoProps {
  onActiveChange: (isActive: boolean) => void;
  handleInputChange: (name: string, value: string) => void;
  nickname: string;
  birthDay: string;
  gender: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  onActiveChange,
  handleInputChange,
  nickname,
  birthDay,
  gender,
}) => {
  // const [nickname, setNickname] = useState('');
  // const [birth, setBirth] = useState('');
  // const [sex, setSex] = useState('');
  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   if (nickname && birth && sex) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }, [nickname, birth, sex]);

  // useEffect(() => {
  //   onActiveChange(isActive);
  // }, [isActive, onActiveChange]);

  return (
    <FlexBox col gap={2}>
      <Nickname
        nickname={nickname}
        handleInputChange={(value) => handleInputChange('nickname', value)}
      />
      <Birth
        birthDay={birthDay}
        handleInputChange={(value) => handleInputChange('birthDay', value)}
      />
      <Gender gender={gender} handleInputChange={(value) => handleInputChange('gender', value)} />
    </FlexBox>
  );
};
