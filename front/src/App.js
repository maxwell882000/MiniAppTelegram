import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import AllStaffs from "./pages/all_staffs/AllStaffs";
import Staff from "./pages/staff/Staff";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        console.log(window.Telegram.WebApp);
    })

    return (
        <div className="App dark:bg-gray-800" >
            <Routes>
                <Route index element={<AllStaffs/>}></Route>
                <Route path={'staff/:userId'} element={<Staff/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
