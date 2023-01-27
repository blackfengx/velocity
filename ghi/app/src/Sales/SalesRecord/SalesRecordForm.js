import React, {useState, useEffect} from 'react';

function SalesRecordForm() {
  const [formData, setFormData] = useState({
    automobile: '',
    salesperson: '',
    customer: '',
    sale_price: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const salesRecordUrl = 'http://localhost:8090/api/sales_record/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(salesRecordUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        automobile: '',
        salesperson: '',
        customer: '',
        sale_price: '',
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
          <h1>Create a New Sales Record</h1>
          <form onSubmit={handleSubmit} id="create-conference-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.automobile} placeholder="Automobile" required type="text" name="automobile" id="automobile" className="form-control" />
              <label htmlFor="name">Automobile (VIN Number)</label>
              <small id ="emailHelp" class="form-text text-muted">Enter Valid 17 character VIN from inventory</small>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.salesperson} placeholder="Salesperson" required type="text" name="salesperson" id="salesperson" className="form-control" />
              <label htmlFor="name">Salesperson</label>
              <small id ="emailHelp" class="form-text text-muted">Input Valid Salesperson name</small>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.customer} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
              <label htmlFor="name">Customer</label>
              <small id ="emailHelp" class="form-text text-muted">Input Valid Customer name</small>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.sale_price} placeholder="Sale Price" required type="text" name="sale_price" id="sale_price" className="form-control" />
              <label htmlFor="name">Sale Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalesRecordForm;
