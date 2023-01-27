import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SalespersonList() {
    const [salesperson, setSalesperson] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8090/api/salesperson/')

        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <>
        <table className="table table-striped">
            <thead>
            <br></br>
            <h1>Salespeople</h1>
                <tr>
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
        <Link to="/salesperson/create" className="btn btn-primary btn-lg px-4 gap-3">Create a Salesperson</Link>
    </div>
        </>
    )
}
export default SalespersonList
