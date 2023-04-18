import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const card = useSelector((store) => store.cardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_CARD'})
  }, [])


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <h2>This is the CARD LIST</h2>

      <div id="listContainer">
        {card.map(item => (
          <div class="cards" key={item.id}>
            <p>NAME:{item.contact_name}</p>
            <p>BUSINESS:{item.contact_business}</p>
            <p>NOTES: {item.contact_notes}</p>
          </div>
        ))}
      </div>


      <CardForm />
      
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
