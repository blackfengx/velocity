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
      <table className="table table-striped">
        <thead>
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
                  <button onClick={() => deleteAutomobile(auto.id)}>Delete</button>
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
