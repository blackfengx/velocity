import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AppointmentList() {
  const [appointments, setAppointments] = useState([])
  const [filterValue, setFilterValue] = useState("")

  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/service/');

    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const deleteAppointment = async (id) => {
    const response = await fetch(`http://localhost:8080/api/service/${id}/`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    setAppointments(
      appointments.filter((appointment) => {
        return appointment.id !== id;
      })
    )
  }

  const handleChange = (e) => {
    setFilterValue(e.target.value)
  }

  const filteredVin = () => {
    return appointments.filter(appointment => appointment.vin_num.vin.includes(filterValue))
  }

  return (
    <>
      <br></br>
      <div className="form-floating mb-3">
        <input placeholder="VIN" onChange={handleChange} required type="text" className="form-control" />
        <label htmlFor="name">VIN</label>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>VIN</th>
          </tr>
        </thead>
        <tbody>
          {filteredVin().map(appointment => {
            return (
              <tr key={appointment.vin_num.vin}>
                <td>{appointment.owner_name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.technician.name}</td>
                <td>{appointment.reason}</td>
                <td>{appointment.vin_num.vin}</td>
                <td>
                  <button onClick={() => deleteAppointment(appointment.id)}>Cancel</button>
                </td>
                <td>
                  <button onClick={() => deleteAppointment(appointment.id)}>Completed</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/appointment/create" className="btn btn-primary btn-lg px-4 gap-3">Create an Appointment</Link>
      </div>
    </>
  );
}

export default AppointmentList;
