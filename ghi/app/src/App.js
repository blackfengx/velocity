import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SalespersonList from './SalespersonList';
import SalespersonForm from './SalespersonForm';
import ManufacturerForm from './Inventory/Manufacturer/ManufacturerForm';
import ManufacturerList from './Inventory/Manufacturer/ManufacturerList';
import TechnicianList from './Service/Technician/TechnicianList';
import Nav from './Nav';
import TechnicianForm from './Service/Technician/TechnicianForm';
import ModelList from './Inventory/Vehicle Model/ModelList';
import ModelForm from './Inventory/Vehicle Model/ModelForm';
import PotentialCustomerList from './PotentialCustomerList';
import PotentialCustomerForm from './PotentialCustomerForm';
import SalesRecordList from './SalesRecordList';
import SalesRecordForm from './SalesRecordForm';
import AutomobileList from './Inventory/Automobile/AutomobileList';
import AutomobileForm from './Inventory/Automobile/AutomobileForm';
import AppointmentList from './Service/Appointment/AppointmentList';
import AppointmentForm from './Service/Appointment/AppointmentForm';
import SalespersonHistory from './SalespersonHistory';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/create" element={<ManufacturerForm />} />
          <Route path="/technicians" element={<TechnicianList />} />
          <Route path="/technicians/create" element={<TechnicianForm />} />
          <Route path="/vehicle/model" element={<ModelList />} />
          <Route path="/vehicle/model/create" element={<ModelForm />} />
          <Route path="/vehicle/model" element={<ModelList />} />
          <Route path="/salesperson" element={<SalespersonList />} />
          <Route path="/salesperson/create" element={<SalespersonForm />} />
          <Route path="/salesperson/history" element={<SalespersonHistory />} />
          <Route path="/potentialcustomer" element={<PotentialCustomerList />} />
          <Route path="/potentialcustomer/create" element={<PotentialCustomerForm />} />
          <Route path="/salesrecord" element={<SalesRecordList />} />
          <Route path="/salesrecord/create" element={<SalesRecordForm />} />
          <Route path="/automobile" element={<AutomobileList />} />
          <Route path="/automobile/create" element={<AutomobileForm />} />
          <Route path="/appointment" element={<AppointmentList />} />
          <Route path="/appointment/create" element={<AppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
