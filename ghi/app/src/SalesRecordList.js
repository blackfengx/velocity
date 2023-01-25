import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SalesRecordList() {
    const [sales_record, setSalesRecord] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8090/api/sales_record/')

        if (response.ok) {
            const data = await response.json();
            setSalesRecord(data.sales_record)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Employee Number</th>
                    <th>Name</th>
                    <th>Employee Number</th>
                </tr>
            </thead>
        <tbody>
        {salesperson.map(salesperson => {
          return (
            <tr key={salesperson.name}>
              <td>{ salesperson.name }</td>
              <td>{ salesperson.employee_number }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/manufacturers/create" className="btn btn-primary btn-lg px-4 gap-3">Create a Manufacturer</Link>
    </div>
        </>
    )
}
export default SalespersonList
