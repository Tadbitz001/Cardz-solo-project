import React from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function CardDetails () {
    const user = useSelector((store) => store.cardIdReducer);
    console.log('this is cardIdReducer user', user)
    const dispatch = useDispatch();
    const history = useHistory();

    const [idToEdit, setIdToEdit] = useState('')
    const [newNotes, setNewNotes] = useState('')//were using useState to store the values from the input fields aka the thing were editing

    function addInputField(user){
        console.log('inside addInputField', user.id)
        setIdToEdit(user.id)
        setNewNotes(user.contact_notes)//this sets those variables to the value of the input field
    }

    function updatedItem(id) {
        let updatedItem = {
          contact_notes: newNotes,
          id: idToEdit
        }
        console.log('updated item', updatedItem)
        dispatch({
          type: 'EDIT_CARD',
          payload: updatedItem
        })
        setIdToEdit('')
        setNewNotes('')
        history.push('/')
        //need to make saga for edit, need to make put request in saga, make server side put request
    }

    function deleteDispatch () {
        console.log('this is userid', user[0].id)
        dispatch({type: 'DELETE_CARD', 
        payload: user[0].id}),
        history.push('/')
    }

    useEffect(() => {
        dispatch({ type: "FETCH_CARD" });
      }, [user]);

    // console.log('this is user[0].indttm', user[0].indttm)
    //create a const to get date format to show only date and not time.
    // const formattedDate = new Date(user[0].indttm).toLocaleDateString();

    return (
        <div className="cardContainer">
          <h2>Card Details</h2>
      

          {user.length > 0 && (
            <div>
              <p>NAME: {user[0].contact_name}</p>
              <p>BUSINESS: {user[0].contact_business}</p>
              <p>NUMBER: {user[0].contact_number}</p>
              <p>WEBSITE/EMAIL: {user[0].contact_url}</p>
              <p>Address: {user[0].contact_address}</p>
              <p>City: {user[0].contact_city}</p>
              <p>State: {user[0].contact_state}</p>
              
              <p>NOTES: {user[0].contact_notes}</p>
              {/* <p>{formattedDate}</p> */}
              <br></br>

    
              {idToEdit === user[0].id ? (
                <div>                        
              <input
                value={newNotes}
                onChange={(event) => setNewNotes(event.target.value)}
              />
              <button onClick={() => updatedItem(user.id)}>
                Save
              </button></div>
              ) : (
                <button onClick={() => addInputField(user[0])}>Edit</button>
                
              )}
                <button onClick={deleteDispatch}>DELETE</button>
                {/* <button onClick={() =>  dispatch({type: 'DELETE_CARD', payload: user[0].id})}>DELETE</button> */}


            </div>
          )}
        </div>
      );
}

export default CardDetails;