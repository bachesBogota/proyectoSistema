import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {Nav,
     NavbarContainer,
     NavLogo, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks,
     NavBtn,
     NavBtnLink
       } from './NavbarElements';
       

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false);
  let currentState = localStorage.getItem("authenticated");

  const changeNav = () =>{

    if(window.scrollY >=80){
        setScrollNav(true);
    } else {
        setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, []);

  const toggleHome = () =>{
    scroll.scrollToTop();
  }

  const logOut = () => {
    localStorage.setItem("authenticated", '');
    scroll.scrollToTop();
  }



  return (
    
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                {currentState ? (
                     <NavLogo to="/profile" onClick={toggleHome}>Baches Bogotá</NavLogo>
                ) : (
                    <NavLogo to="/" onClick={toggleHome}>Baches Bogotá</NavLogo>
                )}
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" 
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Contactanos</NavLinks>
                    </NavItem>
                    {currentState ? (
                        null
                    ) : ( 
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Servicios</NavLinks>
                        </NavItem> 
                    )}
                    {currentState ? (
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Mapa</NavLinks>
                        </NavItem>
                    ) : ( null )}
                    {currentState ? (
                        <NavItem>
                            <NavLinks to="report"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Ver Reportes</NavLinks>
                        </NavItem> 
                    ) : ( 
                        null
                    )}
                    

                </NavMenu>
                <NavBtn>
                    {currentState ? (
                        <NavBtnLink to="/" onClick={logOut}>Cerrar Sesión</NavBtnLink>
                    ) : (
                        <NavBtnLink to="/signin">Iniciar Sesión</NavBtnLink>
                    )}
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
</>
    
  )
}

export default Navbar