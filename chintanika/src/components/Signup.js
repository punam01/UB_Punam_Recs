import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Signup(params) {

    const [data,setData]=useState(
        {
            uname:'',
            email:'',
            password:''
        }
    );

    const [error,setError]=useState(
        {
            error:{},
            isError:false
        }
    );

    //dynamic value change
    const handleChange=(e,field)=>{
        setData({...data,[field]:e.target.value});
    }

    //submit form logic
    const submitForm=(e)=>{
        //prevent from reloading page
        e.preventDefault();

        //call api
    }

    return(
        <>
        <section className='container my-5'>
            <h5 className='hero-heading fs-1'>Create your account</h5>
            <p>Let's get started</p>
            <form onSubmit={submitForm}>
               <div className="mb-3 text-start col-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control w-30" id="exampleFormControlInput1" placeholder=""
                        onChange={(data)=>handleChange(data,"uname")}
                        value={data.uname}
                    />
                </div>
                <div className="mb-3 text-start col-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label is-valid">Email address</label>
                    <input type="email" className="form-control w-30" id="exampleFormControlInput1" placeholder="name@example.com"
                    onChange={(data)=>handleChange(data,"email")}
                    value={data.email}
                    />
                </div>
                <div className="mb-3 text-start col-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label is-valid">Password</label>
                    <input type="password" className="form-control w-30" id="exampleFormControlInput1" placeholder=""
                    onChange={(data)=>handleChange(data,"password")}
                    value={data.password}
                    />
                </div>
                <div className="mb-3 text-start col-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label is-valid">Confirm Password</label>
                    <input type="password" className="form-control w-30" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="form-check col-6">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" unchecked/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        I agree to all Terms, Privacy Policy and Fees
                    </label>
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