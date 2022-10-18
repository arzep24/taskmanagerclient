import Button from "../../component/button/button";
import {Link} from "react-router-dom";
import "./home.css"
function Home()
{
    return( 
    <div className="homeContainer">
        <h1 className="homeTitle">Se Simple<br/>Se Creativo</h1>
        <p className="homeParagraph">Concentrate en lo importante, organizate de manera facil y accesible desde cualquier lado. La aplicacion mas sencilla</p>
        <Link to="/dashboard"><Button extraClass="homeButton" text="Pruebala"/></Link>
    </div>);
}

export default Home;