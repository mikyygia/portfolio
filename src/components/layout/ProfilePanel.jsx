import Bio from "../primary/Bio";
import Contacts from "../primary/Contact";
import CurrentStatus from "../primary/CurrentStatus";
import LiveClock from "../primary/LiveClock";

function ProfilePanel () {
    return (
        <div>
            <Bio />
            <CurrentStatus />
            <Contacts />
            <LiveClock />
        </div>
    )
}

export default ProfilePanel;