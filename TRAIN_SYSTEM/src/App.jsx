import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TrainDetails from "./Components/TrainDetails";
import TrainList from "./Components/TrainList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<TrainList />} />
        <Route path="/trains/:id" element={<TrainDetails/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
