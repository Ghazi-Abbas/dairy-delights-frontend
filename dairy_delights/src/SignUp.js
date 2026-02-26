import axios from "axios";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const {register,
            handleSubmit,
            reset,
            formState:{errors,isValid}

        }=useForm({mode:'onChange'});
       const navigate= useNavigate();

        let url="http://localhost:3004/users";

        let saveData=(data)=>{
             data['role']="ROLE_USER";
             data['status']="Active";
             data['cart']=[];
             data['oeders']=[];
         
            axios.post(url,data)
            .then(resp=>{
                alert("Signup Completed.....");
                navigate(`/login`)
                
            })
            .catch(err=>{
                alert("Signuo Failed.....");
            })



        }

    return (
        
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            padding: '20px',
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

            {/* Signup Form */}
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
                        Create Account
                    </h2>
                    <p style={{
                        color: '#666',
                        fontSize: '14px',
                        margin: 0
                    }}>
                        Join us and start your dairy journey
                    </p>
                </div>
                
                <form 
                onSubmit={handleSubmit(saveData)} style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '16px' 
                }}>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Full Name"
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
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            {
                                ...register("fullName",{
                                   required:{value:true, message:"FullName is Must"},
                                    minLength:{value:5, message:"FullName must have minimum 5 character"},
                                    maxLength:{value:15,message:"FullName can have more then 15 charecters"}
                                })
                            }
                            
                        />

                        {errors.fullName && <span style={{color:"red",fontSize:"10px"}}>{errors.fullName.message}</span>}
                        
                    </div>
                    
                    
                    <div>
                        <input 
                            type="email" 
                            placeholder="Email Address"
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
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            {
                                ...register("email",{
                                   required:{value:true, message:"Email is Must"},
                                    
                                })
                            }

                        />
                         {errors.email && <span style={{color:"red",fontSize:"10px"}}>{errors.email.message}</span>}
                    </div>
                    
                    <div>
                        <input 
                            type="tel" 
                            placeholder="Mobile Number"
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
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}

                            {... register("mobileN",{
                                    required:{value:true, message:"Mobile Number is Must"},
                                    minLength:{value:10, message:"Mobile Number must have minimum 10 character"},
                                    maxLength:{value:12,message:"Mobile Number can have more then 12 charecters"}
                                })}
                        />
                        {errors.mobileN && <span style={{color:"red",fontSize:"10px"}}>{errors.mobileN.message}</span>}
                    </div>
                    
                    <div>
                        <input 
                            type="Password" 
                            placeholder="Password"
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
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            {... register("Password",{
                                    required:{value:true, message:"Password is Must"},
                                    minLength:{value:7, message:"Password must have minimum 7 character"},
                                    maxLength:{value:10,message:"Password can have more then 10 charecters"},
                                    
                                })}
                            />

                            {errors.password && <span style={{color:"red",fontSize:"10px"}}>{errors.password.message}</span>}
                        
                    </div>
                    
                    <div>
                        <textarea 
                            placeholder="Delivery Address"
                            rows="3"
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '14px',
                                resize: 'vertical',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.2s',
                                outline: 'none',
                                fontFamily: 'Arial, sans-serif'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            {... register("address",{
                                    required:{value:true, message:"Address is Must"},
                                    
                                    maxLength:{value:100,message:"Address can have more then 100 charecters"}
                                    
                                })}
                                
                        />
                         {errors.address&& <span style={{color:"red",fontSize:"10px"}}>{errors.address.message}</span>}

                        
                    </div>
                    <div style={{
                        display:"flex",
                        padding:"3px",
                        justifyContent:"space-around"
                        
                       
                        
                    }}>
                    <button 
                        type="submit"
                        style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            padding: '12px',
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginTop: '8px',
                            marginRight:"2px",
                            
                            
                            width:"200px"
                            
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                        disabled={!isValid}
                    >
                        Sign Up
                    </button>

                    <button 
                        type="reset"
                        style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            padding: '12px',
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginTop: '8px',
                            transition: 'background-color 0.2s, transform 0.1s',
                            width:"200px"
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                        onClick={()=>reset()}
                    >
                        Reset
                    </button>
                    </div>
                    
                </form>
                
                <div style={{
                    textAlign: 'center',
                    marginTop: '24px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e5e5e5',
                    color: '#666',
                    fontSize: '14px'
                }}>
                    Already have an account? {' '}
                    <a href="#" style={{
                        color: '#007bff',
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#0056b3'}
                    onMouseLeave={(e) => e.target.style.color = '#007bff'}>
                        Login
                    </a>
                </div>
            </div>
        </div>
    )
}