import "./button.css"
import {Link} from "react-router-dom"

function Button(props)
{
    
    return(
        <button className={"classicButton " + props.extraClass} type="button" onClick={props.eventHandler}>
            {props.text}
        </button>
    );
}
export default Button;