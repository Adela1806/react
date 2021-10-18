import { useState } from "react";
import SignOut from "../SignOut";
import Rooms from "../Rooms";

import "./style.css";
const NavBar = ({ user, currentRoom, setCurrentRoom }) => {
  const [showListMenu, setShowListMenu] = useState(false);

  return (
    <nav>
      <h1>
        {user ? (
          <>
            Current room: <strong>{currentRoom}</strong>
          </>
        ) : (
          <strong>Chat App</strong>
        )}
      </h1>
      {user ? (
        <>
          <button
            className="menu"
            onClick={() => {
              setShowListMenu(!showListMenu);
            }}
          >
            <img
              src="/images/menu-bars.png"
              alt="menu"
              style={{ opacity: showListMenu ? 0 : 1 }}
            />
            <img
              src="../images/menu-icon.png"
              alt="menu-cross"
              style={{ opacity: showListMenu ? 1 : 0 }}
            />
          </button>
          <ul
            className="list-menu"
            style={{ top: showListMenu && user ? "10vh" : "-100vh" }}
          >
            <li>
              <SignOut setShowListMenu={setShowListMenu} />
            </li>
            <li>
              <Rooms
                currentRoom={currentRoom}
                setCurrentRoom={setCurrentRoom}
                setShowListMenu={setShowListMenu}
              />
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
