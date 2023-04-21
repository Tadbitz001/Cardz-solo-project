import { useSelector } from "react-redux";

function CardDetails () {
    
    const card = useSelector((store) => store.cardReducer);


    return (
        <>
        <div>
            test
        </div>
        </>
    )
}

export default CardDetails;