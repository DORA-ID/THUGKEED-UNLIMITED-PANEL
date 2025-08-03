import React from "react";

function Register() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Register</h2>
      <form className="flex flex-col space-y-4 mt-4">
        <input type="text" placeholder="Username" className="p-2 border" />
        <input type="email" placeholder="Email" className="p-2 border" />
        <input type="password" placeholder="Password" className="p-2 border" />
        <button className="bg-black text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
