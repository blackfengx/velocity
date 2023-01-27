import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ModelList() {
  const [models, setModels] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/models/');

    if (response.ok) {
      const data = await response.json();
      setModels(data.models)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <table className="table table-striped">
        <thead>
        <br></br>
        <h1>Vehicle Models</h1>
          <tr>
            <th>Name</th>
            <th>Picture URL</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {models.map(model => {
            return (
              <tr key={model.href}>
                <td>{model.name}</td>
                <td className='w-25 p-3' ><img className='img-thumbnail' src={model.picture_url} /></td>
                <td>{model.manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/vehicle/model/create" className="btn btn-primary btn-lg px-4 gap-3">Create a Vehicle Model</Link>
      </div>
    </>
  );
}

export default ModelList;
