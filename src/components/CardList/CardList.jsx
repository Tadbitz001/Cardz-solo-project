import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";


function CardList () {

    const card = useSelector((store) => store.cardReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const [clearSearch, setClearSearch] = useState('');
  
    useEffect(() => {
      dispatch({ type: 'FETCH_CARD'})
    }, [])

    function handleClick (event, id) { //2️
        console.log('id', id)
        dispatch ({
            type:'GET_CARD_ID', //3️
            payload: id //3️
        })
        history.push('/indcarddetails')
    }

    function searchCard (event) {
        event.preventDefault();
        dispatch ({
            type: 'SEARCH_FOR_CARD',
            payload: event.target.value
        })
        setClearSearch(event.target.value);
    }

    function clearScreen (event) {
        event.preventDefault();
        dispatch ({
            type: 'FETCH_CARD',
        })
        setClearSearch('');
    }

    return (
        <>
        <h2>This is your CARD LIST</h2>
            <Box display="flex" alignItems="center">
                <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    variant="outlined"
                    size="medium"
                    value={clearSearch}
                    onChange={searchCard}
                    style={{ marginRight: "16px" }}
                />
                <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    onClick={clearScreen}
                    style={{ textTransform: "none" }}
                >
                    Clear Search
                </Button>
            </Box>

        <div style={{display: 'flex', flexWrap: 'wrap' }}>
          {card.map(item => (

              <Card className="cardList" sx={{ minWidth: 275,  '&:hover': {
                boxShadow: '0 0 5px 10px rgba(0,0,0,0.2)'} }} key={item.id}>
                  <CardContent>

                      <Typography variant="h5" component="div">
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      CONTACT: {item.contact_business}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      NUMBER: {item.contact_number}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      WEBSITE/EMAIL: {item.contact_url}
                      </Typography>
                      <Typography variant="body2">
                      NOTES: {item.contact_notes}

                      </Typography>
                  </CardContent>
                  <CardActions className="cardActions">
                      <Button size="small" variant="outlined" onClick={(event)=> handleClick(event, item.id)}>Details</Button>
                  </CardActions>
              </Card>
            
            // <div className="cards" key={item.id}>
            //   <p>NAME:{item.contact_name}</p>
            //   <p>BUSINESS:{item.contact_business}</p>
            //   {/* <p>NUMBER: {item.contact_number}</p>
            //   <p>WEBSITE/EMAIL: {item.contact_url}</p> */}
            //   <p>NOTES: {item.contact_notes}</p>
            //   <button onClick={(event)=> handleClick(event, item)}>Details</button>
            // </div>

          ))}
        </div>
        </>
    )

}

export default CardList;

