import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AutomobileList() {
  const [autos, setAutos] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/automobiles/');

    if (response.ok) {
      const data = await response.json();
      setAutos(data.autos)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const deleteAutomobile = async (id) => {
    const response = await fetch(`http://localhost:8100/api/automobiles/${id}/`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    setAutos(
      autos.filter((auto) => {
        return auto.id !== id;
      })
    )
  }

  return (
    <>
      <br></br>
      <h1>Automobiles</h1>
      <br></br>
      <table className="table table-striped shadow p-3 mb-5 bg-white rounded">
        <thead>
<<<<<<< HEAD
          <br></br>
            <h1>Automobiles</h1>
=======
>>>>>>> bde7ee106a6edba98e31bb6f17d9762c146d92b7
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {autos.map(auto => {
            return (
              <tr key={auto.href}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteAutomobile(auto.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/automobile/create" className="btn btn-primary btn-lg px-4 gap-3">Create an Automobile</Link>
      </div>
    </>
  );
}

export default AutomobileList;
