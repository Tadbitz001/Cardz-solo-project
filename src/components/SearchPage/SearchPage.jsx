import React from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchPage () {

    const dispatch = useDispatch();
    const cardList = useSelector((store) => store.cardReducer)
    const [searchInput, setSearchInput] = useState('');


    useEffect(() => {
        dispatch({
            type: 'CLEAR_CARD_LIST'
        }); 
    }, []);

    const cardSearch = (evt) => {
        evt.preventDefault();

        // starting the process to find gifs
        // this object IS the action on the saga function
        dispatch({
            type: 'SEARCH_FOR_CARD',
            payload: searchInput
        });
    }

    return (

        <div className="searchContainer">
        <h3>Search Page</h3>
        <form onSubmit={onSearch}>
                <input 
                    type="text" 
                    value={searchInput}
                    onChange={evt => setSearchInput(evt.target.value)}
                />
                <input type="submit" value="Find that card" />
        </form>
        <ul>
                {cardList.map(item => (
                    <GifItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
        </div>

    )
}

export default SearchPage;