import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import ContextGlobal from "../contextGlobal/contextGlobal";
import { IoIosArrowUp } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa6";

const slideDown = keyframes`
  from {
    transform: scaleY(0);
    transform-origin: top;
  }
  to {

    transform: scaleY(1);
    transform-origin: top;
  }
`;

const slideUp = keyframes`
  0% {
      transform: scaleY(1);
      transform-origin: top;
      display: flex;
    }
    80% {
      display: flex;
    }
    90% {
      transform: scaleY(0);
      transform-origin: top;
      display: none;
    }
`;

const StyledNavbar = styled.nav`
  background-color: #e0f2f1;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  font-weight: 600;
  position: fixed;
  top: 0;
  z-index: 9999;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 1200px) {
    padding-left: 13rem;
    padding-right: 13rem;
  }

  @media (min-width: 1900px) {
    padding-left: 25rem;
    padding-right: 25rem;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    top: 60px;
    width: 100%;
    text-align: center;
    justify-content: center;
    right: 1rem;
    position: absolute;
    background-color: #e0f2f1;
    overflow: hidden;
    height: 150px;
    -webkit-box-shadow: 0px 14px 16px -12px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 14px 16px -12px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 14px 16px -12px rgba(0, 0, 0, 0.1);
    animation: ${(props) => (props.open ? slideDown : slideUp)} 0.2s ease;
  }
`;

const Styledli = styled.li`
  list-style: none;
  @media (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

const StyledDivIcon = styled.div`
  color: #222831;
  margin-top: 4px;
  transition: 300ms;
  margin-right: 1.8rem;
  &:hover {
    color: #80cbc4;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledTagAName = styled.a`
  font-size: 20px;
  color: #222831;
  text-decoration: none;
  text-align: center;
  font-weight: 700;

  cursor: pointer;
  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 18px;
  }
`;

const StyledTagA = styled.a`
  cursor: pointer;
  font-size: 13px;
  color: #222831;
  text-decoration: none;
  letter-spacing: 0.5px;
  padding-left: 2rem;
  font-weight: 600;
  transition: 300ms;
  &:hover {
    font-size: 13.4px;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    font-weight: 500;
    font-size: 13px;
  }
`;

const StyledliContato = styled.li`
  list-style: none;
  display: none;
  @media (max-width: 768px) {
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
  }
`;

const StyledTagAContato = styled.a`
  cursor: pointer;
  transition: 300ms;
  @media (max-width: 768px) {
    text-decoration: none;
    color: #222831;
    text-decoration: none;
    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 400;
    transition: 300ms;
    border: 2px solid #222831;
    border-radius: 13px;
    padding: 5px 15px 5px 15px;
    display: flex;
    transition: 200ms;
    &:hover {
      box-shadow: 0 4px 8px rgba(94, 203, 233, 0.2);
      background-color: #222831;
      color: #e0f2f1;
    }
  }
`;

const StyledSpanName = styled.span`
  color: #408d86;
`;

const StyledDivSubirTopo = styled.div`
  width: 45px;
  height: 45px;
  opacity: 0.4;
  border-radius: 50px;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  opacity: 1;
  background-color: #26a69a;
  display: none;
  z-index: 999;
  &.flexible {
    display: flex;
  }
  justify-content: center;
  align-items: center;
  transition: 400ms;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    right: 5rem;
  }

  @media (min-width: 1200px) {
    right: 13rem;
  }

  @media (min-width: 1900px) {
    right: 25rem;
  }
`;

const StyledTagATopo = styled.a`
  color: #e0f2f1;
  background-color: #26a69a;
  padding-top: 6px;
  opacity: 1;
  margin-left: 1px;
`;

const StyledDivContato = styled.div`
  margin-right: 26rem;
  cursor: pointer;
  @media (max-width: 1200px) and (min-width: 768px) {
    margin-right: 10rem;
  }

  @media (min-width: 1900px) {
    margin-right: 50rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledTagPContact = styled.p`
  font-size: 12px;
  color: #222831;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-weight: 400;
  transition: 300ms;
  border: 2px solid #222831;
  border-radius: 13px;
  padding: 5px 15px 5px 15px;
  display: flex;
  transition: 200ms;

  &:hover {
    box-shadow: 0 4px 8px rgba(94, 203, 233, 0.2);
    background-color: #222831;
    color: #e0f2f1;
  }
`;

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { aboutRef, skillsRef } = useContext(ContextGlobal);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      let marginTop = 0;
      if (window.innerWidth <= 768) {
        marginTop = -6 * 16;
      } else {
        marginTop = -85; // ajuste o valor conforme necessário
      }
      const top = sectionRef.current.offsetTop + marginTop;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para uma rolagem suave, se desejar
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <StyledNavbar>
        <div>
          <StyledTagAName onClick={() => handleScrollToTop()}>
            Gabriel
            <StyledSpanName> Sanini</StyledSpanName>
          </StyledTagAName>
          {/* <img src={logo} alt='imgperfil' width={160}></img> */}
        </div>
        <StyledDivIcon onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoCloseOutline fontSize={25} cursor='pointer' />
          ) : (
            <IoIosMenu fontSize={25} cursor='pointer' />
          )}
        </StyledDivIcon>
        <StyledMenu open={isMenuOpen}>
          <Styledli onClick={() => handleScrollToTop()}>
            <StyledTagA>Home</StyledTagA>
          </Styledli>
          <Styledli onClick={() => scrollToSection(aboutRef)}>
            <StyledTagA>About</StyledTagA>
          </Styledli>
          <Styledli onClick={() => scrollToSection(skillsRef)}>
            <StyledTagA>Skills</StyledTagA>
          </Styledli>
          <StyledliContato onClick={() => scrollToSection(3)}>
            <StyledTagAContato>Contact Me</StyledTagAContato>
          </StyledliContato>
        </StyledMenu>
        <StyledDivContato>
          <StyledTagPContact>
            Contact Me
            <span style={{ marginLeft: "10px", marginTop: "1.5px" }}>
              <FaArrowRight fontSize={15} />
            </span>
          </StyledTagPContact>
        </StyledDivContato>
      </StyledNavbar>
      <StyledDivSubirTopo
        onClick={() => handleScrollToTop()}
        className={isScrolledDown ? "flexible" : ""}
      >
        <StyledTagATopo>
          <IoIosArrowUp fontSize={20} />
        </StyledTagATopo>
      </StyledDivSubirTopo>
    </>
  );
}

export default NavBar;
