
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'

const Table = () => {
  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Name',
      selector: row => row.firstName,
      sortable: true
    },
    {
      name: 'Date of Birth',
      selector: row => row.birthDate,
      sortable: true
    },
    {
      name: 'Comapny',
      selector: row => row.company,
      sortable: true
    },
    {
      name: 'Post',
      selector: row => row.title,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Phone no.',
      selector: row => row.phone
    }
  ]
  const [data, setData] = useState([]);
  const [search , setSearch] = useState('');
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const userInfo = await response.json();
        setData(userInfo.users);
        setUser(userInfo.users);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
   
  }, []);
  useEffect(()=>{
    let userFromInput = data.filter((e)=>{
      return e.firstName.toLowerCase().match(search);
    })
    setUser(userFromInput);
  },[search , data])
 

  const userData = user.map(user => ({
    id: user.id,
    firstName: user.firstName,
    birthDate: user.birthDate,
    company: user.company.name,
    title: user.company.title,
    email: user.email,
    phone: user.phone
  }));
  return (
    <>

      <div className="container-fluid border rounded shadow mt-5 shadow">
        <div className=" border-bottom p-2 d-flex">
          <i className="bi bi-table me-3"></i> <p>Table Example</p>
        </div>
        <div className="chart p-auto  ">
          <div className=" m-3 ">
            <input type="email" className="form-control w-25 shadow" onChange={(e)=>setSearch(e.target.value.toLowerCase())} id="floatingInput" placeholder="Search Name..."/>             
          </div>
          <DataTable
            columns={columns}
            data={userData}
            pagination
            fixedHeader={true}
            dense
            highlightOnHover
          // fixedHeaderScrollHeight={'500px'}
          />
        </div>
        <div className=" border-top pt-2 text-secondary d-flex">
          <p>Updated yesterday at 11:59 PM</p>
        </div>
      </div>
    </>
  )
}

export default Table
