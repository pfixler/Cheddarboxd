import "./ProfileSettings.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateProfile } from "../../store/profile";


const ProfileSettings = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)

    const [username, setUsername] = useState(user.username)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)
    const [location, setLocation] = useState(user.location)
    const [website, setWebsite] = useState(user.website)
    const [bio, setBio] = useState(user.bio)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorArr = [];

        const updatedProfile = {
            ...user,
            username,
            first_name:firstName,
            last_name:lastName,
            email,
            location,
            website,
            bio
        }


        const data = await dispatch(updateProfile(updatedProfile))
            if (data) {
                window.alert(`${data}`);
            } else {
                window.alert("Youre profile has been successfully updated");
            }
    }

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
                <form className="profile-settings-form" onSubmit={handleSubmit}>
                    <div className="profile-settings-change-fields">
                        <div className="personal-settings">
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Username
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="profile-settings-field name-input">
                                    <label className="profile-settings-label">
                                        Family Name
                                    </label>
                                    <input
                                        className="profile-settings-input"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
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
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Location
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Website
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>
                            <div className="profile-settings-field">
                                <label className="profile-settings-label">
                                    Bio
                                </label>
                                <input
                                    className="profile-settings-input"
                                    type="text"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
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
                    <div className="buttons-box edit-profile-buttons">
                        <button className="grey-button" id="change-password-button">
                            <span>Change Password</span>
                        </button>
                        <button className="green-button" type="submit">
                            <span>Save Changes</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileSettings;
