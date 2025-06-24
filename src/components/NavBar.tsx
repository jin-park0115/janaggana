import styled from "styled-components";

import { FaBookOpen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <NavWrap>
      <LinkStyle to="/learning">
        <FaBookOpen />
        <span>학습하기</span>
      </LinkStyle>
      <LinkStyle to="/">
        <FaHome />
        <span>홈</span>
      </LinkStyle>
      <LinkStyle to="/activity">
        <FaFolderOpen />
        <span>활동</span>
      </LinkStyle>
      <LinkStyle to="/system">
        <IoSettings />
        <span>설정</span>
      </LinkStyle>
    </NavWrap>
  );
}

const NavWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.06);
  @media (max-width: 650px) {
    font-size: 0.9rem;
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

const LinkStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  @media (max-width: 650px) {
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
