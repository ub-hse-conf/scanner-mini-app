import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {Scanner} from "../../../pages/Scanner";


export default function Routers(){


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/scanner/:activity" element={<Scanner />} />
            </Routes>
        </BrowserRouter>
    )
}
