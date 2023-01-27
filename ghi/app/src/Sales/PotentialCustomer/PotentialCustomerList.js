import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PotentialCustomerList() {
    const [potential_customer, setPotentialCustomer] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8090/api/potential_customer/')

        if (response.ok) {
            const data = await response.json();
            setPotentialCustomer(data.potential_customer)
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
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>ID</th>
                </tr>
            </thead>
        <tbody>
        {potential_customer.map(potential_customer => {
          return (
            <tr key={potential_customer.name}>
              <td>{ potential_customer.name }</td>
              <td>{ potential_customer.address }</td>
              <td>{ potential_customer.phone_number }</td>
              <td>{ potential_customer.id }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/potentialcustomer/create" className="btn btn-primary btn-lg px-4 gap-3">Create a Customer</Link>
    </div>
        </>
    )
}
export default PotentialCustomerList
