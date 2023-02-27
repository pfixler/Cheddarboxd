import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";


const SingleList = ({list}) => {

    return (
        <div className="single-list-card" key={list.id}>
            <NavLink to={`/lists/${list.id}`}>
                <div className="list-images">

                </div>
                <div className="list-information">
                    <div className="list-name">
                        {list.name}
                    </div>
                    <div className="list-maker">
                        {list.creator}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default SingleList;
