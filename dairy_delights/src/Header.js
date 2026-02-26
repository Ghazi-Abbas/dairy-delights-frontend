import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "./App";
import axios from "axios";


export default function Header({OnSerchEvent,onChange}) {
 const{image}=useContext (DataContext);
     const{name}=useContext(DataContext);
      const{stdId}=useContext(DataContext);
     const {isLoggedIn,setIsLoggIn} = useContext(DataContext);
     const {role,setRole} = useContext(DataContext);
     const { item,setitem } = useContext(DataContext);
     const navigate =useNavigate();

      let signOut = () => {
        let isconf=window.confirm("are you want to exit")
    if (setIsLoggIn && isconf) {
     
      setIsLoggIn(false);
      navigate("/");
    } else {
      console.error("setIsLoggedIn is not available");
      navigate("/");
    }
  };
    // before opening cart item number display
  
    useEffect(() => {
  if (!stdId) return; // avoid running when user not logged in

  axios
    .get(`http://localhost:3004/users/${stdId}`)
    .then(resp => {
      const cart = resp.data.cart || [];
      const totalQuantity = cart.reduce((sum, d) => sum + (d.quantity || 0), 0);
      setitem(totalQuantity);
    })
    .catch(err => {
      console.error("Error fetching cart count:", err);
    });
}, [stdId]);

    
  return (
    <div style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%'
    }}>
      
      {/* Main Header */}
      <div style={{
        padding: '12px 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'nowrap'
          }}>
            {/* Left Section - Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              minWidth: '200px'
            }}>
              
              <Link to="/">
              <button style={{
                background:"white",
                border:"none"
              }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  fontSize: '28px',
                  background: 'linear-gradient(135deg, #2c5aa0, #4a90e2)',
                  borderRadius: '8px',
                  padding: '5px',
                  color: 'white'
                }}>🥛</div>
                <span style={{
                  fontSize: '22px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #2c5aa0, #4a90e2)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontFamily: 'Arial, sans-serif',
                  whiteSpace: 'nowrap'
                }}>DairyDelights</span>
              </div>
              </button>
              </Link>
            </div>
            

            {/* Center Section - Search Bar */}
            <div style={{
              flex: 1,
              maxWidth: '600px',
              minWidth: '300px',
              margin: '0 20px'
            }}>
              <div style={{
                display: 'flex',
                background: '#f8f9fa',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '2px solid #e0e0e0',
                transition: 'border-color 0.3s',
                width: '100%'
              }}>
                <input 
                  type="text" 
                  placeholder="Search for dairy products, brands and more..." 
                  style={{
                    flex: 1,
                    border: 'none',
                    padding: '12px 20px',
                    background: 'transparent',
                    outline: 'none',
                    fontSize: '14px',
                  }}
                  onInput={OnSerchEvent}
                />
                <button style={{
                  background: '#2c5aa0',
                  border: 'none',
                  padding: '12px 20px',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  minWidth: '50px'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section - User Actions */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              flexShrink: 0,
              minWidth: '300px',
              justifyContent: 'flex-end'
            }}>
              {/* Sorting Dropdown */}
              <div style={{ flexShrink: 0 }}>
                <select style={{
                  padding: '10px 35px 10px 15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  background: 'white',
                  fontSize: '14px',
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,<svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6 9L12 15L18 9' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '14px',
                  fontWeight: '500',
                  minWidth: '120px'
                }}
                onChange={onChange}>
                  <option value="">Sort By</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

{/* Auth Buttons */}
 {!isLoggedIn  && 
              
              <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
             
              <Link to="/login">
                <button style={{
                  padding: '10px 20px',
                  border: '2px solid #2c5aa0',
                  background: 'white',
                  color: '#2c5aa0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s',
                  whiteSpace: 'nowrap',
                  fontSize: '14px',
                  minWidth: '80px'
                }}>Login</button>
                </Link>

                

                <Link to="/signup">
                <button style={{
                  padding: '10px 20px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #2c5aa0, #4a90e2)',
                  color: 'white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s',
                  whiteSpace: 'nowrap',
                  fontSize: '14px',
                  minWidth: '80px'
                }}>Sign Up</button>
                </Link>
              
              </div>
              }

{/* Cart Icon */}
             
{role==="ROLE_USER"&& isLoggedIn===true  &&
              
              <div style={{ 
                position: 'relative', 
                flexShrink: 0,
                marginLeft: '5px'
              }}>
              <Link to="/cart">
                <button style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px',
                  cursor: 'pointer',
                  color: '#333',
                  position: 'relative',
                  transition: 'color 0.3s'
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.2 16.4H17M17 13V16.4M9 19C9 19.6 8.6 20 8 20C7.4 20 7 19.6 7 19C7 18.4 7.4 18 8 18C8.6 18 9 18.4 9 19ZM17 19C17 19.6 16.6 20 16 20C15.4 20 15 19.6 15 19C15 18.4 15.4 18 16 18C16.6 18 17 18.4 17 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{
                    position: 'absolute',
                    top: '0px',
                    right: '2px',
                    background: '#e74c3c',
                    color: 'white',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    fontSize: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>{item}</span>
                </button>
                </Link>


              </div>
}

              {isLoggedIn && 
        <div style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between',
  padding: '10px 20px',
  
  

}}>

  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
   <Link to="/account"
       style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}>
    <img src={image} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
    </Link>
    {/* Clickable name with dropdown arrow */}
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '5px',
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '4px',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e9ecef'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        onClick={() => {
          const dropdown = document.querySelector('.dropdown-menu');
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Hii {name}!
        </span>
        <span style={{ fontSize: '12px', marginLeft: '5px' }}>▼</span>
      </div>
      
      {/* Dropdown menu */}
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '180px',
        zIndex: 1000,
        display: 'none'
      }} className="dropdown-menu">
      <Link to="/account"
       style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}>
        <div role="button"
        style={{
          padding: '10px 12px',
          cursor: 'pointer',
          borderBottom: '1px solid #f0f0f0',
          fontSize: '14px',
          transition: 'background-color 0.2s'
        }}
        
        onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
          Account Details
        </div>
        </Link>

          <Link to="/checkorder"style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}>
      <div style={{
          padding: '10px 12px',
          cursor: 'pointer',
          borderBottom: '1px solid #f0f0f0',
          fontSize: '14px',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
          Check Order/Initiate Return
        </div>
        </Link>
        
        
        <div style={{
          padding: '10px 12px',
          cursor: 'pointer',
          borderBottom: '1px solid #f0f0f0',
          fontSize: '14px',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
          Change Password
        </div>



        <Link to="/email"
       style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}>
        <div role="button"
        style={{
          padding: '10px 12px',
          cursor: 'pointer',
          borderBottom: '1px solid #f0f0f0',
          fontSize: '14px',
          transition: 'background-color 0.2s'
        }}
        
        onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
          Contect us
        </div>
        </Link>
        
        <div 
        role="button"
        style={{
          padding: '10px 12px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#dc3545',
          transition: 'background-color 0.2s'
        }}
        onClick={signOut}
        onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
          Sign Out
        </div>

      </div>
    </div>
    </div>

  
    </div>
      
      }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}