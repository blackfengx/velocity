import Nav from './Nav';
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
  useEffect(()=>{
    getData()
  }, [])

  const deletemodel = async (id) => {
    const response= await fetch(`http://localhost:8090/api/models/${id}/`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    console.log("model deleted")
      setModels(
        models.filter((model) =>{
          return model.id !== id;
        })
      )
  }

    return (
        <>
        <table className="table table-striped">
          <thead>
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
                  <td>{ model.name }</td>
                  <td>{ model.picture_url }</td>
                  <td>{ model.manufacturer.name }</td>
                  <td>
                    <button onClick={() => deletemodel(model.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/vehicle/model/create" className="btn btn-primary btn-lg px-4 gap-3">Create a New Vehicle Model</Link>
        </div>
        </>
    );
  }

  export default ModelList;
