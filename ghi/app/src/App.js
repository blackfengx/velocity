import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SalespersonList from './SalespersonList';
import SalespersonForm from './SalespersonForm';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import TechnicianList from './TechnicianList';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import VehicleList from './VehicleList';
import PotentialCustomerList from './PotentialCustomerList';
import PotentialCustomerForm from './PotentialCustomerForm';
import SalesRecordList from './SalesRecordList';



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
          <Route path="/salesperson" element={<SalespersonList />} />
          <Route path="/salesperson/create" element={<SalespersonForm />} />
          <Route path="/potentialcustomer" element={<PotentialCustomerList />} />
          <Route path="/potentialcustomer/create" element={<PotentialCustomerForm />} />
          <Route path="/salesrecord" element={<SalesRecordList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
