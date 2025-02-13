import {Footer} from "@/components/footer/Footer";
import {Features} from "@/components/features/Features";
import {Games} from "@/components/games/Games";
import {Docs} from "@/components/docs/Docs";
import {Tokenomics} from "@/components/tokenomics/Tokenomics";
import {RoadMap} from "@/components/roadMap/RoadMap";
import {Faq} from "@/components/faq/Faq";
import {Main} from "@/components/main/Main";
import {Header} from "@/components/header/Header";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Features/>
            <Games/>
            <Tokenomics/>
            <RoadMap/>
            <Docs/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default App;