
import React, {useState, useEffect} from 'react';

function ModelsForm() {
  const [locations, setLocations] = useState([])
  const [formData, setFormData] = useState({
    fabric: '',
    style: '',
    color: '',
    picture_url: '',
    location: '',
  })

  const getData = async () => {
    const url = 'http://localhost:8100/api/locations/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setLocations(data.locations);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const locationUrl = 'http://localhost:8090/api/hats/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(locationUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        fabric: '',
        style: '',
        color: '',
        picture_url: '',
        location: '',
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
          <h1>Create a new Hat</h1>
          <form onSubmit={handleSubmit} id="create-conference-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.fabric} placeholder="Fabric" required type="text" name="fabric" id="fabric" className="form-control" />
              <label htmlFor="name">Fabric</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.style} placeholder="Style" required type="text" name="style" id="style" className="form-control" />
              <label htmlFor="name">Style</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
              <label htmlFor="name">Color</label>
            </div>
            <div className="mb-3">
              <label htmlFor="description">Picture URL</label>
              <textarea onChange={handleFormChange} value={formData.picture_url} className="form-control" id="picture_url" rows="3" name="picture_url"></textarea>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} value={formData.location.closet_name} required name="location" id="location" className="form-select">
                <option value="">Choose a location</option>
                {locations.map(location => {
                  return (
                    <option key={location.id} value={location.id}>{location.closet_name}</option>
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

export default ModelsForm;
