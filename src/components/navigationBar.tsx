import { useState } from "react";
import "./navigationBar.css";
import { useMediaQuery } from "react-responsive";
import { FaBars } from "react-icons/fa";

function NavigationBar() {
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
    <div className="nav_bar">
      <div
        className="nav_main"
        style={{ backgroundColor: isDesktop ? "#333" : "#04aa6d" }}
      >
        <div
          className="nav_menu"
          style={{
            display: isDesktop ? "flex" : "table-column",
            flexDirection: isDesktop ? "row" : "column",
          }}
        >
          <div
            className="logo_style"
            style={{
              backgroundColor: isHover ? "#ddd" : "#04aa6d",
            }}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Logo
          </div>
          <div
            className="menu_list"
            style={{
              flexDirection: isDesktop ? "row" : "column",
              backgroundColor: isDesktop ? "#333" : showMenu ? "#333" : "white",
            }}
          >
            {showMenu ? (
              menuList.map((e) => (
                <a
                  className={`${
                    isDesktop ? "menu_element_desktop" : "menu_element_mobile"
                  }`}
                  key={e.name}
                  style={{
                    paddingRight: e.name == "About" ? "14px" : 0,
                    paddingBottom: isDesktop
                      ? 0
                      : e.name == "About"
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
          </div>
        </div>
        <div className="fa_bars_wrapper" onClick={() => setShowMenu(!showMenu)}>
          <FaBars size={24} className="fa_bars" />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
