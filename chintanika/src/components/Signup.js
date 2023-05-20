import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Signup(params) {

    const onChange=()=>{
        
    }

    return(
        <>
        <section className='container my-5'>
            <h5 className='hero-heading fs-1'>Create your account</h5>
            <p>Let's get started</p>
            <form onSubmit>
               <div className="mb-3 text-start col-6">
                    <label htmlFor="uname" className="form-label">Name</label>
                    <input type="text" className="form-control w-30" id="uname" placeholder="" 
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3 text-start col-6">
                    <label htmlFor="email" className="form-label is-valid">Email address</label>
                    <input type="email" className="form-control w-30" id="email" placeholder="name@example.com"
                    onChange={onChange}
                    />
                </div>
                <div className="mb-3 text-start col-6">
                    <label htmlFor="password" className="form-label is-valid">Password</label>
                    <input type="password" className="form-control w-30" id="password" placeholder=""
                    onChange={onChange}
                    />
                </div>
                <div className="mb-3 text-start col-6">
                    <label htmlFor="cpassword" className="form-label is-valid">Confirm Password</label>
                    <input type="password" className="form-control w-30" id="cpassword" placeholder="" onChange={onChange}/>
                </div>
                <div className="my-3 col-6">
                    <Link className="btn hero" to="/login">Sign Up</Link>
                </div>
            </form>
        </section>
        </>
    );
}
export default Signup;