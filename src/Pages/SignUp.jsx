import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import "./Signup.css";


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
    

    setloading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if (data.success === false) {
      setloading(false);
       seterror(data.message);
      
      return;
    }
    setloading(false);
    seterror(null)
    Navigate('/sign-in')
  }catch (error) {
      setloading(false);
      seterror(error.message);
  }
    
  };
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          autoComplete="off"
          className="border p-3 rounded"
          id="username"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          placeholder="email"
          autoComplete="off"
          className="border p-3 rounded"
          id="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded"
          id="password"
          onChange={handleChange}
        ></input>
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 "
        >
          {loading ? "loading..." : "SignUp"}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600">SignIn</span>
        </Link>
      </div>
      {error&&<p className="text-red-500">{error}</p>}
    </div>
  );
}
