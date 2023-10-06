import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./page/LandingPage";
import { Client } from "./page/Client";
import { Collect } from "./page/Collect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client" element={<Client />} />
        <Route path="/collect" element={<Collect />} />;
        <Route path="*" element={<h1>Not Found Route</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
