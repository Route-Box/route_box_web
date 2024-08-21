import FlexBox from '@/components/common/flex-box';
import { ProfileImg } from './profile-img';
import { ProfileInfo } from './info-input';

interface ProfileComponentsProps {
  onActiveChange: (active: boolean) => void;
}

export const ProfileComponents: React.FC<ProfileComponentsProps> = ({ onActiveChange }) => {
  return (
    <FlexBox col gap={2.75}>
      <ProfileImg />
      <ProfileInfo onActiveChange={onActiveChange} />
    </FlexBox>
  );
};
