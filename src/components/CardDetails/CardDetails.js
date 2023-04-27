import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";


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

    function goBack () {
        history.push('/')
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
    // {/* <p>{formattedDate}</p> */}

    return (
      <>
        <Card className="cardDetails">
          <Box sx={{ position: "absolute", top: 10, right: 10 }}>
            <Button
              variant="text"
              // style={{backgroundColor: '#D3D3D3'}}
              onClick={goBack}
            >
              BACK
            </Button>
          </Box>
          <CardContent>
            {/* <Typography variant="h4" component="h2">
              Card Details
            </Typography> */}

            {user.length > 0 && (
              <div>
                {/* <Typography variant="body1">
                  NAME: {user[0].contact_name}
                </Typography> */}
                <Typography variant="h4">{user[0].contact_business}</Typography>
                <Typography variant="body1">
                  Number: {user[0].contact_number}
                </Typography>
                <Typography variant="body1">
                  Website/Email: {user[0].contact_url}
                </Typography>
                <Typography variant="body1">
                  Address: {user[0].contact_address}
                </Typography>
                <Typography variant="body1">
                  City: {user[0].contact_city}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  State: {user[0].contact_state}
                </Typography>
                <Typography variant="body1">
                  NOTES: {user[0].contact_notes}
                </Typography>
                <Typography variant="body1">
                  Created: {user[0].indttm}
                </Typography>
                <br />
                {idToEdit === user[0].id ? (
                  <div>
                    <input
                      value={newNotes}
                      onChange={(event) => setNewNotes(event.target.value)}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => updatedItem(user.id)}
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                    
                  <Button
                    className="editButton"
                    variant="contained"
                    color="primary"
                    onClick={() => addInputField(user[0])}
                    sx={{mt: 23}}
                  >
                    Edit
                  </Button>
                )}

                <Button
                  className="deleteButton"
                  style={{ backgroundColor: "#ff0000" }}
                  sx={{ marginLeft: 20, mt:23 }}
                  variant="contained"
                  color="secondary"
                  onClick={deleteDispatch}
                >
                  DELETE
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </>
    );
    };
    
    export default CardDetails;