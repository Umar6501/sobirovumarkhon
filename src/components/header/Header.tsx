import { useState } from "react";
import "./Header.scss";
import "./Header1.scss";

const Header = () => {
  const [menu, setMenu] = useState(false);
  //
  const [cursorX, setCursorX] = useState<number | undefined>();
  const [cursorY, setCursorY] = useState<number | undefined>();

  //
  const changeMenu = () => {
    if (window.scrollY >= 2) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  window.addEventListener("scroll", changeMenu);
  //
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <p>©</p>
            <h1 className="anm-logo">Code by Umarkhon Sobirov Umarkhon</h1>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="navbar">
            <p>Projects</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className={menu ? "menu" : ""}>
            <div className="submenu">
              <div
                className="line"
                style={{
                  left: cursorX + "px",
                  top: cursorY + "px",
                }}
              >
                <span className="line1"></span>
                <span className="line1"></span>
                <div className="linebg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
