
import React, {useState, useEffect} from 'react';

function AutomobileForm() {
  const [automobiles, setAutomobiles] = useState([])
  const [manufacturers, setManufacturers] = useState([])
  const [models, setModels] = useState([])
  const [formData, setFormData] = useState({
    vin: '',
    color: '',
    year: '',
    // manufacturer: '',
    model_id: '',
  })



  const getModelData = async () => {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  }

  useEffect(() => {
    getModelData();
  }, []);

//   const getManufacturerData = async () => {
//     const url = 'http://localhost:8100/api/manufacturers/';
//     const response = await fetch(url);

//     if (response.ok) {
//       const data = await response.json();
//       setManufacturers(data.manufacturers);
//     }
//   }

//   useEffect(() => {
//     getManufacturerData();
//   }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const modelUrl = 'http://localhost:8100/api/automobiles/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(modelUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        vin: '',
        color: '',
        year: '',
        // manufacturer: '',
        model_id: '',
      });
    }
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      ...formData,

      [inputName]: value
    });
  }





  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create an Automobile</h1>
          <form onSubmit={handleSubmit} id="create-conference-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
              <label htmlFor="name">VIN</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
              <label htmlFor="name">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
              <label htmlFor="name">Year</label>
            </div>
            {/* <div className="mb-3">
              <select onChange={handleFormChange} value={formData.manufacturer.name} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                <option value="">Choose a manufacturer</option>
                {manufacturers.map(manufacturer => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                  )
                })}
              </select>
            </div> */}
            <div>
              <select onChange={handleFormChange} value={formData.model_id.name} required name="model_id" id="model_id" className="form-select">
                <option value="">Choose a Model</option>
                {models.map(model => {
                  return (
                    <option key={model.id} value={model.id}>{model.name}</option>
                  )
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AutomobileForm;
