import React from 'react'


function Login(params) {
    return(
        <>
        <section className='container my-5'>
            <h5 className='hero-heading fs-1'>Login</h5>
            <p>Let's get started</p>
            <form>
                <div className="mb-3 text-start col-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label is-valid">Email address</label>
                    <input type="email" className="form-control w-30" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 text-start col-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label is-valid">Password</label>
                    <input type="password" className="form-control w-30" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="my-3 col-6">
                    <button className="btn hero" type="submit">Login</button>
                </div>
            </form>
        </section>
        </>
    );
}
export default Login;