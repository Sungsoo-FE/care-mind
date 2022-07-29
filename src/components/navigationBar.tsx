import { useState } from "react";
import "./navigationBar.css";
import { useMediaQuery } from "react-responsive";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

type FontProps = {
  changedFontSize: Number;
};

function NavigationBar({ changedFontSize }: FontProps) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 581px)",
  });

  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [isHover, setIsHover] = useState<Boolean>(false);
  const menuList = [
    { name: "News", address: "/news" },
    { name: "Contact", address: "/contact" },
    { name: "About", address: "/about" },
  ];
  return (
    <NavBar
      changedFontSize={Number(changedFontSize)}
      isDesktop={isDesktop}
      showMenu={showMenu}
    >
      <div className="fa_bars_wrapper" onClick={() => setShowMenu(!showMenu)}>
        <FaBars size={24} className="fa_bars" />
      </div>
      <NavMain>
        <NavMenu isDesktop={isDesktop}>
          <LogoText
            style={{
              backgroundColor: isHover ? "#ddd" : "#04aa6d",
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Logo
          </LogoText>
          <MenuList isDesktop={isDesktop} showMenu={showMenu}>
            {showMenu ? (
              menuList.map((e) => (
                <a
                  className={`${
                    isDesktop ? "menu_element_desktop" : "menu_element_mobile"
                  }`}
                  key={e.name}
                  style={{
                    paddingRight: e.name === "About" ? "14px" : 0,
                    paddingBottom: isDesktop
                      ? 0
                      : e.name === "About"
                      ? "16px"
                      : 0,
                  }}
                >
                  {e.name}
                </a>
              ))
            ) : (
              <></>
            )}
          </MenuList>
        </NavMenu>
      </NavMain>
    </NavBar>
  );
}

const NavBar = styled.div<{
  changedFontSize?: number;
  isDesktop?: Boolean;
  showMenu?: Boolean;
}>`
  font-size: ${(props) =>
    props.changedFontSize ? props.changedFontSize + 18 : 18}px;
  width: 100%;
  height: ${(props) => (props.isDesktop ? 50 : props.showMenu ? 200 : 50)}px;
  color: white;
  font-weight: 700;
`;

const NavMain = styled.div<{ isDesktop?: Boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: ${(props) => (props.isDesktop ? "#04aa6d" : "#333")};
`;

const NavMenu = styled.div<{ isDesktop?: Boolean }>`
  height: 50px;
  width: 100%;
  align-items: center;
  display: ${(props) => (props.isDesktop ? "flex" : "table-column")};
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
`;

const LogoText = styled.div<{ isHover?: Boolean }>`
  display: flex;
  padding-right: 16px;
  padding-left: 14px;
  align-items: center;
  height: 50px;
  background-color: ${(props) => (props.isHover ? "#ddd" : "#04aa6d")};
`;

const MenuList = styled.div<{
  isDesktop?: Boolean;
  showMenu?: Boolean;
}>`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  background-color: ${(props) =>
    props.isDesktop ? "#333" : props.showMenu ? "#333" : "white"};
`;

export default NavigationBar;
