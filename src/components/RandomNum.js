import { useState } from "react";
import genarateRandomNum from "./utils/generateRandomNum";

function RandomNum({rangeNumbers}) {
    const [randomNum, setRandomNum] = useState(rangeNumbers);    
    const genarateNum = () => {
        setRandomNum(genarateRandomNum(rangeNumbers))
    }
    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={genarateNum}>GenarateRendomNumber</button>
        </div>
    )
}

export default RandomNum;