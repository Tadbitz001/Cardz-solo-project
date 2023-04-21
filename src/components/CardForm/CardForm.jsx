import { useDispatch } from "react-redux"
import { useState } from "react"
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";


function CardForm () {
    let [newItem, setNewItem] = useState ({
        contact_name: '',
        contact_business: '',
        contact_number: '',
        contact_address: '',
        contact_city: '',
        contact_state: '',
        contact_url: '',
        contact_notes: '',
        contact_image: ''
    })

    const dispatch = useDispatch();
    const history = useHistory();

    const handleItem = (event) => {
        console.log('Value from input', event.target.value)
        let inputField = event.target.id;
        switch (inputField) {
            case '1':
                setNewItem({...newItem, contact_name: event.target.value})
                break;
            case '2':
                setNewItem({ ...newItem, contact_business: event.target.value })
                break;
            case '3':
                setNewItem({ ...newItem, contact_number: event.target.value })
                break; 
            case '4':
                setNewItem({ ...newItem, contact_address: event.target.value })
                break;
            case '5':
                setNewItem({ ...newItem, contact_city: event.target.value })
                break; 
            case '6':
                setNewItem({ ...newItem, contact_state: event.target.value })
                break;
            case '7':
                setNewItem({ ...newItem, contact_url: event.target.value })
                break; 
            case '8':
                setNewItem({ ...newItem, contact_notes: event.target.value })
                break;
            case '9':
                setNewItem({ ...newItem, contact_image: event.target.value })
                break;
        }
    
        console.log('This is newItem', newItem);

    }

    const postItem = () => {
        console.log('Value from postItem', event.target.value)
        if(newItem.contact_name || newItem.contact_business) {
            dispatch ({ type: 'ADD_ITEM', payload: newItem})
            setNewItem({
                contact_name: '',
                contact_business: '',
                contact_number: '',
                contact_address: '',
                contact_city: '',
                contact_state: '',
                contact_url: '',
                contact_notes: '',
                contact_image: ''
            })
            history.push('/');
        }
        else { 
            setNewItem({
                contact_name: '',
                contact_business: '',
                contact_number: '',
                contact_address: '',
                contact_city: '',
                contact_state: '',
                contact_url: '',
                contact_notes: '',
                contact_image: ''
            })
            alert('You need to enter a Name or Business input')
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
          label="Name"
          variant="filled"
          value={newItem.contact_name}
          onChange={handleItem}
        />

        <TextField
          id="2"
          label="Business"
          variant="filled"
          value={newItem.contact_business}
          onChange={handleItem}
        />
        <TextField
          id="3"
          label="Number"
          variant="filled"
          value={newItem.contact_number}
          onChange={handleItem}
        />
        <TextField
          id="4"
          label="Street Address"
          variant="filled"
          value={newItem.contact_address}
          onChange={handleItem}
        />
        <TextField
          id="5"
          label="City"
          variant="filled"
          value={newItem.contact_city}
          onChange={handleItem}
        />
        <TextField
          id="6"
          label="State"
          variant="filled"
          value={newItem.contact_state}
          onChange={handleItem}
        />
        <TextField
          id="7"
          label="Website"
          variant="filled"
          value={newItem.contact_url}
          onChange={handleItem}
        />
        <TextField
          id="8"
          label="Notes"
          variant="filled"
          value={newItem.contact_notes}
          onChange={handleItem}
        />
        <TextField
          id="9"
          label="Image URL"
          variant="filled"
          value={newItem.contact_image}
          onChange={handleItem}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>

      </Box>
        </>
    )

}

export default CardForm;