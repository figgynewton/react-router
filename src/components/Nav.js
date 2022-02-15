import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to ={"/"}>Home </Link>
            <Link to ={"/data"}>Data </Link>
            <Link to ={"/cool"}>Cool </Link>
        </nav>
    )
}

export default Nav;