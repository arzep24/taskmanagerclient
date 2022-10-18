import {Link} from "react-router-dom"
import WeekBar from "../../component/calendar/week/weekBar";
function Dashboard()
{
    return(
        <div className="dashboardContainer">
            <h1 className="dashboardTitle">Dashboard</h1>
            <p>Es simple, sencillo, deberia poder darle una oportunidad</p>
            <WeekBar/>
            <div className="tasksContainer">

            </div>
            <div className="optionsContainer">

            </div>
            <Link to="/">Regreso a Inicio</Link>
        </div>
    );
}
export default Dashboard;