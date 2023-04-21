import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function ProfileForm () {

    let [newItem, setNewItem] = useState ({
        first_name: '',
        last_name: '',
        user_email: '',
        user_number: '',

    })
    const history = useHistory();
    //Need to re-direct to main page when completed
    const dispatch = useDispatch();

    const handleItem = (event) => {
        console.log('Value from input', event.target.value)
        let inputProfileField = event.target.id;
        switch (inputProfileField) {
            case '1':
                setNewItem({...newItem, first_name: event.target.value})
                break;
            case '2':
                setNewItem({ ...newItem, last_name: event.target.value })
                break;
            case '3':
                setNewItem({ ...newItem, user_email: event.target.value })
                break; 
            case '4':
                setNewItem({ ...newItem, user_number: event.target.value })
                break;
        }
    
        console.log('This is newItem', newItem);

    }

    const postItem = () => {
        console.log('Value from postItem', event.target.value)
        if(newItem.first_name && newItem.last_name && newItem.user_email && newItem.user_number) {
            dispatch ({ type: 'ADD_PROFILE', payload: newItem})
            setNewItem({
                first_name: '',
                last_name: '',
                user_email: '',
                user_number: ''
            })
            history.push('/')  //sends user back to main page when completed form.
        }
        else { 
            setNewItem({
                contact_name: '',
                contact_business: '',
                contact_number: '',
                contact_address: ''
  
            })
            alert('Please enter your information in all fields')
        }
    }

    return (
        <>
              <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={postItem}
      >
        <TextField
          id="1"
          label="First Name"
          variant="filled"
          value={newItem.first_name}
          onChange={handleItem}
        />

        <TextField
          id="2"
          label="Last Name"
          variant="filled"
          value={newItem.last_name}
          onChange={handleItem}
        />
        <TextField
          id="3"
          label="Email"
          variant="filled"
          value={newItem.user_email}
          onChange={handleItem}
        />
        <TextField
          id="4"
          label="Phone Number"
          variant="filled"
          value={newItem.user_number}
          onChange={handleItem}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>

      </Box>
        </>

    )
}

export default ProfileForm;