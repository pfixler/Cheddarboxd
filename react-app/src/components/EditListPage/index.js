import { useDispatch } from "react-redux"
import { useState } from "react"


const EditListPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [publicList, setPublicList] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
    }


    return (
        <div className="create-list-page-box">
            <div className="create-list-header">

            </div>
            <div className="create-list-form-box">
                <form className="create-list-form" onSubmit={handleSubmit}>
                    <div className="create-list-name">
                        <label className="create-list-name-label">
                            Name of list
                            <input
                                className="create-list-name-input"
                                type="text"
                                value={name}
                                onChange={(e) => e.target.value}
                                required
                            />
                        </label>
                    </div>
                    <div className="create-list-description">
                        <label className="create-list-description-label">
                            Description
                            <input
                                className="create-list-description-input"
                                type="text"
                                value={description}
                                onChange={(e) => e.target.value}
                                required
                            />
                        </label>
                    </div>
                    <div className="create-list-public-list">
                        <label className="create-list-public-list-label">
                            Public list
                            <input
                                className="create-list-public-list-input"
                                type="checkbox"
                                value={publicList}
                                onChange={(e) => e.target.value}
                                required
                            />
                        </label>
                    </div>
                    <div className="list-submit">
                        <button className='list-submit-button' type='submit'>
                            Save
                        </button>
                    </div>
                    <div className='list-cancel'>
                        <button className='list-cancel-button' onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditListPage
