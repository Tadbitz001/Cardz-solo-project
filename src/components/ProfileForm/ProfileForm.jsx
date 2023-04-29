import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Card, CardContent } from "@mui/material";
import {Grid} from "@mui/material"
import Typography from '@mui/material/Typography';

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

    const handleBackClick= () => {
      history.push('/displayprofile')
    }


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
            alert('Thank you for setting your profile!')
            history.push('/displayprofile')  //sends user back to main page when completed form.
        }
        else { 
            setNewItem({
              first_name: '',
              last_name: '',
              user_email: '',
              user_number: ''
                // contact_name: '',
                // contact_business: '',
                // contact_number: '',
                // contact_address: ''
            })
            alert('Please enter your information in all fields')
        }
    }

    return (
        <>
        <div>

          <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
            <CardContent>
              <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                Please complete your profile below.
              </Typography>
              <form onSubmit={postItem}>
                <Grid container spacing={1}>

                  <Grid xs={12} sm={6} item>
                    <TextField
                      id="1"
                      label="First Name"
                      placeholder="Enter First Name"
                      variant="outlined"
                      value={newItem.first_name}
                      onChange={handleItem}
                      fullWidth required
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      id="2"
                      label="Last Name"
                      placeholder="Enter Last Name"
                      variant="outlined"
                      value={newItem.last_name}
                      onChange={handleItem}
                      fullWidth required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="3"
                      label="Email"
                      type="email"
                      placeholder="Enter Email"
                      variant="outlined"
                      value={newItem.user_email}
                      onChange={handleItem}
                      fullWidth required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      id="4"
                      label="Phone"
                      type="number"
                      placeholder="Enter Phone Number"
                      variant="outlined"
                      value={newItem.user_number}
                      onChange={handleItem}
                      InputProps={{
                        pattern: '[0-9]+',
                        inputProps: { maxLength: 10 },
                      }}
                      fullWidth required
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

      </div>
        </>

    )
}

export default ProfileForm;