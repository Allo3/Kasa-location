import "./index.sass"
import HomepageLogo from "./HomepageLogo";
import LocationGrid from "../../locationGrid/LocationGrid";
import logementsData from '../../../assets/data/location.json';

function App() {
    const logements = logementsData;
    return (
        <div className="homepage">
            <HomepageLogo/>
            <LocationGrid logements={logements}/>
        </div>
        )
}

export default App;
