import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import Spiner from "./Spinner"
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { userData } from '../redux/actions/action'


const Register = () => {

   const [inputdata, setInputData] = useState({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      adult: "",
      child: "",
      checkin: "",
      checkout: "",
      roomtype: ""

   });


   const [status, setStatus] = useState("Active");

   const [showspin, setShowSpin] = useState(true);

   const navigate = useNavigate();


   // setInput Value
   const setInputValue = (e) => {
      const { name, value } = e.target;
      console.log(e.target, '==>')
      setInputData({ ...inputdata, [name]: value })
   }

   const setStatusValue = (e) => {
      setStatus(e.value)
   }


   const dispatch = useDispatch();


   //submit userdata
   const submitUserData = async (e) => {
      e.preventDefault();

      const { fname, lname, email, mobile, adult, child, checkin, checkout } = inputdata;

      if (fname === "") {
         toast.error("First name is Required !")
      } else if (lname === "") {
         toast.error("Last name is Required !")
      } else if (email === "") {
         toast.error("Email is Required !")
      } else if (adult === "") {
         toast.error("Email is Required !")
      } else if (child === "") {
         toast.error("Email is Required !")
      } else if (checkin === "") {
         toast.error("Email is Required !")
      } else if (checkout === "") {
         toast.error("Email is Required !")
      } else if (!email.includes("@")) {
         toast.error("Enter Valid Email !")
      } else if (mobile === "") {
         toast.error("Mobile is Required !")
      } else if (mobile.length > 10) {
         toast.error("Enter Valid Mobile!f")
      } else if (status === "") {
         toast.error("Status is Required !")
      } else {



         // console.log(data, inputdata);
         dispatch(userData(inputdata))

         setInputData({
            ...inputdata,
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            gender: "",
            location: ""
         });
         navigate('/admin')



      }

   }

   useEffect(() => {


      setTimeout(() => {
         setShowSpin(false)
      }, 1200)
   }, [])


   return (
      <>
         {
            showspin ? <Spiner /> : <div className="container">
               <h2 className='text-center mt-1'>Register Your Details</h2>
               <Card className='shadow mt-3 p-3'>


                  <Form>
                     <Row>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                           <Form.Label>First name</Form.Label>
                           <Form.Control type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder='Enter FirstName' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                           <Form.Label>Last Name</Form.Label>
                           <Form.Control type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder='Enter LastName' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='Enter Email' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                           <Form.Label>Adults</Form.Label>
                           <Form.Control type="email" name='adult' value={inputdata.adults} onChange={setInputValue} placeholder='Enter No. of Adults' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                           <Form.Label>Children's</Form.Label>
                           <Form.Control type="email" name='child' value={inputdata.child} onChange={setInputValue} placeholder='Enter No. of Children' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                           <Form.Label>Mobile</Form.Label>
                           <Form.Control type="text" name='mobile' value={inputdata.mobile} onChange={setInputValue} placeholder='Enter Mobile' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                           <Form.Label>Select Room Type</Form.Label>
                           <Form.Select className="mb-3 col-lg-6" controlId="formBasicEmail" name="roomtype" onChange={setInputValue} >
                              <option>Select Your Room Type</option>
                              <option value="A1">A1</option>
                              <option value="B2">B1</option>
                              <option value="C3">C1</option>
                              <option value="D4">D1</option>
                              <option value="E5">E1</option>
                           </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                           <div className='row'>
                              <div className="mb-3 col-lg-6">
                                 <Form.Label>Check-In</Form.Label>
                                 <Form.Control type="date" name='checkin' value={inputdata.checkin} onChange={setInputValue} placeholder='Enter Checkin' />
                              </div>
                              <div className="mb-3 col-lg-6">
                                 <Form.Label>Check-Out</Form.Label>
                                 <Form.Control type="date" name='checkout' value={inputdata.checkout} onChange={setInputValue} placeholder='Enter Checkout' />
                              </div>
                           </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={submitUserData}>
                           Submit
                        </Button>
                     </Row>




                  </Form>
               </Card>

               <p className='text-center'> <Link to="/admin">Go To Admin</Link></p>
               <ToastContainer position="top-center" />
            </div>
         }

      </>
   )
}

export default Register