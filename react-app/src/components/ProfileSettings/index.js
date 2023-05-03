import "./ProfileSettings.css"


const ProfileSettings = () => {
    //testing



    return (
        <div className="profile-settings-box content">
            <div className="profile-settings-header-box">
                <h1 className="profile-settings-header">
                    Account Settings
                </h1>
            </div>
            <div className="profile-settings-navbar">
                <ul className="profile-settings-navbar-list">
                    <li className="profile-settings-navbar-list-item">
                        Profile
                    </li>
                    <li className="profile-settings-navbar-list-item">
                        Avatar
                    </li>
                </ul>
                {/* <p className="delete-account-button">
                    Deactivate Account
                </p> */}
            </div>
            <div className="profile-settings-form-box">
                <div className="profile-settings-form-header-box">
                    <h2 className="profile-settings-form-header">
                        Profile
                    </h2>
                </div>
                <form className="profile-settings-form">
                    <div className="profile-settings-change-fields">
                        <div className="personal-settings">
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Username
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-name-inputs">
                                <div className="profile-settings-field name-input">
                                    <label className="profile-settings-label">
                                        Given Name
                                    </label>
                                    <input
                                        className="profile-settings-input"
                                        type="text"
                                        // value={name}
                                        // onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="profile-settings-field name-input">
                                    <label className="profile-settings-label">
                                        Family Name
                                    </label>
                                    <input
                                        className="profile-settings-input"
                                        type="text"
                                        // value={name}
                                        // onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Email Address
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Location
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Website
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Bio
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {/* <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Pronouns
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Posters
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Replies
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Include profile in the members section
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Adult Content
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                />
                            </div> */}
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
                            <ul className='edit-favorite-films-poster-list'>
                                <li className='edit-favorite-films-poster-list-placeholder'>

                                </li>
                                <li className='edit-favorite-films-poster-list-placeholder'>

                                </li>
                                <li className='edit-favorite-films-poster-list-placeholder'>

                                </li>
                                <li className='edit-favorite-films-poster-list-placeholder'>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-settings-buttons">
                        <button className="change-password-button">
                            Change Password
                        </button>
                        <button className="submit-profile-changes-button">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileSettings;
