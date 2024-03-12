import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const[users,setUsers]= useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((json)=>setUsers(json))
  },[])

  return (
    <div className='container-fluid'>
      <div className='text-center'>
      <div className='col-10 mx-auto'>
      <table className='table table-hover table-bordered'>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>WEBSITE</th>
          <th>ACTION</th>
        </thead>
        <tbody>
          {users.map(user=>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td className='m-0'><button className='btn btn-primary me-2'>Update</button>
            <button className='btn btn-danger'>Delete</button></td>
          </tr>
          )}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}

export default App;
