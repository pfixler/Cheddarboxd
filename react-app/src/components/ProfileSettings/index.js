


const ProfileSettings = () => {
    return (
        <div className="profile-settings-box">
            <div className="profile-settings-header-box">
                <h1 className="profile-settings-header">
                    Account Settings
                </h1>
            </div>
            <div className="profile-settings-navbar">
                <ul className="profile-settings-navbar-list">
                    <li className="profile-settings-navbar-list-item">

                    </li>
                    <li className="profile-settings-navbar-list-item">

                    </li>
                </ul>
            </div>
            <div className="profile-settings-form-box">
                <div className="profile-settings-form-header-box">
                    <h2 className="profile-settings-form-header">
                        Profile
                    </h2>
                </div>
                <form className="profile-settings-form">
                    <div className="personal-settings">

                    </div>
                    <div className="favorite-films">
                        <div className="favorite-films-header">
                            <label className="favorite-films-label">
                                Favorite Films
                            </label>
                            <p className="favorite-films-instructions">
                                Drag posters to reorder.
                            </p>
                        </div>
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
                </form>
            </div>
        </div>
    )
}

export default ProfileSettings;
