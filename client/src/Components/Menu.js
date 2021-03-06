import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useViewport } from '../Hooks';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Menu = ({ open, setOpen }) => {
  const { width } = useViewport();
  let breakpoint = 780;

  if (width >= breakpoint) {
    setOpen(false);
  }

  const closeClick = () => {
    setOpen(false);
  };
  return (
    <Aside open={open}>
      <Content>
        <Nav to='/about' onClick={closeClick}>
          About
        </Nav>
        <Nav to='/cv' onClick={closeClick}>
          C.V.
        </Nav>
        <Nav to='/projects' onClick={closeClick}>
          Projects
        </Nav>
        <Nav to='/contact' onClick={closeClick}>
          Contact
        </Nav>
        <SocialWrap>
          <StyledAiFillInstagram
            onClick={() =>
              window.open(
                'https://www.instagram.com/helloandrewpaul/',
                '_blank',
                'noopener noreferrer'
              )
            }
            size={20}
          />
          <StyledAiFillLinkedin
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/helloandrewpaul/',
                '_blank',
                'noopener noreferrer'
              )
            }
            size={20}
          />
          <StyledAiFillGithub
            onClick={() =>
              window.open(
                'https://github.com/helloandrewpaul',
                '_blank',
                'noopener noreferrer'
              )
            }
            size={20}
          />
        </SocialWrap>
      </Content>
    </Aside>
  );
};
const StyledAiFillInstagram = styled(AiFillInstagram)`
  margin-right: 0.625rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #666;
    cursor: pointer;
  }
`;

const StyledAiFillLinkedin = styled(AiFillLinkedin)`
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #666;
    cursor: pointer;
  }
`;

const StyledAiFillGithub = styled(AiFillGithub)`
  margin-left: 0.625rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #666;
    cursor: pointer;
  }
`;

const SocialWrap = styled.article`
  margin-top: 0.625rem;
`;

const Nav = styled(NavLink)`
  font-size: 1.25rem;
  padding-bottom: 0.313rem;
  margin: 0.625rem;
  ::after {
    content: '';
    position: absolute;
    inset: auto auto 0 0;
    width: 100%;
    height: 2px;
    background: #666;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Content = styled.nav`
  margin-top: 10.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Aside = styled.aside`
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 3;
  margin-top: -4.375rem;
  transition: all 0.8s ease-in-out;
  opacity: ${({ open }) => (open ? '1' : '0')};
  right: ${({ open }) => (open ? '0' : '-100%')};
  top: ${({ open }) => (open ? '0' : '-100%')};
`;

export default Menu;
