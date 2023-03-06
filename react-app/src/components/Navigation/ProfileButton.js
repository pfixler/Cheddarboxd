import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { NavLink } from "react-router-dom";
import './Navigation.css'
// import OpenModalButton from "../OpenModalButton";
// import LoginForm from "../LoginForm";
// import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown-list" + (showMenu ? "" : " hidden");
  // const profileIdName = "profile-dropdown-list" + (showMenu ? " hidden" : "");
  // const closeMenu = () => setShowMenu(false);

  return (
    <>
      {showMenu ?
          <div className="dropdown-menu">
            <div className={ulClassName} ref={ulRef}>
              <div className="navbar-links">
                <button onClick={openMenu}>
                  <i className="fas fa-user-circle fa-2x" id="navbar-profile-icon"/>
                  {user.username}
                </button>
              </div>
              <div className="dropdown-links">
                <div className="dropdown-home-link">
                  <NavLink exact to={'/'}>
                    Home
                  </NavLink>
                </div>
                <div className="dropdown-profile-link">
                  <NavLink to={'/:userId'}>
                    Profile
                  </NavLink>
                </div>
                <div>
                  <button onClick={handleLogout}>Log Out</button>
                </div>
              </div>
            </div>
          </div>
      :
        <div className="navbar-links">
          <button onClick={openMenu}>
            <i className="fas fa-user-circle fa-2x" id="navbar-profile-icon"/>
            {user.username}
          </button>
        </div>
      }
    </>
  );
}

export default ProfileButton;
