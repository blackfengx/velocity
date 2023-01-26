
import React, { useState, useEffect } from 'react';

function AppointmentForm() {
    // const [appointments, setAppointments] = useState([])
    const [automobiles, setAutomobiles] = useState([])
    const [technicians, setTechnicians] = useState([])

    const [formData, setFormData] = useState({
        owner_name: '',
        date: '',
        time: '',
        technician: '',
        reason: '',
        vin_num: '',
    })

    const getTechnicianData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }

    }

    useEffect(() => {
        getTechnicianData();
    }, []);



    const getAutomobileData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.automobiles);
            // console.log(data.autos)
        }

    }

    useEffect(() => {
        getAutomobileData();
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

        const serviceUrl = 'http://localhost:8080/api/service/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(serviceUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                owner_name: '',
                date: '',
                time: '',
                technician: '',
                reason: '',
                vin_num: '',

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
                    <h1>Create an Appointment</h1>
                    <form onSubmit={handleSubmit} id="create-conference-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.vin} placeholder="Owner Name" required type="text" name="owner_name" id="owner_name" className="form-control" />
                            <label htmlFor="name">Owner Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.date} placeholder="Date" required type="text" name="date" id="date" className="form-control" />
                            <label htmlFor="name">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.time} placeholder="Time" required type="text" name="time" id="time" className="form-control" />
                            <label htmlFor="name">Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                            <label htmlFor="name">Reason</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.vin_num} placeholder="VIN" required type="text" name="vin_num" id="vin_num" className="form-control" />
                            <label htmlFor="name">VIN</label>
                        </div>
                        {/* <div>
                            <select onChange={handleFormChange} value={formData.vin_num} required name="vin_num" id="vin_num" className="form-select">
                                <option value="">Choose a VIN</option>
                                {automobiles.map(automobile => {
                                    return (
                                        <option key={automobile.autos.id} value={automobile.autos.vin}>{automobile.autos.vin}</option>
                                    )
                                })}
                            </select>
                        </div> */}
                        <br></br>
                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.technician} required name="technician" id="technician" className="form-select">
                                <option value="">Choose a Technician</option>
                                {technicians.map(technician => {
                                    return (
                                        <option key={technician.id} value={technician.name}>{technician.name}</option>
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

export default AppointmentForm;
