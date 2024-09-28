import FlexBox from '@/components/common/flex-box';
import { ProfileImg } from './profile-img';
import { ProfileInfo } from './info-input';

interface ProfileComponentsProps {
  setFile: (file: File | null) => void;
  handleInputChange: (name: string, value: string) => void;
  profileValue: {
    profileImageUrl: string;
    nickname: string;
    birthDay: string;
    gender: string;
  };
}

export const ProfileComponents: React.FC<ProfileComponentsProps> = ({
  setFile,
  handleInputChange,
  profileValue,
}) => {
  return (
    <FlexBox col gap={2.75}>
      <ProfileImg setFile={setFile} profileImg={profileValue.profileImageUrl} />
      <ProfileInfo
        handleInputChange={handleInputChange}
        nickname={profileValue.nickname}
        birthDay={profileValue.birthDay}
        gender={profileValue.gender}
      />
    </FlexBox>
  );
};
