import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CardList () {

    const card = useSelector((store) => store.cardReducer);
    const dispatch = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
      dispatch({ type: 'FETCH_CARD'})
    }, [])

    function handleClick (event, id) { //2️⃣
        console.log('id', id)
        dispatch ({
            type:'EDIT_CARD_ID', //3️⃣
            payload: id //3️⃣
        })

        history.push('/indcarddetails')
    }

    return (


        <>
        <h2>This is the CARD LIST</h2>
        
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {card.map(item => (

              <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      NAME:{item.contact_name}
                      </Typography>
                      <Typography variant="h5" component="div">
            
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      BUSINESS:{item.contact_business}
                      </Typography>
                      <Typography variant="body2">
                      NOTES: {item.contact_notes}
                          <br />
                          {'"a benevolent smile"'}
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small" onClick={(event)=> handleClick(event, item)}>Details</Button>
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

