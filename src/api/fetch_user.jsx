import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const TableComponent = () => {
  const [fetchdata, setFetchdata] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/fetch_user_list").then(res => {
      console.log('res', res)
        var a = res.data.data
        console.log(a)
       
        setFetchdata(res.data.data);
        
        
        // console.log(data)
    })
   
      // .then(res => {
      //   // console.log(res.json())
      //   const intial = res.data;
      //   const final = intial.data.roles_list[0]
      //   console.log(typeof(final))
      //   console.log(final)
      //   const a = () =>final.map((x) => console.log(x))
      //   console.log(a)
      //   // const offerProducts =intial.map(item => item.data);
      //   setData([final]);
      //   // setData(res.data);
      //   console.log(setData)
      // })
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log("fetch",fetchdata)

  return (
    <div>
      <h2 style = {{textAlign:"center"}}>Table Data</h2>
      <div>
      <Table  striped bordered hover>
     
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Firstname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {fetchdata.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.firstname}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
        </Table>
    </div>
    </div>
  );
};

export default TableComponent;