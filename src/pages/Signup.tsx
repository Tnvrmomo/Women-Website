
import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="text-2xl font-bold text-primary">EZ SHOP</Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
