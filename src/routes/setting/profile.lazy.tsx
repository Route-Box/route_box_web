import { Header } from '@/components/common/header/index';
import CustomBtn from '@/components/common/custom-btn/index';
import { ProfileComponents } from '@/components/setting/profile';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKey, userInfo } from '@/api/my-page/userInfo';
import FlexBox from '@/components/common/flex-box';

export const Route = createLazyFileRoute('/setting/profile')({
  component: Profile,
});

function Profile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [disabled, setDisabled] = useState(false);

  const [originalProfileValue, setOriginalProfileValue] = useState({
    profileImageUrl: '',
    nickname: '',
    birthDay: '',
    gender: '',
  });

  const [profileValue, setProfileValue] = useState({
    profileImageUrl: '',
    nickname: '',
    birthDay: '',
    gender: '',
  });

  const [file, setFile] = useState<File | null>(null); // 파일 상태 추가

  const { data } = useQuery({
    queryKey: [queryKey.userProfile],
    queryFn: userInfo.getMyProfile,
  });

  const { mutateAsync } = useMutation({
    mutationFn: userInfo.patchMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.userProfile] });
    },
  });

  const handleInputChange = (name: string, value: string) => {
    console.log('Updating state with:', { name, value });
    setProfileValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isProfileChanged = () => {
    const changedFields: Partial<typeof profileValue> = {};

    if (profileValue.nickname !== originalProfileValue.nickname) {
      changedFields.nickname = profileValue.nickname;
    }

    if (profileValue.gender !== originalProfileValue.gender) {
      changedFields.gender = profileValue.gender;
    }

    if (profileValue.birthDay !== originalProfileValue.birthDay) {
      changedFields.birthDay = profileValue.birthDay;
    }

    // 파일이 새로 업로드된 경우
    if (file !== null) {
      changedFields.profileImageUrl = file.name; // or file.path, depending on your use case
    }

    // 변경된 필드가 있다면 그 필드들을 반환
    return Object.keys(changedFields).length > 0 ? changedFields : null;
  };

  const handleClick = () => {
    const changedFields = isProfileChanged();

    // 변경된 필드가 있을 경우에만 전송
    if (changedFields) {
      // 변경된 값만 서버로 전송
      mutateAsync(changedFields).then(() => {
        navigate({ from: '/setting/profile', to: '/my-page' });
      });
    } else {
      navigate({ from: '/setting/profile', to: '/my-page' });
    }
  };

  // const getChangedFields = () => {
  //   const changedFields: Partial<typeof profileValue> = {};

  //   if (profileValue.nickname !== originalProfileValue.nickname) {
  //     changedFields.nickname = profileValue.nickname;
  //   }
  //   if (profileValue.gender !== originalProfileValue.gender) {
  //     changedFields.gender = profileValue.gender;
  //   }
  //   if (profileValue.birthDay !== originalProfileValue.birthDay) {
  //     changedFields.birthDay = profileValue.birthDay;
  //   }
  //   if (file) {
  //     changedFields.profileImageUrl = profileValue.profileImageUrl;
  //   }

  //   return changedFields;
  // };

  // const handleClick = () => {
  //   const changedFields = getChangedFields();

  //   if (Object.keys(changedFields).length > 0) {
  //     mutateAsync(changedFields).then(() => {
  //       navigate({ from: '/setting/profile', to: '/my-page' });
  //     });
  //   } else {
  //     navigate({ from: '/setting/profile', to: '/my-page' });
  //   }
  // };

  useEffect(() => {
    if (data) {
      setOriginalProfileValue({
        profileImageUrl: data.profileImageUrl || '',
        nickname: data.nickname || '',
        birthDay: data.birthDay || '',
        gender: data.gender || '',
      });

      setProfileValue({
        profileImageUrl: data?.profileImageUrl || '',
        nickname: data?.nickname || '',
        birthDay: data?.birthDay || '',
        gender: data?.gender || '',
      });
    }
  }, [data]);

  useEffect(() => {
    if (profileValue) {
      setDisabled(false);
    }
  }, [profileValue]);
  console.log('profileValue:', profileValue);

  return (
    <DefaultLayout>
      <Header back go={'/setting'} title="회원 정보 수정" />
      <FlexBox col justify="space-between" h="calc(100dvh - 4rem)" px={1.37} py={1.25}>
        <ProfileComponents
          setFile={setFile}
          handleInputChange={handleInputChange}
          profileValue={profileValue}
        />
        <CustomBtn disabled={disabled} text="저장하기" onClick={handleClick} />
      </FlexBox>
    </DefaultLayout>
  );
}
