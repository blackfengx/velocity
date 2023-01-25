import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TechnicianList() {
    const [technicians, setTechnicians] = useState([])


    const getData = async () => {
      const response = await fetch('http://localhost:8080/api/technicians/');
      console.log(response)

      if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technicians)
      }
    }
    useEffect(()=>{
      getData()
    }, [])

    // const deleteHat = async (id) => {
    //   const response= await fetch(`http://localhost:8080/api/technicians/${id}/`, {
    //     method: 'DELETE',
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //   const data = await response.json()
    //   console.log("manufacturer deleted")
    //     setTechnicians(
    //       technicians.filter((technician) =>{
    //         return technician.id !== id;
    //       })
    //     )
    // }

      return (
          <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee Number</th>
              </tr>
            </thead>
            <tbody>
              {technicians.map(technician => {
                return (
                  <tr key={technician.name}>
                    <td>{ technician.name }</td>
                    <td>{ technician.employee_number }</td>

                    {/* <td>
                      <button onClick={() => deleteHat(technician.id)}>Delete</button>
                      <button onClick={() => editHat(hat.id)}>Edit</button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/s" className="btn btn-primary btn-lg px-4 gap-3">Create a Salesperson</Link>
          </div>
          </>
      );
    }

    export default TechnicianList;
