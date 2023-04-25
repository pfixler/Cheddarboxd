import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './ProfilePage.css';
import { loadProfileDetails } from '../../store/profile';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { profileId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile.profile);


    const [sameUser, setSameUser] = useState(false);
    const [profileLoaded, setProfileLoaded] = useState(false);


    useEffect(() => {

        dispatch(loadProfileDetails(profileId))
            .then(() => setProfileLoaded(true))

    }, [dispatch])

    useEffect(() => {

            if (sessionUser.id == profile.id) {
                setSameUser(true)
            }
    }, [profile])

    console.log(profile)

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
                            <div className="edit-profile-button">
                                <button>Edit Profile</button>
                            </div>
                            :
                            <div className="follow-button">
                                <button>Follow</button>
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
                                    {profile.following.length}
                                </div>
                                <div className="profile-stat-word">
                                    following
                                </div>
                            </div>
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profile.followers.length}
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
                        <p className='favorite-films-content'>
                            Don't forget to select your favorite films!
                        </p>
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

                </div>
            </div>
            )}
        </div>
    )
}

export default ProfilePage
