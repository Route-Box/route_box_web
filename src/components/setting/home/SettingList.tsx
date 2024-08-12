import React from 'react';
import SettingListItem from './SettingListItem';
import styled from 'styled-components';

const SettingList: React.FC = () => {
  const settingList = [
    { name: '내 정보 수정', path: '/setting/profile' },
    { name: '알림 설정', path: '/setting/notifications' },
    { name: '서비스 약관', path: '/setting/terms' },
    { name: '1:1 문의', path: '/setting/support' },
    { name: '로그아웃' },
  ];

  return (
    <Section>
      {settingList.map((setting, index) => (
        <SettingListItem
          key={index}
          setting={setting.name}
          isLast={index === settingList.length - 1}
          to={setting.path}
        />
      ))}
    </Section>
  );
};

const Section = styled.ul`
  width: 100%;
  /* margin: 0.75rem 1.37rem; */
`;

export default SettingList;
