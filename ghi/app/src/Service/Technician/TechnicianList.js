import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TechnicianList() {
  const [technicians, setTechnicians] = useState([])


  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/technicians/');

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const deletetechnician = async (id) => {
    const response = await fetch(`http://localhost:8080/api/technicians/${id}/`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    setTechnicians(
      technicians.filter(technician => {
        return technician.id !== id;
      })
    )
  }

  return (
    <>
    <br></br>
    <h1>Technicians</h1>
      <br></br>
      <table className="table table-striped shadow p-3 mb-5 bg-white rounded">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map(technician => {
            return (
              <tr key={technician.name}>
                <td>{technician.name}</td>
                <td>{technician.employee_number}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deletetechnician(technician.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/technicians/create" className="btn btn-primary btn-lg px-4 gap-3">Create a Technician</Link>
      </div>
    </>
  );
}

export default TechnicianList;
