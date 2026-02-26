import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(){
    const {uid} = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const url = "http://localhost:3004/products";
    
    useEffect(() => {
        axios.get(`${url}/${uid}`)
        .then(resp => {
            setData(resp.data);
            setLoading(false);
        })
        .catch(err => {
            alert("JSON SERVER IS NOT WORKING");
            setLoading(false);
        });
    }, [uid]);

    const handleAddToCart = () => {
        // Add to cart functionality
        alert(`Added ${data.productName} to cart!`);
    };

    const handleBuyNow = () => {
        // Buy now functionality
        alert(`Proceeding to checkout with ${data.productName}`);
    };

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
                fontSize: '28px',
                color: '#666',
                fontWeight: 'bold'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        border: '6px solid #f3f3f3',
                        borderTop: '6px solid #2c5aa0',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                    Loading Product...
                </div>
            </div>
        );
    }

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f8f9fa',
            minHeight: '100vh'
        }}>
            {/* Product Card */}
            <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                padding: '40px',
                display: 'flex',
                gap: '50px',
                marginBottom: '30px'
            }}>
                {/* Image Section */}
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <img 
                        src={`/images/${data.image}`} 
                        alt={data.productName}
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            border: '2px solid #e9ecef',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}
                        onError={(e) => {
                            e.target.src = '/images/placeholder.jpg';
                        }}
                    />
                   
                </div>

                {/* Product Info Section */}
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px'
                }}>
                    <h1 style={{
                        margin: '0',
                        fontSize: '42px',
                        color: '#333',
                        fontWeight: 'bold',
                        lineHeight: '1.2'
                    }}>
                        {data.productName}
                    </h1>

                    <div style={{
                        fontSize: '36px',
                        color: '#2c5aa0',
                        fontWeight: 'bold',
                        padding: '15px 0'
                    }}>
                        ${data.price}
                    </div>

                    <p style={{
                        margin: '0',
                        lineHeight: '1.6',
                        color: '#555',
                        fontSize: '18px',
                        textAlign: 'justify'
                    }}>
                        {data.description}
                    </p>

                    <div style={{
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '2px solid #e9ecef',
                        fontSize: '16px'
                    }}>
                        <strong style={{fontSize: '18px'}}>🍎 Nutritional Value: </strong>
                        <span style={{fontSize: '16px'}}>{data.nutritionalValue}</span>
                    </div>

                    {/* Action Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        marginTop: '20px'
                    }}>
                        <button 
                            onClick={handleAddToCart}
                            style={{
                                flex: '1',
                                padding: '20px 30px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                backgroundColor: '#ff6b35',
                                color: 'white',
                                border: 'none',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#e55a2b';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#ff6b35';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            🛒 Add to Cart
                        </button>
                        
                        <button 
                            onClick={handleBuyNow}
                            style={{
                                flex: '1',
                                padding: '20px 30px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                backgroundColor: '#2c5aa0',
                                color: 'white',
                                border: 'none',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(44, 90, 160, 0.3)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#1e3d6f';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#2c5aa0';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            ⚡ Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional Features Section */}
            <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                padding: '30px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                <div style={{
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    <div style={{fontSize: '48px', marginBottom: '10px'}}>🚚</div>
                    <h3 style={{margin: '10px 0', fontSize: '20px'}}>Free Shipping</h3>
                    <p style={{color: '#666', fontSize: '16px'}}>On orders over $50</p>
                </div>
                
                <div style={{
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    <div style={{fontSize: '48px', marginBottom: '10px'}}>↩️</div>
                    <h3 style={{margin: '10px 0', fontSize: '20px'}}>Easy Returns</h3>
                    <p style={{color: '#666', fontSize: '16px'}}>30-day return policy</p>
                </div>
                
                <div style={{
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    <div style={{fontSize: '48px', marginBottom: '10px'}}>🔒</div>
                    <h3 style={{margin: '10px 0', fontSize: '20px'}}>Secure Payment</h3>
                    <p style={{color: '#666', fontSize: '16px'}}>Safe and encrypted</p>
                </div>
            </div>

            {/* Add CSS for loading animation */}
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
}