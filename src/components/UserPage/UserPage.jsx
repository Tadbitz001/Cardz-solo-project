import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import CardForm from '../CardForm/CardForm';
import CardList from '../CardList/CardList';
import ProfileForm from '../ProfileForm/ProfileForm';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  function addCardBtn () {
    history.push('/cardform')
  }

  return (
    <div className="container">
      <h2>Welcome to Cardz, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}



      {/* <ProfileForm /> */}
      {/* <CardForm /> */}
      <CardList />
      
      {/* <LogOutButton className="btn" /> */}
      {/* need to add button here to add a card. */}
      <Button variant="outlined" onClick={addCardBtn}>Add Card</Button>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
