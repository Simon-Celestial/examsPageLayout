import './App.css'
import {HomePage} from "./Layout/Main/HomePage/HomePage.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";

function App() {
    return (
        <>
            <LayoutContextProvider>
                <HomePage/>
            </LayoutContextProvider>
        </>
    )
}

export default App
