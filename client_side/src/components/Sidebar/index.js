import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = () => {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='discover'>Discover</SidebarLink>
          <SidebarLink to='services'>Our Plans</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/login'>Log In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
