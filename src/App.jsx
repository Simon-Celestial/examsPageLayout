import './App.css'
import {HomePage} from "./Layout/Main/HomePage/HomePage.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";
import {ExamsPage} from "./Layout/Main/ExamsPage/ExamsPage.jsx";

function App() {
    return (
        <>
            <LayoutContextProvider>
                {/*<HomePage/>*/}
                <ExamsPage />
            </LayoutContextProvider>
        </>
    )
}

export default App
