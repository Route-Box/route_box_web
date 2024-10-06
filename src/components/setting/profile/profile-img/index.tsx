import React, { useEffect, useState } from 'react';
import profile from '@/assets/svg/profile.svg';
import upload from '@/assets/svg/profile_image_upload.svg';
import { ProfileImgWrapper, UploadBtn } from './style';
import FlexBox from '@/components/common/flex-box';

interface ProfileImgComponentsProps {
  profileImg: string;
  handleInputChange: (name: string, value: string) => void;
}

export const ProfileImg: React.FC<ProfileImgComponentsProps> = ({
  profileImg,
  handleInputChange,
}) => {
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
      setImgUrl(URL.createObjectURL(selectedFile)); // 미리보기 업데이트

      // 프로필 이미지 파일을 profileValue 상태에 반영
      handleInputChange('profileImage', URL.createObjectURL(selectedFile)); // 여기서는 실제 파일을 저장
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
