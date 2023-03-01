import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
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
  // const closeMenu = () => setShowMenu(false);

  return (
    // <div className="profile-dropdown">
      <div className="navbar-links" id="profile-links">
        <button onClick={openMenu}>
          <i className="fas fa-user-circle" />
          {user.username}
        </button>
        {showMenu && (
        <div className="dropdown-menu">
          <div className={ulClassName} ref={ulRef}>
            {/* {user ? ( */}
              <div className="dropdown-links">
                <div>{user.username}</div>
                <div>{user.email}</div>
                <div>
                  <button onClick={handleLogout}>Log Out</button>
                </div>
              </div>
            {/* ) : (
              <>
                <OpenModalButton
                  buttonText="Log In"
                  onItemClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />

                <OpenModalButton
                  buttonText="Sign Up"
                  onItemClick={closeMenu}
                  modalComponent={<SignupFormModal />}
                />
              </>
            )} */}
          </div>
        </div>
        )}
      </div>
    // </div>
  );
}

export default ProfileButton;
