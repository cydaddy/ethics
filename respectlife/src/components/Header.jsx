import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo-area">
          <span className="icon">🌱</span>
          <h1>생명 존중 실천 사례</h1>
        </div>
        <p className="subtitle">우리 주변의 생명 지킴이들을 소개합니다!</p>
      </div>
    </header>
  );
};

export default Header;
