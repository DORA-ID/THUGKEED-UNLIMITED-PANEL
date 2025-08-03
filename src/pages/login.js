import React from "react";

function Login() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="flex flex-col space-y-4 mt-4">
        <input type="email" placeholder="Email" className="p-2 border" />
        <input type="password" placeholder="Password" className="p-2 border" />
        <button className="bg-black text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
