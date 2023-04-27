import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import LogOutButton from "../LogOutButton/LogOutButton";


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function UserProfile () {

    const history = useHistory();
    const userProfile =useSelector((store) => store.profileReducer)
    console.log('inside of userProfile', userProfile)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_FORM' });
      }, []);

    const handleHomeClick = () => {
        history.push('/');
    }

    const handleProfile = () => {
        history.push('/profile')
    }

    const handleLogOut= () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (

        <div className="profileContainer">
            <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                <Button variant="text" onClick={handleHomeClick}>Back</Button>
            </Box>
            <div className="profileImage">
            <img src="https://api-private.atlassian.com/users/d253c7c83fb81e3eb4743ca564e43275/avatar"/>
            <Typography sx={{ fontSize: 30}} color="text.secondary" gutterBottom>
            User Profile ID: {userProfile.user_id}
            </Typography>
            </div>
            <div className="profileText">
        <Card className="profileCard" sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography variant="h5" >
            First Name: {userProfile.first_name}
            </Typography>
            <Typography variant="h5" component="div">
            Last Name:  {userProfile.last_name}
            </Typography>
            <Typography variant="h5" >
            User Email: {userProfile.user_email}
            </Typography>
            <Typography variant="h5" gutterBottom>
            Contact Number: {userProfile.user_number}
            </Typography>
            
        </CardContent>
        <div className="profileBtn">
        <CardActions>
            <Button size="large" variant="outlined" onClick={handleProfile}>Update Profile</Button>
            <Button size="large" variant="outlined" onClick={handleLogOut}> Sign out</Button>
        </CardActions>
        </div>
        </Card>
        </div>
        </div>

        // <div className="">
        // <h3>User Profile </h3>
        // <h2>Heres your profile</h2>
        // <p>First Name:  {userProfile.first_name}</p>
        // <p>Last Name:  {userProfile.last_name}</p>
        // <p>User Email:  {userProfile.user_email}</p>
        // <p>Contact Number:  {userProfile.user_number}</p>
        
        // <Button onClick={}/>
        // </div>
    )
}

export default UserProfile;