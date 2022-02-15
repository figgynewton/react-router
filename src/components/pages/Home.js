import {Link} from "react-router-dom";
import ColorBlock from "../ColorBlock";

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
            <Link to ={"ColorBlock"}>
                <div style={red}> </div>
                <div style={blue}> </div>
                <div style={green}> </div>
            </Link>
        </div>
    )
}

export default Home;