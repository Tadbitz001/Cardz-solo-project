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
import ListViewPage from "../ListView/ListView";
import cardListImage from "../Images/creamCardImage.jpeg"


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

    function listViewPage () {
        history.push('/listviewpage')
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
        {/* <h2>CARD LIST</h2> */}
        {/* <img src={cardListImage}/> */}
            <Box display="flex" alignItems="center" >
                <TextField
                    id="outlined-search"
                    label="Search Field"
                    type="search"
                    variant="outlined"
                    size="medium"
                    value={clearSearch}
                    onChange={searchCard}
                    style={{ marginRight: "16px", backgroundColor: 'white' }}
                />
                <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    onClick={clearScreen}
                    style={{ textTransform: "none" }}
                >
                    Reset
                </Button>
                <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    onClick={listViewPage}
                    style={{ textTransform: "none", marginLeft: 15}}
                >
                    List
                </Button>
                
            </Box>

        <div style={{display: 'flex', flexWrap: 'wrap' }}>
          {card.map(item => (

              <Card className="cardList" sx={{ minWidth: 275, backgroundColor: {cardListImage}, '&:hover': {
                boxShadow: '0 0 5px 10px rgba(0,0,0,0.2)'} }} key={item.id}>
                  <CardContent>

                      <Typography variant="h5" component="div">
                      </Typography>
                      <Typography sx={{ fontSize: 15 }} >
                      Contact:   {item.contact_name}
                      </Typography>
                      <Typography sx={{ fontSize: 15, letterSpacing: '-0.5px' }} >
                      Number:   {item.contact_number && 
                                    `${item.contact_number.slice(0, 3)}
                                    ${(item.contact_number.length >= 7 ? '-' : '')}
                                    ${item.contact_number.slice(3, 6)}
                                    ${(item.contact_number.length >= 7 ? '-' : '')}
                                    ${item.contact_number.slice(6)}`}
                      </Typography>
                      <Typography sx={{ fontSize: 15 }}  gutterBottom>
                      Website/Email:  {item.contact_url}
                      </Typography>
                      <Typography sx={{ fontSize: 15 }} variant="body2" color="text.secondary">
                      Notes: {item.contact_notes}
                      </Typography>
                      
                  </CardContent>
                  <CardActions className="cardActions">
                      <Button size="small" variant="outlined" onClick={(event)=> handleClick(event, item.id)}>Details</Button>
                  </CardActions>
              </Card>

          ))}
        </div>
        </>
    )

}

export default CardList;

