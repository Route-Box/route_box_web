import React, { useEffect, useState } from 'react';
import profile from '@/assets/svg/profile.svg';
import upload from '@/assets/svg/profile_image_upload.svg';
import { ProfileImgWrapper, UploadBtn } from './style';
import FlexBox from '@/components/common/flex-box';

interface ProfileImgComponentsProps {
  setFile: (file: File | null) => void;
  profileImg: string;
}

export const ProfileImg: React.FC<ProfileImgComponentsProps> = ({ setFile, profileImg }) => {
  const [imgUrl, setImgUrl] = useState(profileImg || profile);

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    if (profileImg) {
      setImgUrl(profileImg);
    }
  }, [profileImg]);

  return (
    <FlexBox justify="center">
      <ProfileImgWrapper src={imgUrl} alt="profile" />
      <UploadBtn onClick={handleClick}>
        <img src={upload} alt="upload" />
      </UploadBtn>
      <input
        id="fileInput"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </FlexBox>
  );
};
