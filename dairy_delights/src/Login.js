import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { navigate, useNavigate } from "react-router-dom";
import { DataContext } from "./App";


export default function Login() {
    const navigate=useNavigate();

    const{image,setImage}=useContext(DataContext);
    const{stdId,setStdId}=useContext(DataContext);
    const{name,setName}=useContext(DataContext);
    const{setIsLoggIn}=useContext(DataContext);
    const{role,setRole}=useContext(DataContext)

    const{register,
         handleSubmit,
         formState:{errors, isValid} }=useForm(
            {
                mode:"onChange"
            }
         )

         // this for when admin and user in the same array
         
let loginCheck=(data)=>{
 
    
    let url="http://localhost:3004/users?email="+data.email;
    axios.get(url)
    .then(resp=>{
        if(resp.data.length===0){
            alert("Login failed- EmailId id Wrong");
             setIsLoggIn(false);
          
        }
        else{
            if(resp.data[0].Password===data.password){
                alert("Login Success");
                setIsLoggIn(true);
                if(resp.data[0].role==="ROLE_ADMIN"){
                    console.log(resp.data[0].image);
                    setImage(resp.data[0].image);
                      setStdId(resp.data[0].id);
                    
                    setName(resp.data[0].fullName);
                    console.log(image);
                    navigate(`/home`);
                    setRole("ROLE_ADMIN");

                    
           
                // navigate(`/adminhome/${resp.data[0].id}`)
                 }

                 else{
                    // navigate(`/userhome/${resp.data[0].id}`);
                    // navigate(`/home`)
                    setImage(resp.data[0].image);
                    setName(resp.data[0].fullName);
                    navigate(`/home`);
                    setRole("ROLE_USER");
                    setStdId(resp.data[0].id);
                 }
                }

           
            
            else{
                  alert("login failed, password wrong");
                  setIsLoggIn(false);
                   
            }
        }
    }
   
)
 .catch(err=>{
        alert(err);
    })
}

        //    let loginCheck=(data)=>{
        //     axios.get(`http://localhost:3004/admin?email=${data.email}`)
        //     .then(adminRsp=>{
        //         if(adminRsp.data.length>0){
        //             // email is  found
        //             const admin=adminRsp.data[0];
        //             if(admin.password===data.Password){
        //                 alert("Admin Login Is Sucess");
        //                 setIsLoggIn(true);
        //                 setImage(admin.image);
        //                 setName(admin.fullName);
        //                 setRole("ROLE_ADMIN");
        //                 navigate(`/home`);
        //                  setStdId(admin.id);
        //             }
        //             else{
        //                 alert("WRONG PASSWORD FOR ADMIN!!");
        //                 setIsLoggIn(false);
        //             }

        //         }

        //         else{
        //             // email not found in users
        //             axios.get(`http://localhost:3004/users?email=${data.email}`)
        //             .then(userResp=>{
        //                 if(userResp.data.length===0){
        //                     alert("LOGIN FAILED EMAILID NOT FOUND!!");
        //                     setIsLoggIn(false);
        //                 }
        //                 else{
        //                     const user=userResp.data[0];
        //                     if(user.password===data.Password){
        //                         alert("USER LOGIN SUCCESS!!");
        //                         setIsLoggIn(true);
        //                         setImage(user.image);
        //                         setName(user.fullName);
        //                         setRole("ROLE_USER");
        //                         setStdId(user.id);
        //                         navigate(`/home`);


        //                     }
        //                     else{
        //                         alert("WRONG PASSWORD!!");
        //                         setIsLoggIn(false);
        //                     }
        //                 }
        //             })
        //             .catch(err=>{
        //                 alert("USER LOGIN EROOR: " +err.message);
        //             })
                    
        //         }
        //     })
        //     .catch(err=>{
        //         alert("ADMIN LOGIN ERROR: " +err.message);
        //     })
        //    }

    return (
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           
fontFamily: 'Arial, sans-serif',
            overflow: 'hidden'
        }}>
            {/* Background Image with Blur and Opacity */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
             backgroundImage: `url('images/dairies/milk-products.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(8px)',
                opacity: 0.7,
                transform: 'scale(1.1)', // Prevents white edges from blur
                zIndex: 0
            }} />
            
            {/* Dark Overlay for Better Contrast */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 1
            }} />

            {/* Login Form */}
            <div style={{
                background: 'white',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                width: '100%',
                maxWidth: '400px',
                position: 'relative',
                zIndex: 2
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '24px'
                }}>
                    <h2 style={{
                        marginBottom: '8px',
                        color: '#333',
                        fontSize: '24px',
                        fontWeight: 'bold'
                    }}>
                        Login
                    </h2>
                    <p style={{
                        color: '#666',
                        fontSize: '14px',
                        margin: 0
                    }}>
                        Get access to your Orders, Wishlist and Recommendations
                    </p>
                </div>
                
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
                onSubmit={handleSubmit(loginCheck)}>
                
                    <div>
                        <label style={{
                            display: 'block',
                            marginBottom: '6px',
                            color: '#333',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '14px',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.2s',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#ef1b1bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            {...register("email",{
                                required:{
                                   value:true,
                                   message:"Email is Must" 
                                }
                            })}

                        />
                          {errors.email && <span style={{color:"red", fontSize:"10px"}}>{errors.email.message}</span>}
                    </div>
                    
                    <div>
                        <label style={{
                            display: 'block',
                            marginBottom: '6px',
                            color: '#333',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            Password
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '14px',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.2s',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#ef1b1bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            {...register("password",{
                                required:{
                                   value:true,
                                   message:"Password is Must" 
                                }
                            })}
                        />
                         {errors.password && <span style={{color:"red", fontSize:"10px"}}>{errors.password.message}</span>}
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '14px'
                    }}>
                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#666',
                            cursor: 'pointer'
                        }}>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        
                        <a href="#" style={{
                            color: '#2563eb',
                            textDecoration: 'none',
                            transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                        onMouseLeave={(e) => e.target.style.color = '#2563eb'}>
                            Forgot password?
                        </a>
                    </div>
                    
                    <button 
                        type="submit"
                        style={{
                            backgroundColor: '#ef1b1bff',
                            color: 'white',
                            border: 'none',
                            padding: '12px',
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginTop: '8px',
                            transition: 'background-color 0.2s, transform 0.1s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#d01717'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#ef1b1bff'}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                        disabled={!isValid}
                    >
                        Login
                    </button>
                </form>
                
                <div style={{
                    textAlign: 'center',
                    marginTop: '24px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e5e5e5',
                    color: '#666',
                    fontSize: '14px'
                }}>
                    Don't have an account? {' '}
                    <a href="#" style={{
                        color: '#2563eb',
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                    onMouseLeave={(e) => e.target.style.color = '#2563eb'}>
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    )
}