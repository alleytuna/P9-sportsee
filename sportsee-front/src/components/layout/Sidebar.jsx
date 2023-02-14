import Yogist from "../../assets/icons/Yogist.svg"
import Swimmer from "../../assets/icons/Swimmer.svg"
import Weight from "../../assets/icons/Weight.svg"
import Cyclist from "../../assets/icons/Cyclist.svg"
import "../../styles/sidebar.css"

/**
 * @function Sidebar - displays sidebar with sports icons and buttons
 * @returns {JSX}
 */
export default function Sidebar() {
    return (
        <nav className="sidebarNav">
            <ul className="sidebarList">
                <li>
                    <img src={Yogist} alt="" className="sidebarIcon" />
                </li>
                <li>
                    <img src={Swimmer} alt="" className="sidebarIcon" />
                </li>
                <li>
                    <img src={Cyclist} alt="" className="sidebarIcon" />
                </li>
                <li>
                    <img src={Weight} alt="" className="sidebarIcon" />
                </li>
            </ul>
            <p className="copyright">Copyright, SportSee2022</p>
        </nav>
    )
}
