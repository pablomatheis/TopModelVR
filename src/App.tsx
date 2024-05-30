import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage.tsx";
import VideoPage from "./Pages/Videos/VideoPage.tsx";


export default function App() {
    return <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/video/:id" element={<VideoPage /> }/>
                </Routes>
            </BrowserRouter>
}
