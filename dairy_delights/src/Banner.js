export default function Banner() {
  const banners = [
    {
      title: "Fresh Dairy Products",
      subtitle: "Pure Milk & Cream Delivered Daily",
      price: "From ₹99",
      image: "images/dairies/milk-products.jpg",
      bgColor: "linear-gradient(135deg, #403B4A 0%, #E7E9BB 100%)"
    },
    {
      title: "Homemade White Butter",
      subtitle: "Creamy & Natural Artisanal Butter",
      price: "From ₹249",
      image: "images/dairies/home_made_white_butter_.jpg",
      bgColor: "linear-gradient(135deg, #00467F 0%, #A5CC82 100%)"
    },
    {
      title: "Healthy Yogurt",
      subtitle: "Probiotic Rich & Fresh Curd",
      price: "From ₹149",
      image: "images/dairies/healthy_yogurt.jpg",
      bgColor: "linear-gradient(135deg, #603813 0%, #b29f94 100%)"
    },
    {
      title: "Pure Desi Ghee",
      subtitle: "Traditional A2 Bilona Ghee",
      price: "From ₹399",
      image: "images/dairies/ghee.jpg",
      bgColor: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)"
    },
    {
      title: "Fruit Yogurt",
      subtitle: "Flavored & Nutrient Packed",
      price: "From ₹179",
      image: "images/dairies/fruit_yogurt.jpg",
      bgColor: "linear-gradient(135deg, #BBD2C5 0%, #292E49 100%)"
    }
  ];

  return (
    <div style={{
      width: '96%',
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      margin: '10px 4px',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      height: '280px',
      border: '1px solid rgba(255,255,255,0.1)',
      marginLeft:"25px"
    }}>
      
      {/* Background Blur Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(20px)',
        zIndex: 0
      }} />

      {/* Banner Container */}
      <div style={{
        display: 'flex',
        animation: 'slide 30s infinite ease-in-out',
    
        width: `${banners.length * 100}%`,
        height: '100%',
        position: 'relative',
        zIndex: 2
      }}>
        {banners.map((banner, index) => (
          <div
            key={index}
            style={{
              width: `${100 / banners.length}%`,
              flexShrink: 0,
              padding: '40px',
              background: banner.bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              boxSizing: 'border-box',
              gap: '50px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              zIndex: 0
            }} />

            {/* Content Container */}
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '50px',
              maxWidth: '900px',
              width: '100%',
              position: 'relative',
              zIndex: 2
            }}>
              {/* Text Content */}
              <div style={{ 
                color: 'white',
                textAlign: 'left',
                flex: 1,
                maxWidth: '400px'
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(15px)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'inline-block',
                  marginBottom: '15px'
                }}>
                  <span style={{ 
                    fontSize: '12px', 
                    fontWeight: '600',
                    opacity: '0.9'
                  }}>
                    DAILY FRESH
                  </span>
                </div>

                <h2 style={{ 
                  margin: '0 0 15px 0', 
                  fontSize: '32px', 
                  fontWeight: '800',
                  lineHeight: '1.1',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  {banner.title}
                </h2>
                <p style={{ 
                  margin: '0 0 20px 0', 
                  fontSize: '16px', 
                  opacity: '0.9',
                  fontWeight: '400',
                  lineHeight: '1.5',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  {banner.subtitle}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(20px)',
                    padding: '15px 30px',
                    borderRadius: '15px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    display: 'inline-block',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }}>
                    <p style={{ 
                      margin: '0', 
                      fontSize: '22px', 
                      fontWeight: '800',
                      color: 'white'
                    }}>
                      {banner.price}
                    </p>
                  </div>
                  <button style={{
                    background: 'rgba(255,255,255,0.9)',
                    color: '#333',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.9)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}>
                    Order Now
                  </button>
                </div>
              </div>

              {/* Image Container */}
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '25px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: `
                  0 25px 50px rgba(0,0,0,0.3),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `,
                border: '3px solid rgba(255,255,255,0.4)',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(25px)',
                position: 'relative',
                transform: 'rotate(5deg)',
                transition: 'all 0.5s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
                e.currentTarget.style.boxShadow = `
                  0 35px 70px rgba(0,0,0,0.4),
                  inset 0 1px 0 rgba(255,255,255,0.3)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(5deg) scale(1)';
                e.currentTarget.style.boxShadow = `
                  0 25px 50px rgba(0,0,0,0.3),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `;
              }}>
                {/* Image with enhanced styling */}
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    filter: 'brightness(1.1) contrast(1.1)'
                  }}
                />
                
                {/* Multiple overlay effects */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 30%, rgba(0,0,0,0.1) 100%)',
                  pointerEvents: 'none'
                }} />
                
                {/* Shine effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Dots */}
      <div style={{
        position: 'absolute',
        bottom: '25px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 3
      }}>
        {banners.map((_, index) => (
          <div
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              border: '2px solid rgba(255,255,255,0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.9)';
              e.target.style.transform = 'scale(1.4)';
              e.target.style.boxShadow = '0 6px 20px rgba(255,255,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.4)';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          padding: '8px 16px',
          borderRadius: '15px',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          🚚 Free Delivery
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          16% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-20%);
          }
          36% {
            transform: translateX(-20%);
          }
          40% {
            transform: translateX(-40%);
          }
          56% {
            transform: translateX(-40%);
          }
          60% {
            transform: translateX(-60%);
          }
          76% {
            transform: translateX(-60%);
          }
          80% {
            transform: translateX(-80%);
          }
          96% {
            transform: translateX(-80%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}