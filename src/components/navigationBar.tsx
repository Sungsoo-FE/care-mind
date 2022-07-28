import { useState } from "react";
import "./navigationBar.css";
import { useMediaQuery } from "react-responsive";

function NavigationBar() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 581px)",
  });
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const menuList = [
    { name: "News", address: "/news" },
    { name: "About", address: "/about" },
    { name: "Contact", address: "/contact" },
  ];
  return (
    <div className="nav_bar">
      <div className="nav_main">
        <div
          style={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
          }}
        >
          <div style={{ backgroundColor: "green" }}>Logo</div>
          {showMenu ? (
            menuList.map((e) => <div key={e.address}>{e.name}</div>)
          ) : (
            <></>
          )}
        </div>
        <button
          style={{ float: "right", height: 20 }}
          onClick={() => setShowMenu(!showMenu)}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
