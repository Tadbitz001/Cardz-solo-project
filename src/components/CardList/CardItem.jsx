import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";


function CardItem ({item}) {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const [idToEdit, setIdToEdit] = useState('')
    const [newNotes, setNewNotes] = useState('')

    function addInputField(item) {
        setIdToEdit(item.id) 
        setNewNotes(item.contact_notes) //sets those variables to value of input fields
    }

    function updatedItem(id) {
        let updatedItem = {
          contact_notes: newNotes,
          id
        }
        console.log('updated item', updatedItem)
        dispatch({
          type: 'EDIT_CARD',
          payload: updatedItem
        })
      
        // Only reset the edit state if we're saving the item we're currently editing
        if (id === idToEdit) {
          setIdToEdit('')
          setNewNotes('')
        }
      }

      useEffect(() => {
        dispatch({ type: "FETCH_CARD" });
      }, []);

    return (
        <div className="cards" key={item.id}>
        {/* // <p>NAME:{item.contact_name}</p>
        // <p>BUSINESS:{item.contact_business}</p>
        // <p>NUMBER: {item.contact_number}</p>
        // <p>WEBSITE/EMAIL: {item.contact_url}</p>
        // <p>NOTES: {item.contact_notes}</p> */}
        <button onClick={() => updatedItem(item.id)}>Edit</button>

        </div>

    )
}
export default CardItem;