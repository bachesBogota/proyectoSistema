import React from "react";
import { animateScroll as scroll } from 'react-scroll';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  let currentState = localStorage.getItem("authenticated");

  const logOut = () => {
    localStorage.setItem("authenticated", '');
    scroll.scrollToTop();
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {currentState ? (
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              Nosotros
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Contáctanos
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>
              Ver mapa
            </SidebarLink>
            <SidebarLink to="report" onClick={toggle}>
              Ver reportes
            </SidebarLink>
          </SidebarMenu>
        ) : (
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              Nosotros
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Contáctanos
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Servicios
            </SidebarLink>
          </SidebarMenu>
        )}

        <SideBtnWrap>
          {currentState ? (
            <SidebarRoute to="/" onClick={logOut}>Cerrar Sesión</SidebarRoute>
          ) : (
            <SidebarRoute to="/signin">Iniciar Sesión</SidebarRoute>
          )}
          
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
