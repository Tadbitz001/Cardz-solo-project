import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


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
          {card.map(item => (
            <div className="cards" key={item.id}>
              <p>NAME:{item.contact_name}</p>
              <p>BUSINESS:{item.contact_business}</p>
              <p>NOTES: {item.contact_notes}</p>
            </div>
          ))}
        </div>


        </>
    )

}

export default CardList;