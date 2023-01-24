import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SalespersonList from './SalespersonList';
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/salesperson" element={<SalespersonList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
