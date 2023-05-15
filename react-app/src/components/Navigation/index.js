import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../MovieDetails/MovieDetails.css';
import OpenModalButton from "../OpenModalButton";
import LoginForm from "../LoginForm";
import SignupFormModal from "../SignupFormModal"
import { loadProfileDetails } from '../../store/profile';

function Navigation({ isLoaded }){
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const [signUpOpen, setSignUpOpen] = useState(false);

	const sessionUserProfileClick = async (e) => {
		// e.preventDefault();
		await dispatch(loadProfileDetails(sessionUser.id))
	}

	return (
		<div className='navbar-box solid transparent'>
			<div className='navbar'>
				<div className='navbar-left-side'>
					<NavLink className='home-link' exact to="/">
						<div>Cheddarboxd</div>
					</NavLink>
				</div>
				{signUpOpen ?
					<div className='navbar-login-form'>
						<LoginForm setSignUpOpen={setSignUpOpen}/>
					</div>
					:
					<div className='navbar-right-side'>
						{isLoaded && sessionUser ?
							<ProfileButton user={sessionUser} />
						:
						<div className='login-signup-buttons'>
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
						</div>
						}
						<ul className='navbar-links'>
							
						</ul>
						<div className='navbar-links' id='navbar-films'>
							<NavLink exact to="/movies">
								<button>Films</button>
							</NavLink>
						</div>
						<div className='navbar-links' id='navbar-lists'>
							<NavLink exact to="/lists">
								<button>Lists</button>
							</NavLink>
						</div>
						{sessionUser && (
							<div className='navbar-links' id='navbar-profile'>
								<NavLink exact to={`/profiles/${sessionUser.id}`}>
									<button>
										Profile
									</button>
								</NavLink>
							</div>
						)}
					</div>
				}
			</div>
		</div>
	);
}
export default Navigation;
