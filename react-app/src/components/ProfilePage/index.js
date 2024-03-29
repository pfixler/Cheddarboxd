import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './ProfilePage.css';
import { loadProfileDetails } from '../../store/profile';
import { unfollowProfile, followProfile } from '../../store/session';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { profileId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile.profile);


    const [sameUser, setSameUser] = useState(false);
    const [profileLoaded, setProfileLoaded] = useState(false);
    const [userFollowing, setUserFollowing] = useState(false);


    useEffect(() => {

        dispatch(loadProfileDetails(profileId))
            .then(() => setProfileLoaded(true))

    }, [dispatch])

    useEffect(() => {

            if (sessionUser.id == profile.id) {
                setSameUser(true)
            }
            if (sessionUser.following[profile.id]) {
                setUserFollowing(true)
            }
    }, [dispatch, profile])


    const followProfileFunction = (profile) => {
        // e.preventDefault();
        dispatch(followProfile(profile));
        setUserFollowing(!userFollowing);
    }

    const unfollowProfileFunction = (profile) => {
        // e.preventDefault();
        dispatch(unfollowProfile(profile));
        setUserFollowing(!userFollowing);
    }



    return (
        <div className="profile-page-box">
            <div className="profile-page-header">
                <div className="profile-information">
                    <div className="profile-header-left">
                        <div className="profile-image">
                            <i className="fas fa-user-circle fa-7x" id="profile-page-profile-icon"/>
                        </div>
                        {profileLoaded && (
                        <div className='profile-image-labels'>
                            <h1 className='profile-username'>
                                {profile.username}
                            </h1>
                            {sameUser ?
                                <div className='buttons-box'>
                                    <NavLink to="/settings" className="grey-button">
                                        <span>Edit Profile</span>
                                    </NavLink>
                                </div>
                                :
                                <div className="buttons-box">
                                    {userFollowing ?
                                        <button className="green-button" onClick={() => unfollowProfileFunction(profile)}>
                                            <span>Following</span>
                                        </button>
                                        :
                                        <button className="grey-button" onClick={() => followProfileFunction(profile)}>
                                            <span>Follow</span>
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                        )}
                    </div>
                    {profileLoaded && (
                    <div className="profile-header-right">
                        <div className="profile-statistics">
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profile.reviews.length}
                                </div>
                                <div className="profile-stat-word">
                                    reviews
                                </div>
                            </div>
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profile.lists.length}
                                </div>
                                <div className="profile-stat-word">
                                    lists
                                </div>
                            </div>
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profile.following.length || 0}
                                </div>
                                <div className="profile-stat-word">
                                    following
                                </div>
                            </div>
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profile.followers.length || 0}
                                </div>
                                <div className="profile-stat-word">
                                    followers
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                {/* same as app.js? */}
                <nav className="profile-navbar">
                    <ul className="profile-navbar-list">
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Profile</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Activity</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Films</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Diary</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Reviews</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Watchlist</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Lists</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Likes</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Tags</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Network</NavLink>
                        </li>
                        <li className='navitem'>
                            <NavLink exact to="/" className="profile-navbar-list-item">Invitations</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            {profileLoaded && (
            <div className="profile-page-body">
                <div className='left-side'>
                    <div className="profile-body-section">
                        <h2 className='profile-body-header'>
                            Favorite Films
                        </h2>
                        {/* conditional here- has the user selected at least one favorite film */}
                        <p className='favorite-films-content'>
                            Don't forget to select your favorite films!
                        </p>
                        <ul className='favorite-films-poster-list'>
                            <li className='favorite-films-poster-list-placeholder'>

                            </li>
                            <li className='favorite-films-poster-list-placeholder'>

                            </li>
                            <li className='favorite-films-poster-list-placeholder'>

                            </li>
                            <li className='favorite-films-poster-list-placeholder'>

                            </li>
                        </ul>
                    </div>
                    <div className="profile-body-section">
                        <h2 className='profile-body-header'>
                            Recent Activity
                        </h2>
                    </div>
                    <div className='profile-body-section'>
                        <h2 className='profile-body-header'>
                            Recent Reviews
                        </h2>
                    </div>
                    <div className="profile-body-section">
                        <h2 className='profile-body-header'>
                            Following
                        </h2>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='profile-body-section'>
                        <h2 className='profile-body-header'>
                            Watchlist
                        </h2>
                    </div>
                    <div className='profile-body-section'>
                        <h2 className='profile-body-header'>
                            Diary
                        </h2>
                    </div>
                    <div className='profile-body-section'>
                        <h2 className='profile-body-header'>
                            Ratings
                        </h2>
                    </div>
                    <div className='profile-body-section'>
                        <h2 className='profile-body-header'>
                            Recent Lists
                        </h2>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ProfilePage
