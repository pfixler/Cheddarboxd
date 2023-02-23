import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
// import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginForm({setSignUpOpen}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(credential, password));
    if (data) {
      setErrors(data);
    } else {
        // closeModal()
    }
  };

  return (
    <div className="sign-in-form-box">
      <form className='sign-in-form' onSubmit={handleSubmit}>
        <div className="close-sign-in-form">
          <button className='close-sign-in-button'onClick={() => setSignUpOpen(false)}>
            X
          </button>
        </div>
        <div className='sign-in-form-field' id="sign-in-credential">
          <label>
              Username or Email
          </label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div className='sign-in-form-field' id='sign-in-password'>
          <label>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
          <div className="submit-sign-in-form">
            <button className="submit-sign-in-button" type="submit">
              <div>Sign In</div>
            </button>
          </div>
      </form>
    </div>
  );
}

export default LoginForm;
