import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentList from './Service/Appointment/AppointmentList';
import AppointmentForm from './Service/Appointment/AppointmentForm';
import AutomobileList from './Inventory/Automobile/AutomobileList';
import AutomobileForm from './Inventory/Automobile/AutomobileForm';
import ManufacturerForm from './Inventory/Manufacturer/ManufacturerForm';
import ManufacturerList from './Inventory/Manufacturer/ManufacturerList';
import ModelList from './Inventory/Vehicle Model/ModelList';
import ModelForm from './Inventory/Vehicle Model/ModelForm';
import PotentialCustomerList from './Sales/PotentialCustomer/PotentialCustomerList';
import PotentialCustomerForm from './Sales/PotentialCustomer/PotentialCustomerForm';
import SalespersonList from './Sales/Salesperson/SalespersonList';
import SalespersonForm from './Sales/Salesperson/SalespersonForm';
import SalespersonHistory from './Sales/Salesperson/SalespersonHistory';
import SalesRecordList from './Sales/SalesRecord/SalesRecordList';
import SalesRecordForm from './Sales/SalesRecord/SalesRecordForm';
import TechnicianList from './Service/Technician/TechnicianList';
import TechnicianForm from './Service/Technician/TechnicianForm';


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
