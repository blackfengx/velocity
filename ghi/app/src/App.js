import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import TechnicianList from './TechnicianList';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import VehicleList from './VehicleList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/create" element={<ManufacturerForm/>} />
          <Route path="/technicians" element={<TechnicianList />} />
          <Route path="/technicians/create" element={<TechnicianForm />} />
          <Route path="/vehicle/model" element={<VehicleList />} />
          <Route path="/vehicle/model/create" element={<VehicleModel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
