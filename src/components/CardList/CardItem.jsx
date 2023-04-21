import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";


function CardItem ({item}) {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.cardReducer);

    const [idToEdit, setIdToEdit] = useState('')
    const [newNotes, setNewNotes] = useState('')

    // function addInputField(item) {
    //     setIdToEdit(item.id) 
    //     setNewNotes(item.contact_notes) //sets those variables to value of input fields
    // }

    function handleClick(id) {

        console.log('updated item', updatedItem)

        dispatch({
          type: 'FETCH_CARD_ID',
          payload: id
        })
        history.push('/indcarddetails')
      }

    //   useEffect(() => {
    //     dispatch({ type: "FETCH_CARD" });
    //   }, []);

    return (
        <>
        <h1>Home Page</h1>
        <h2>Details</h2>
            {/* {user.map(item => {
                return (
                    <div key ={item.id} className="cards">
                    <h2>{item.contact_name}</h2>
                    <h2>{item.contact_business}</h2>
                    <button onClick={(event)=> handleClick(event, item)}>Details</button>
                    </div>
                )
            })} */}


        {/* <div className="cards" key={item.id}> */}
        {/* // <p>NAME:{item.contact_name}</p>
        // <p>BUSINESS:{item.contact_business}</p>
        // <p>NUMBER: {item.contact_number}</p>
        // <p>WEBSITE/EMAIL: {item.contact_url}</p>
        // <p>NOTES: {item.contact_notes}</p> */}
        {/* <button onClick={() => handleClick(item)}>Edit</button>
        </div> */}
        </>
    )
}
export default CardItem;