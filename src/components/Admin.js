import React, { useRef, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import { useSelector } from 'react-redux';


const Admin = ({ }) => {

   const [searchedVal, setSearchedVal] = useState("");



   const tableRef = useRef(null);


   const getData = useSelector((state) => state.userreducer.users);


   const { onDownload } = useDownloadExcel({
      currentTableRef: tableRef.current,
      filename: 'Users table',
      sheet: 'Users'
   })

   return (
      <>
         <div className="container">

            <b htmlFor="search">
               Search Name:
               <div className="my-3">
                  <input id="search" type="text" onChange={(e) => setSearchedVal(e.target.value)} />
               </div>
            </b>

            <button onClick={onDownload} className="col-lg-2 my-4" > Export to excel </button>
            <Row>



               <div className="col mt-0">
                  <Card className='shadow'>
                     <Table className='align-items-center' responsive="sm" ref={tableRef}>
                        <thead className='thead-dark'>
                           <tr className='table-dark'>
                              <th>FullName</th>
                              <th>Email</th>
                              <th>Mobile</th>
                              <th>Adult</th>
                              <th>Child</th>
                              <th>Check-in</th>
                              <th>Check-out</th>
                              <th>Room Type</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              getData.length > 0 ? getData.filter((row) =>
                                 !searchedVal.length || row.roomtype
                                    .toString()
                                    .toLowerCase()
                                    .includes(searchedVal.toString().toLowerCase())
                              ).map((element, index) => {
                                 return (
                                    <>

                                       <tr>
                                          <td>{element.fname + element.lname}</td>
                                          <td>{element.email}</td>
                                          <td>{element.mobile}</td>
                                          <td>{element.adult}</td>
                                          <td>{element.child}</td>
                                          <td>{element.checkin}</td>
                                          <td>{element.checkout}</td>
                                          <td>{element.roomtype}</td>

                                       </tr>
                                    </>
                                 )
                              }) : <div className='no_data text-center'>NO Data Found</div>
                           }


                        </tbody>
                     </Table>

                     <p className='text-center'><Link to="/"> User Form </Link></p>

                  </Card>
               </div>
            </Row>
            <ToastContainer />
         </div>
      </>
   )
}

export default Admin