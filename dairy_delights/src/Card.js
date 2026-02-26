import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./App";
import Cart from "./Cart";
import axios from "axios";

export default function Card({ products, onClick }) {
    
    const {item,setitem} = useContext (DataContext);
     const {role,setRole} = useContext (DataContext);
     const {stdId,setstdId} = useContext (DataContext);
    // Add to cart logic
    const Cart = (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  const url = `http://localhost:3004/users/${stdId}`;
  
  // If you want to simply append to existing cart
  axios.get(url)
    .then(response => {
          // Get current cart or initialize empty array
      const currentCart = response.data.cart || [];
 // Check if product already exists in cart
      const existingProductIndex = currentCart.findIndex(
      item => item.id === products.id // assuming products has an id
    );
//      const totalQuantity1 = currentCart.reduce((sum, i) => sum + i.quantity, 0);
// setitem(totalQuantity1);

     let updatedCart;
    if (existingProductIndex !== -1) {
      // Update quantity if product exists
      updatedCart = [...currentCart];
      updatedCart[existingProductIndex].quantity += 1;

    } else {
      // Add new product to cart
      updatedCart = [...currentCart, { ...products, quantity: 1 }];
      
    }
     const totalQuantity = updatedCart.reduce((sum, i) => sum + i.quantity, 0);
setitem(totalQuantity);

    //   const updatedCart = [...currentCart, products];
      
      axios.patch(url, { cart: updatedCart });
    })
    .then(resp => {
      alert("Product added to cart!");
     
      

    })
    .catch(err => {
      alert("Error: " + err.message);
    });
};
    
    return (
        // <Link to={`/detail/${products.id}`}>
        // <Link style={{}} to={ `/detail/${products.id}`}>
        <Link 
            to={`/detail/${products.id}`}
            style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}
        >
       
        <div 
            style={{
                background: 'white',
                borderRadius: '16px',
                padding: '16px',
                
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0',
                height: '400px', 
                width: '320px', 
                margin:"8px"
                
                
               
                
            }}
            
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
        >
            {/* Product Image */}
            <div style={{
                width: '100%',
                height: '200px', 
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '16px',
                background: '#f8f9fa',
                position: 'relative',
             
            }}>
                <img 
                    src={`images/${products.image}`} 
                    alt={products.productName}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
               />
                
                {/* Discount Badge */}
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                   
                }}>
                    {products.discount || '10% OFF'}
                </div>

                {/* Rating */}
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#1e293b',
                   
                    
                }}>
                    ⭐ {products.rating || '4.5'}
                </div>
            </div>

            {/* Product Info */}
            <div style={{ 
              }}>
                {/* Product Name */}
                <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#1e293b',
                    lineHeight: '1.3',
                  
                 }}>
                    {products.productName}
                </h3>

                {/* Description */}
                <p style={{
                    margin: '0 0 2px 0',
                    fontSize: '14px',
                    color: '#64748b',
                    lineHeight: '1.4',
                   minHeight: '40px'
                }}>
                    {products.description}
                </p>

                {/* Nutritional Value */}
                {products.nutritionalValue && (
                    <div style={{
                        marginBottom: '12px',
                        padding: '8px',
                        background: '#f1f5f9',
                        borderRadius: '8px',
                        
                    }}>
                        <span style={{
                            fontSize: '12px',
                            color: '#475569',
                            fontWeight: '500'
                        }}>
                            🥛 {products.nutritionalValue}
                        </span>
                    </div>
                )}

                {/* Price divv */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    
                  
                }}>
                    {/* Price */}
                    <div style={{
                        
                    }}>
                        <span style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#1e293b'
                        }}>
                            ₹{products.price}
                        </span>
                        {products.originalPrice && (
                            <span style={{
                                fontSize: '14px',
                                color: '#94a3b8',
                                textDecoration: 'line-through'
                            }}>
                                ₹{products.originalPrice}
                            </span>
                        )}
                    </div>

                    {/* Button */}
     { role!=="ROLE_ADMIN"  && 
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                    
                        <button 
                            style={{
                                background: 'white',
                                border: '2px solid #3b82f6',
                                color: '#3b82f6',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                minWidth: '80px'
                            }}
                            onClick={
                                
                            Cart
                            }
                            onMouseEnter={(e) => {
                                e.target.style.background = '#3b82f6';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.color = '#3b82f6';
                            }}
                        >
                            Add to Cart
                        </button>
                        
                        
                        <button 
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                                border: 'none',
                                color: 'white',
                              
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                minWidth: '80px',
                                boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                            }}
                            onClick={(e) => {
                                  e.preventDefault();
                                e.stopPropagation();
                              
                                // Buy now logic here

                            }}
                           
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-1px)';
                                e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.3)';
                            }}
                        >
                            Buy Now
                        </button>
                    </div>

}
                     {/* Button for admin */}
          { role==="ROLE_ADMIN"  &&         
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                    
                        <button 
                            style={{
                                background: 'white',
                                border: '2px solid #3b82f6',
                                color: '#3b82f6',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                minWidth: '80px'
                            }}
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation();
                                // ecart
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#3b82f6';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.color = '#3b82f6';
                            }}
                        >
                            Update
                        </button>
                        
                        
                        <button 
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                                border: 'none',
                                color: 'white',
                              
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                minWidth: '80px',
                                boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                            }}
                            onClick={(e) => {
                                  e.preventDefault();
                                e.stopPropagation();
                                // Buy now logic here
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-1px)';
                                e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.3)';
                            }}
                        >
                            Delete
                        </button>
                    </div>
          }
                </div>
            </div>
        </div>
        </Link>
       
      
    );
}