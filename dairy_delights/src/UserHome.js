import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";

export default function UserHome() {
  const {uid}=useParams();
  const url="http://localhost:3004/users";
  const[userData,setuserData]=useState([]);

  useEffect(function(){
    axios.get(`${url}/${uid}`)
    .then(resp=>{
      setuserData(resp.data);
    })
  

  .catch(err=>{
    alert(err);
  })
  },[])



  return (
    <div>
  Welcome Back! {userData.fullName}👋
  <Categories/>
    </div>
  );
}