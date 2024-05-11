import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

import logo from "../../images/logo-icon.jpeg";
import { FaPhone } from "react-icons/fa";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLink = tw.p`
  text-lg my-2  lg:mx-6 lg:my-0 flex gap-2 items-center
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0  text-2xl! ml-0!`};

  img {
    ${tw`w-16 mr-3`}
  }
`;

export const NavLinks = tw.div`hidden md:inline-block`;

const links = [
    <NavLinks key={1} >
      {/* <NavLink href="/#">About</NavLink>
      <NavLink href="/#">Blog</NavLink>
      <NavLink href="/#">Pricing</NavLink>
      <NavLink href="/#">Contact Us</NavLink> */}
      <NavLink href="/#" tw="lg:ml-12! hidden md:flex flex-row">
        <FaPhone />
        <span>+254700000000</span>
      </NavLink>
      {/* <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/#">Sign Up</PrimaryLink> */}
    </NavLinks>
  ];

const collapseBreakpointCss = {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  }

export const DesktopNavLinks = tw.nav`
  flex flex-1 justify-between items-center
`;

export default () =>{
    return(
        <Header className={ "header-light"}>
            <DesktopNavLinks css={collapseBreakpointCss}>
            <LogoLink href="/">
                <img src={logo} alt="logo" />
                <p className="flex flex-col inline-block">
                  <span>Summer Grains Ltd </span>
                  <p style={{fontSize: "1rem"}}>smile on your table...</p>
                </p> 
                
            </LogoLink>
                {links}
            </DesktopNavLinks>
        </Header>
    )
};

