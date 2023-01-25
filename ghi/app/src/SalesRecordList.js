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
                    <th>Automobile</th>
                    <th>Salesperson</th>
                    <th>Customer</th>
                    <th>Sale Price</th>
                </tr>
            </thead>
        <tbody>
        {sales_record.map(sales_record => {
          return (
            <tr key={sales_record.name}>
              <td>{ sales_record.automobile.vin }</td>
              <td>{ sales_record.salesperson }</td>
              <td>{ sales_record.customer }</td>
              <td>{ sales_record.sale_price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/manufacturers/create" className="btn btn-primary btn-lg px-4 gap-3">Create a Sale Record</Link>
    </div>
        </>
    )
}
export default SalesRecordList
