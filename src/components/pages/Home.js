import {Link} from "react-router-dom";
import Box1 from "../Box1";
import Box2 from "../Box2";
import Box3 from "../Box3";

function Home(){

    const red = {
        backgroundColor: 'red',
        margin: '25px',
        height: '100px',
        width: '100px'
    }
    const blue = {
        backgroundColor: 'blue',
        margin: '25px',
        height: '100px',
        width: '100px'
    }
    const green = {
        backgroundColor: 'green',
        margin: '25px',
        height: '100px',
        width: '100px'
    }

    return(
        <div>
            <Link to ={"Box1"}>
                <div style={red}> </div>
            </Link>
            <Link to ={"Box2"}>
                <div style={blue}> </div>
            </Link>
            <Link to ={"Box3"}>
                <div style={green}> </div>
            </Link>

        </div>
    )
}

export default Home;