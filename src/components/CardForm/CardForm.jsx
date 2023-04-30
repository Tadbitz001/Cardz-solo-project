import { useDispatch } from "react-redux"
import { useState } from "react"
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";


import { Card, CardContent } from "@mui/material";
import {Grid} from "@mui/material"
import Typography from '@mui/material/Typography';


function CardForm () {
    let [newItem, setNewItem] = useState ({
      contact_name: '',
      contact_number: '',
      contact_address: '',
      contact_city: '',
      contact_state: '',
      contact_zip_code: '',
      contact_url: '',
      contact_notes: '',
      contact_image: ''
    })

    const handleBackClick= () => {
      history.push('/')
    }

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
                setNewItem({ ...newItem, contact_number: event.target.value })
                break;
            case '3':
                setNewItem({ ...newItem, contact_address: event.target.value })
                break; 
            case '4':
                setNewItem({ ...newItem, contact_city: event.target.value })
                break;
            case '5':
                setNewItem({ ...newItem, contact_state: event.target.value })
                break; 
            case '6':
                setNewItem({ ...newItem, contact_zip_code: event.target.value })
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
        if(newItem.contact_name) {
            dispatch ({ type: 'ADD_ITEM', payload: newItem})
            setNewItem({
              contact_name: '',
              contact_number: '',
              contact_address: '',
              contact_city: '',
              contact_state: '',
              contact_zip_code: '',
              contact_url: '',
              contact_notes: '',
              contact_image: ''
            })
            history.push('/');
        }
        else { 
            setNewItem({
                contact_name: '',
                contact_number: '',
                contact_address: '',
                contact_city: '',
                contact_state: '',
                contact_zip_code: '',
                contact_url: '',
                contact_notes: '',
                contact_image: ''
            })
            alert('You need to enter a Name or Business input')
        }
    }

    return (
        <>

<Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
            <CardContent>
              <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                Enter Contact Information
              </Typography>
              <form onSubmit={postItem}>
                <Grid container spacing={1}>

                  <Grid xs={12} sm={6} item>
                    <TextField
                      id="1"
                      label="Contact"
                      placeholder="Contact Name"
                      variant="outlined"
                      value={newItem.contact_name}
                      onChange={handleItem}
                      fullWidth required
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      id="2"
                      label="Number"
                      placeholder="Contact Number"
                      variant="outlined"
                      value={newItem.contact_number}
                      onChange={handleItem}
                      inputProps={{ maxLength: 10 }}

                      fullWidth 
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="3"
                      label="Street Address"
                      // type="email"
                      placeholder="Enter Address"
                      variant="outlined"
                      value={newItem.contact_address}
                      onChange={handleItem}
                      fullWidth 
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="4"
                      label="City"
                      placeholder="Enter City"
                      variant="outlined"
                      value={newItem.contact_city}
                      onChange={handleItem}
                      fullWidth 
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="5"
                      label="State"
                      placeholder="Enter State"
                      variant="outlined"
                      value={newItem.contact_state}
                      onChange={handleItem}
                      fullWidth 
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="6"
                      label="Zip Code"
                      placeholder="Enter Zip Code"
                      variant="outlined"
                      value={newItem.contact_zip_code}
                      onChange={handleItem}
                      fullWidth 
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="7"
                      label="Email/Website"
                      placeholder="Email or Website"
                      variant="outlined"
                      value={newItem.contact_url}
                      onChange={handleItem}
                      fullWidth 
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="8"
                      label="Notes"
                      placeholder="Enter Notes"
                      variant="outlined"
                      value={newItem.contact_notes}
                      onChange={handleItem}
                      fullWidth 
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="9"
                      label="Image Link"
                      placeholder="Image Link"
                      variant="outlined"
                      value={newItem.contact_image}
                      onChange={handleItem}
                      fullWidth 
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button size="large" type="submit" variant="contained">
                      Submit
                    </Button>
                    <Button size="large" sx={{ marginLeft: 2 }} variant="outlined" onClick={handleBackClick}>
                      BACK
                    </Button>
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>

        </>
    )

}

export default CardForm;