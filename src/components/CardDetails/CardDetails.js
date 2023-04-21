import React from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { useSelector } from "react-redux";

function CardDetails () {
    const user = useSelector((store) => store.cardIdReducer);
    console.log('this is user', user.contact_name)

    return (
        <div className="formContainer">
        <h3>Details</h3>

        {/* <div className="cards" key={item.id}> */}
        {user.length > 0 &&
            <div>
                <p>NAME:{user[0].contact_name}</p>
                <p>BUSINESS:{user[0].contact_business}</p>
                <p>NUMBER: {user[0].contact_number}</p>
                <p>WEBSITE/EMAIL: {user[0].contact_url}</p>
                <p>NOTES: {user[0].contact_notes}</p>
                {/* <button onClick={() => handleClick(item)}>Edit</button> */}
            </div>
        }
        {/* </div> */}
        </div>
    )
}

export default CardDetails;