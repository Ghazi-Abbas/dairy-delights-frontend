export default function Categories({onCategorySelect, selectedCategories}) {
  const categories = [
    {
      name: "Milk",
      image: "https://th.bing.com/th/id/R.9ef7cdf2453a4e9aab98c9b8f7ab44cc?rik=K5IPyZsTz6gnKw&riu=http%3a%2f%2fwww.naturalheightgrowth.com%2fwp-content%2fuploads%2f2016%2f06%2fmilk-006.jpg&ehk=cBqZig2BJw4M7YfEn%2fwA51yWcRLRKAk618sJCUTBIKs%3d&risl=&pid=ImgRaw&r=0",
      description: "Fresh Pure Milk"
    },
    {
      name: "Butter",
      image: "images/dairies/butter.jpg", 
      description: "Homemade Butter"
    },
    {
      name: "Buttermilk",
      image: "images/dairies/buttermilk.jpg",
      description: "Fresh Chaas"
    },
    {
      name: "Cheese",
      image: "https://facts.net/wp-content/uploads/2022/06/different-types-of-cheese-1320x660.jpg",
      description: "Various Cheeses"
    },
    {
      name: "Curd",
      image: "images/dairies/curd.jpg",
      description: "Fresh Dahi"
    },
    {
      name: "Cream",
      image: "https://rogueproduce.com/wp-content/uploads/2019/08/Plain-Cream-Cheese.jpg",
      description: "Fresh Cream"
    },
    {
      name: "Yogurt", 
      image: "https://tse2.mm.bing.net/th/id/OIP.46cyffTkCBAYnhdgLbxtIAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Healthy Yogurt"
    },
    {
      name: "Ghee",
      image: "images/dairies/ghee.jpg",
      description: "Pure Desi Ghee"
    },
    {
      name: "Paneer",
      image: "images/dairies/paneer.jpg",
      description: "Fresh Paneer"
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '25px 0',
      borderBottom: '1px solid #e2e8f0',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '25px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 8px 0',
            background: 'linear-gradient(135deg, #2c5aa0, #4a90e2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
          }}>
            Dairy Categories
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            margin: 0,
            fontWeight: '500'
          }}>
            Explore our wide range of fresh dairy products
          </p>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: "flex",
        
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center'
          
        }}>
          {categories.map((category, index) => {
             const isActive = selectedCategories===(category.name);
             console.log(isActive);
            
           return(
            <div 
            
              key={index}
              style={{
                background: 'white',
                borderRadius: '10px',
               
                textAlign: 'center',
                boxShadow: '0 4px 6px -1px rgba(23, 92, 113, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid transparent',
                
              fontWeight: isActive ? "700" : "500",
                overflow: 'hidden',
                transform: isActive? 'translateY(-10px)':'translateY(0)',
                boxShadow: isActive? '0 20px 25px -5px rgba(0, 255, 191, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)':'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                ,borderColor: isActive? '#3b82f6':'transparent',
              }}
              onMouseEnter={(e) => {
                if(!isActive){
              e.currentTarget.style.borderColor = '#3b82f6';
             }
              
                
                e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
              }}
              onMouseLeave={(e) => {
            
             if(!isActive){
              e.currentTarget.style.borderColor = 'transparent';
             }
              
              
  
}}


              
              

              onClick={() => onCategorySelect(category.name)}
            >
              
              
              {/* Image Container */}
              <div style={{
                width: '110px',
                height: '80px',
                
                margin: '0 auto 15px',
                background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
               
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  style={{
                    width: '100%',
                    height: '100%'}}
                    
                 
                />
              </div>
              
              {/* Category Name */}
              <h3 style={{
                margin: '0 0 6px 0',
                fontSize: '16px',
                fontWeight: '700',
                color: '#1e293b',
                whiteSpace: 'nowrap',
                transition: 'color 0.3s ease'
              }}>
                {category.name}
              </h3>
              
              {/* Category Description */}
              <p style={{
                margin: 0,
                fontSize: '13px',
                color: '#64748b',
                fontWeight: '500',
                lineHeight: '1.3',
                
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {category.description}
              </p>

             
              
            </div>
          )})}
        </div>

        {/* View All Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '30px'
        }}>
          <button style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '50px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
          }}
           onClick={() => onCategorySelect("All")}
          >
            View All Categories
          </button>
        </div>
      </div>

      
    </div>
  );
}