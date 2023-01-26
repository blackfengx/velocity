import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SalespersonHistory() {
    const [sales_record, setSalesRecord] = useState([])
    const [salesperson, setSalesperson] = useState([])
    const [filterValue, setFilterValue] = useState([])

    const [formData, setFormData] = useState({
        automobile: '',
        salesperson: '',
        customer: '',
        sale_price: '',
    })

    const getSalesData = async () => {
        const response = await fetch('http://localhost:8090/api/sales_record/')

        if (response.ok) {
            const data = await response.json();
            setSalesRecord(data.sales_record)
        }
    }

    useEffect(()=>{
        getSalesData()
    }, [])

    const getSalespersonData = async () => {
        const response = await fetch('http://localhost:8090/api/salesperson/')

        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson)
        }
    }

    useEffect(()=>{
        getSalespersonData()
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value)
        setFilterValue(e.target.value)
      }

      const filteredName = () => {
        return sales_record.filter(sales_record => sales_record.salesperson.name.includes(filterValue))
      }


    return (
        <>
            <select onChange={handleChange} value={formData.salesperson.name} required name="salesperson_name" id="salesperson_name" className="form-select">
                <option value="">Choose a Salesperson</option>
                {sales_record.map(sales_record => {
                  return (
                    <option key={sales_record.salesperson.name} value={sales_record.salesperson.name}>{sales_record.salesperson.name}</option>
                  )
                })}
            </select>

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Automobile</th>
                    <th>Salesperson</th>
                    <th>Employee Number</th>
                    <th>Customer</th>
                    <th>Sale Price</th>
                </tr>
            </thead>
        <tbody>
        {filteredName().map(sales_record => {
        return (
            <tr key={sales_record.id}>
              <td>{ sales_record.automobile.vin }</td>
              <td>{ sales_record.salesperson.name }</td>
              <td>{ sales_record.salesperson.employee_number }</td>
              <td>{ sales_record.customer.name }</td>
              <td>{ sales_record.sale_price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/salesrecord/create" className="btn btn-primary btn-lg px-4 gap-3">Create a Sale Record</Link>
    </div>
        </>
    )
}
export default SalespersonHistory






{/* <select onChange={handleChange} value={formData.name} required name="name" id="employee_number" className="form-select">
                <option value="">Choose a Salesperson</option>
                {salesperson.map(salesperson => {
                  return (
                    <option key={salesperson.id} value={salesperson.id}>{salesperson.name}</option>
                  )
                })}
            </select> */}
