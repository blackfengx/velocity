import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SalespersonList from './Sales/Salesperson/SalespersonList';
import SalespersonForm from './Sales/Salesperson/SalespersonForm';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import TechnicianList from './TechnicianList';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import PotentialCustomerList from './Sales/PotentialCustomer/PotentialCustomerList';
import PotentialCustomerForm from './Sales/PotentialCustomer/PotentialCustomerForm';
import SalesRecordList from './Sales/SalesRecord.js/SalesRecordList';
import SalesRecordForm from './Sales/SalesRecord.js/SalesRecordForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import SalespersonHistory from './Sales/Salesperson/SalespersonHistory';


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
