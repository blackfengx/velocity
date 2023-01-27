import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-menu dropdown-submenu">Inventory</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/automobile">List Automobiles</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/automobile/create">Create Automobiles</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/manufacturers">List Manufacturers</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/manufacturers/create">Create a Manufacturer</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/vehicle/model">List Vehicle Models</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/vehicle/model/create">Create a Vehicle Model</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-menu dropdown-submenu">Inventory</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/potentialcustomer">List Potential Customers</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/potentialcustomer/create">Create a Potential Customer</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/salesperson">List Salespeople</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/salesperson/history">List Salesperson History</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/salesperson/create">Create a Salesperson</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/salesrecord">List Sales Records</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/salesrecord/create">Create a Sales Record</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-menu dropdown-submenu">Appointments</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/appointment">List Appointments</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/appointment/create">Create Appointment</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/technicians">Technicians</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/technicians/create">Create a Technician</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
