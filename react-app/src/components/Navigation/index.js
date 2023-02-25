import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../MovieDetails/MovieDetails.css';
import OpenModalButton from "../OpenModalButton";
import LoginForm from "../LoginForm";
import SignupFormModal from "../SignupFormModal"

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const [signUpOpen, setSignUpOpen] = useState(false);

	return (
		<div className='navbar-box'>
			<div className='navbar'>
				<div className='navbar-left-side'>
					<NavLink className='home-link' exact to="/">
						<div>Cheddarboxd</div>
					</NavLink>
				</div>
				{signUpOpen ?
					<LoginForm setSignUpOpen={setSignUpOpen}/>
					:
					<div className='navbar-right-side'>
						<div className='navbar-links' id='navbar-sign-in'>
							<button onClick={() => setSignUpOpen(true)}>
								Sign In
							</button>
						</div>
						<div className='navbar-links' id='navbar-create-account'>
							<OpenModalButton
								buttonText="Create Account"
								// onItemClick={closeMenu}
								modalComponent={<SignupFormModal />}
							/>
						</div>
						<div className='navbar-links' id='navbar-films'>
							<NavLink exact to="/movies">
								<button>Films</button>
							</NavLink>
						</div>
						<div className='navbar-links' id='navbar-lists'>
							<NavLink exact to="/">
								<button>Lists</button>
							</NavLink>
						</div>
					</div>
				}
			</div>
		</div>
	);
}
export default Navigation;
