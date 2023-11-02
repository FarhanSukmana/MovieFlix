import React, { useState } from "react";
import { UserAuth } from "../Acc/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
const navigate=useNavigate()

const {user, login}=UserAuth()

const btnSubmit = async(e) =>{
  e.preventDefault()
  try{
    await login(email, password)
    navigate('/')
  }catch(error){
    alert(error)
  }
  
}

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1459&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[350px] h-[500px] bg-black/80 mx-auto text-white ">
            <div className="flex justify-center mx-auto pt-4">
              <h1 className=" text-3xl font-bold">LOGIN</h1>
            </div>
            <form onSubmit={btnSubmit} className="flex flex-col p-6 pt-12 ">
              <div className="flex flex-col">
                <label className="text-xl font-semibold pb-2">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 py-2 focus:outline-none bg-gray-700"
                  type="email"
                  placeholder="Masukan Email"
                />
              </div>

              <div className="flex flex-col pt-12">
                <label className="text-xl font-semibold pb-2">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-2 py-2  focus:outline-none bg-gray-700"
                  minLength={6}
                  type="password"
                  placeholder="Masukan Password"
                />
              </div>
              <div className="my-4 justify-center flex">
                <button className="rounded bg-red-600 px-6 py-2 font-bold active:bg-red-800">
                  SUBMIT
                </button>
              </div>
            </form>

            <div className="mt-14">
              <p className="text-gray-700 pl-4">
                Buat Akun ?
                <span>
                  <Link to="/signup" className="pl-2 text-white">
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
