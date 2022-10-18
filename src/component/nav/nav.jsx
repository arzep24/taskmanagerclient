import "./nav.css"
import Button from "../button/button";

function Nav()
{
    return(
            <div className="navbar">
                <h2 className="navTitle">TaskManager</h2>
                <div className="navUserContainer">
                    <h2 className="navUsername">Hola Invitado...</h2>
                    <Button text="Sign-In" eventHandler={e => console.log("Que pedo perro")}/>    
                </div>
            </div>   
    );
}
export default Nav;