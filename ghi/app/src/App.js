import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SalespersonList from './SalespersonList';
import SalespersonForm from './SalespersonForm';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import TechnicianList from './TechnicianList';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import PotentialCustomerList from './PotentialCustomerList';
import PotentialCustomerForm from './PotentialCustomerForm';
import SalesRecordList from './SalesRecordList';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';



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
          <Route path="/vehicle/model" element={<ModelList />} />
          <Route path="/vehicle/model/create" element={<ModelForm />} />
          <Route path="/vehicle/model" element={<ModelList />} />
          <Route path="/salesperson" element={<SalespersonList />} />
          <Route path="/salesperson/create" element={<SalespersonForm />} />
          <Route path="/potentialcustomer" element={<PotentialCustomerList />} />
          <Route path="/potentialcustomer/create" element={<PotentialCustomerForm />} />
          <Route path="/salesrecord" element={<SalesRecordList />} />
          <Route path="/automobile" element={<AutomobileList />} />
          <Route path="/automobile/create" element={<AutomobileForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
