import { useParams } from 'react-router-dom';
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
    const [profileLoaded, setProfileLoaded] = useState(false)

    useEffect(() => {

        dispatch(loadProfileDetails(profileId))


    }, [dispatch])

    useEffect(() => {
        setProfileLoaded(true)

        if (sessionUser && profile) {
            if (sessionUser.id == profile.id) {
                setSameUser(true)
            }
        }
    }, [profile])



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
                            <div className='profile-username'>
                                {profile.username}
                            </div>
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
                <div className="profile-navbar">
                    <div className="profile-navbar-profile-link">

                    </div>
                    <div className="profile-navbar-activity-link">

                    </div>
                    <div className="profile-navbar-films-link">

                    </div>
                    <div className="profile-navbar-diary-link">

                    </div>
                    <div className="profile-navbar-reviews-link">

                    </div>
                    <div className="profile-navbar-watchlist-link">

                    </div>
                    <div className="profile-navbar-lists-link">

                    </div>
                    <div className="profile-navbar-likes-link">

                    </div>
                    <div className="profile-navbar-tags-link">

                    </div>
                    <div className="profile-navbar-network-link">

                    </div>
                    <div className="profile-navbar-invitations-link">

                    </div>
                </div>
            </div>
            {profileLoaded && (
            <div className="profile=page-body">
                <div className="profile-body-favorite-films">

                </div>
                <div className="profile-body-recent-likes">

                </div>
                <div className="profile-body-following">

                </div>
            </div>
            )}
        </div>
    )
}

export default ProfilePage
