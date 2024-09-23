import React from 'react';
import { HeaderContainer } from './style';
import { useNavigate } from '@tanstack/react-router';
import backBtn from '@/assets/svg/top_arrow.svg';
import closeBtn from '@/assets/svg/appbar_close.svg';
import menuBtn from '@/assets/svg/menu.svg';

interface HeaderProps {
  back?: boolean;
  current?: string;
  go?: string;
  title?: string;
  close?: boolean;
  menu?: boolean;
  done?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ back, current, go, title, close, menu, done }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate({ from: current, to: go });
  };

  return (
    <HeaderContainer>
      {back && (
        <button className="left" onClick={handleNavigate}>
          <img src={backBtn} alt="뒤로가기" />
        </button>
      )}
      {title}
      {close ? (
        <button className="right" onClick={handleNavigate}>
          <img src={closeBtn} alt="닫기" />
        </button>
      ) : menu ? (
        <button className="right" onClick={handleNavigate}>
          <img src={menuBtn} alt="메뉴" />
        </button>
      ) : done ? (
        <button className="right">완료</button>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
};
