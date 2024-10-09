import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'



const Register = () => {

  

  const navigate = useNavigate();//redirect
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: ""

  })
  const setdata = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }


  const addinpdata = async (e) => {

    e.preventDefault();
    const { name, email, age, mobile, work, address, description } = inpval;
    const res = await fetch("/register", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, age, mobile, work, address, description
      })
    })
    const data= await res.json();
    console.log(data);

    if(res.status === 422 || !data){
      alert("error");
      console.log("error");
    }else{
      alert("data added");
      console.log("data added");
      navigate('/');//redirect
    }
  }



  return (
    <div className='container'>
      <NavLink to="/">home</NavLink>

      <form className='mt-5'>
        <div className='row'>
          <div class="mb-3  col-lg-6 col-md-6 col-12" >
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" name='name' value={inpval.name} onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="email" name='email' value={inpval.email} onChange={setdata} class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Age</label>
            <input type="text" name='age' value={inpval.age} onChange={setdata} class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Mobile</label>
            <input type="number" name='mobile' value={inpval.mobile} onChange={setdata} class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Work</label>
            <input type="text" name='work' value={inpval.work} onChange={setdata} class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Address</label>
            <input type="text" name='address' value={inpval.address} onChange={setdata} class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Description</label>
            <textarea name='description' id='' value={inpval.description} onChange={setdata} className='form-control' cols="20" rows="5"></textarea>
          </div>

          <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
        </div>
      </form>

    </div>

  )

}


export default Register