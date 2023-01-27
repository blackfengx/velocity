import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/manufacturers/');

    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const deleteHat = async (id) => {
    const response = await fetch(`http://localhost:8100/api/manufacturers/${id}/`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    setManufacturers(
      manufacturers.filter((hat) => {
        return hat.id !== id;
      })
    )
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
        <br></br>
        <h1>Manufacturers</h1>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map(manufacturer => {
            return (
              <tr key={manufacturer.href}>
                <td>{manufacturer.name}</td>
                <td className="p-2 bd-highlight">
                  <button onClick={() => deleteHat(manufacturer.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/manufacturers/create" className="btn btn-primary btn-lg px-4 gap-3">Create a Manufacturer</Link>
      </div>
    </>
  );
}

export default ManufacturerList;
