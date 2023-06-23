import React, { useState } from 'react'
import Navbar from './Navbar';

const UserProfile = () => {
    const [user, setUser] = useState ([]);
    
    //get user details
    const handleSubmit = async () => {
    //e.preventDefault(); //prevent from reload
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });
    const json = await response.json();
    //setUser(json);    
    if (json.success) {
        setUser(json);
        localStorage.setItem("image",json.image);
      //showAlert("Loggrd In successfully", "success");
    } else {
      //showAlert("Invalid Details", "danger");
    }
  };
  //
  return (
    
    <>
    <Navbar/>
      <section className='hero-section'>
        <div className="d-flex">
            <img src={user.image} style={{width:"300px",height:"300px",borderRadius:"100px"}}/>
        </div>
        
      </section>
    </>
  )
}

export default UserProfile
