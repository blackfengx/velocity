import { useEffect, useState } from 'react';

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
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Salespeople</th>
                </tr>
            </thead>
        <tbody>
        {salesperson.map((salesperson, index) => {
          return (
            <tr key={index}>
              <td>{ salesperson.name }</td>
              <td>{ salesperson.employee_number }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    )
}
export default SalespersonList
