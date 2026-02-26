import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function AdminHome(){

    const {uid}=useParams();
    


    const[adminData,setAdminData]=useState([]);
    const  url="http://localhost:3004/users";
    useEffect(()=>{
        axios.get(`${url}/${uid}`)
        .then(resp=>{
            setAdminData(resp.data);
        })
        .catch(err=>{
            alert(err);
        })
    },[]);
    return(
        <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '16px'
        }}>
          Welcome Back! {adminData.fullName}👋
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          lineHeight: '1.6'
        }}>
          We're glad to see you again. Start exploring your dashboard.
        </p>
      </div>
    </div>
    )
}