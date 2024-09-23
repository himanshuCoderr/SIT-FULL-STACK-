import { Navbar } from './Navbar.js';
import { Sidebar } from './Navbar.js';
import VideoCard from './VideoCard.js';
import VideoCardsCont from './VideoCardsCont.js';

function App() {
    return (
        <div>

            <Navbar />
            <div style={{ display: "flex" }} >
                <Sidebar />
                <div style={{ display: "flex", flexWrap: "wrap" }}  >         
                <VideoCardsCont />
                </div>
            </div>


        </div>

    )
}


export default App