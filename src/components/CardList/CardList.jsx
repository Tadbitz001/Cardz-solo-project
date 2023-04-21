import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import CardItem from "./CardItem";

function CardList () {

    const card = useSelector((store) => store.cardReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch({ type: 'FETCH_CARD'})
    }, [])


    return (
        <>
        <h2>This is the CARD LIST</h2>

        <div id="listContainer">
            {card.map((item, i) => {
                return <CardItem key={i} item={item} />;
            })}



          {/* {card.map(item => (
            <Router>
            <Link to='/details/:id'>
            <div className="cards" key={item.id}>
              <p>NAME:{item.contact_name}</p>
              <p>BUSINESS:{item.contact_business}</p>
              <p>NUMBER: {item.contact_number}</p>
              <p>WEBSITE/EMAIL: {item.contact_url}</p>
              <p>NOTES: {item.contact_notes}</p>

            </div>
            </Link>
            </Router>
          ))} */}
        </div>


        </>
    )

}

export default CardList;