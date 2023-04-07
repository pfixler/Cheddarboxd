import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './ProfilePage.css';
import { loadUserDetails } from '../../store/user';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const profileUser = useSelector(state => state.user.user);
    // console.log('profile user:', profileUser)

    const [sameUser, setSameUser] = useState(false);

    useEffect(() => {
        // console.log('in use effect')
        dispatch(loadUserDetails(userId))

        if (sessionUser && profileUser) {
            if (sessionUser.id == profileUser.id) {
                setSameUser(true)
            }
        }
    }, [dispatch])

    if (profileUser.length < 1) {
        return null
    }

    return (
        <div className="profile-page-box">
            <div className="profile-page-header">
                <div className="profile-information">
                    <div className="profile-header-left">
                        <div className="profile-image">
                            <i className="fas fa-user-circle fa-7x" id="profile-page-profile-icon"/>
                        </div>
                        <div className='profile-image-labels'>
                            <div className='profile-username'>
                                {profileUser.username}
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
                    </div>
                    <div className="profile-header-right">
                        <div className="profile-statistics">
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profileUser?.reviews?.length}
                                </div>
                                <div className="profile-stat-word">
                                    reviews
                                </div>
                            </div>
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profileUser?.lists?.length}
                                </div>
                                <div className="profile-stat-word">
                                    lists
                                </div>
                            </div>
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profileUser?.following?.length}
                                </div>
                                <div className="profile-stat-word">
                                    following
                                </div>
                            </div>
                            <div className="stats-count">
                                <div className="profile-stat-number">
                                    {profileUser?.followers?.length}
                                </div>
                                <div className="profile-stat-word">
                                    followers
                                </div>
                            </div>
                        </div>
                    </div>
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
            <div className="profile=page-body">
                <div className="profile-body-favorite-films">

                </div>
                <div className="profile-body-recent-likes">

                </div>
                <div className="profile-body-following">

                </div>
            </div>
        </div>
    )
}

export default ProfilePage
