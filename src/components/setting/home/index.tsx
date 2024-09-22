import React from 'react';
import SettingListItem from './SettingListItem';

interface SettingListProps {
  openLogoutModal: () => void;
}

const SettingList: React.FC<SettingListProps> = ({ openLogoutModal }) => {
  const settingList = [
    { name: '내 정보 수정', path: '/setting/profile' },
    { name: '알림 설정', path: '/setting/notifications' },
    { name: '서비스 약관', path: '/setting/terms' },
    // { name: '1:1 문의', path: '/setting/support' },
    { name: '로그아웃' },
  ];

  const handleItemClick = (name: string) => {
    if (name === '로그아웃') {
      openLogoutModal(); // 로그아웃 클릭 시 모달 오픈
    }
  };

  return (
    <>
      {settingList.map((setting, index) => (
        <SettingListItem
          key={index}
          setting={setting.name}
          isLast={index === settingList.length - 1}
          to={setting.path}
          onClick={() => handleItemClick(setting.name)}
        />
      ))}
    </>
  );
};

export default SettingList;
