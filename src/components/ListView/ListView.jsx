import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';


function ListView () {

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

    function goBackBtn () {
        history.push('/')
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

            <Box display="flex" alignItems="center" margin="20px">
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
                    onClick={goBackBtn}
                    style={{ textTransform: "none", marginLeft: 15}}
                >
                    Back
                </Button>
            </Box>

            <div className="table-responsive">
            <TableContainer component={Paper} className="custom-table-container" >
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className="custom-table-header">
                            <TableCell sx={{ width: '30%', fontSize: 20 }} >Name</TableCell>
                            <TableCell sx={{ width: '30%', fontSize: 20  }} >Number</TableCell>
                            <TableCell sx={{ width: '20%', fontSize: 20  }} >Email/Webpage</TableCell>
                            <TableCell sx={{ width: '20%', fontSize: 20  }} >Details</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody className="custom-table-body">
                        {card.map((item) => (
                            <TableRow
                                key={item.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ width: '30' }} component="th" scope="row">
                                    {item.contact_name}
                                </TableCell>
                                <TableCell sx={{ width: '30%' }} >
                                    {item.contact_number && 
                                    `${item.contact_number.slice(0, 3)}
                                    ${(item.contact_number.length >= 7 ? '-' : '')}
                                    ${item.contact_number.slice(3, 6)}
                                    ${(item.contact_number.length >= 7 ? '-' : '')}
                                    ${item.contact_number.slice(6)}`}
                                    {/* {`${item.contact_number.slice(0, 3)}-${item.contact_number.slice(3, 6)}-${item.contact_number.slice(6)}`} */}
                                </TableCell>                                
                                <TableCell sx={{ width: '20%' }} >{item.contact_url}</TableCell>
                                <TableCell sx={{ width: '20%' }} ><Button size="small" variant="outlined" onClick={(event) => handleClick(event, item.id)}>Details</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </>
    )

}

export default ListView;

