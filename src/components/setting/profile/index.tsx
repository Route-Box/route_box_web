import FlexBox from '@/components/common/flex-box';
import { ProfileImg } from './profile-img';
import { ProfileInfo } from './info-input';

interface ProfileComponentsProps {
  handleInputChange: (name: string, value: string) => void;
  profileValue: {
    profileImageUrl: string;
    nickname: string;
    birthDay: string;
    gender: string;
  };
}

export const ProfileComponents: React.FC<ProfileComponentsProps> = ({
  handleInputChange,
  profileValue,
}) => {
  return (
    <FlexBox col gap={2.75}>
      <ProfileImg profileImg={profileValue.profileImageUrl} handleInputChange={handleInputChange} />
      <ProfileInfo
        handleInputChange={handleInputChange}
        nickname={profileValue.nickname}
        birthDay={profileValue.birthDay}
        gender={profileValue.gender}
      />
    </FlexBox>
  );
};
