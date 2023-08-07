import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/Signup.css'
function Signup() {
    return (
            <>
       {/*Navbar */}
       <div className='container-fluid'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/Home"><a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/Sigin"><a class="nav-link">Signup</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
       {/*Form for signup */}
           <div className='container-fluid'>
            <div className='row  mt-5 form-bg'>
              <div className='row text-center'><h2>Signup</h2></div>
      <div className='col-sm-3 col-md-4'></div>
      <div className='col-sm-6 col-md-4'>
      <div class="form-floating mb-3 mt-3">
  <input type="text" class="form-control" id="floatingInput" />
  <label for="floatingInput" className='floating-label'>FirstName</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" />
  <label for="floatingInput" className='floating-label'>LastName</label>
</div>
      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" />
  <label for="floatingInput" className='floating-label'>Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" />
  <label for="floatingPassword">Password</label>
</div>
<p className='row mt-3'>
  <div className='col-2'></div>
  <div className='col-4'>click here to login</div>
  <div className='col-4'><Link to="/Sigin"><a>click here</a></Link></div>
</p>
<div className='text-center'>
<button type='button' className='btn'>Submit</button></div>
</div>
<div className='col-sm-3 col-md-4'></div>
</div>
</div>
            </>
     
    );
}
export default Signup;