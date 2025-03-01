import React, { useState } from 'react';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const foodItems = [
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Punjab Grill",
      rating: 4.5,
      price: 350,
      category: "North Indian",
      imageUrl: "https://shemins.scdn2.secure.raxcdn.com/wp-content/uploads/2017/05/Shemins-Butter-Chicken-LR-537x537.jpg",
      deliveryTime: "30-35 min"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Express",
      rating: 4.3,
      price: 299,
      category: "Italian",
      imageUrl: "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA",
      deliveryTime: "25-30 min"
    },
    {
      id: 3,
      name: "Sushi Platter",
      restaurant: "Sushi House",
      rating: 4.7,
      price: 599,
      category: "Japanese",
      imageUrl: "https://asianinspirations.com.au/wp-content/uploads/2018/12/R01459_Easy-Sushi-Rolls-2-619x412.jpg",
      deliveryTime: "35-40 min"
    }
  ];

  const categories = ['all', 'North Indian', 'Italian', 'Japanese', 'Chinese', 'South Indian'];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/api/placeholder/1200/400")',
        backgroundSize: 'cover',
        height: '400px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px'
        }}>Discover the best food</h1>
        <div style={{
          display: 'flex',
          gap: '20px'
        }}>
          <input
            type="text"
            placeholder="Search for restaurants or cuisines"
            style={{
              padding: '15px 25px',
              width: '400px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px'
            }}
          />
          <button style={{
            padding: '15px 30px',
            backgroundColor: '#E23744',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Search
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div style={{
        marginBottom: '30px'
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '20px'
        }}>Categories</h2>
        <div style={{
          display: 'flex',
          gap: '15px',
          overflowX: 'auto',
          padding: '10px 0'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '10px 20px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: selectedCategory === category ? '#E23744' : '#f0f0f0',
                color: selectedCategory === category ? 'white' : 'black',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Food Items Grid */}
      <div style={{
        marginBottom: '40px'
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '20px'
        }}>Popular Dishes</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          {foodItems
            .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
            .map(item => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '15px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    marginBottom: '8px'
                  }}>{item.name}</h3>
                  <p style={{
                    color: '#666',
                    marginBottom: '8px'
                  }}>{item.restaurant}</p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}>★ {item.rating}</span>
                    <span style={{
                      color: '#666',
                      fontSize: '14px'
                    }}>₹{item.price}</span>
                    <span style={{
                      color: '#666',
                      fontSize: '14px'
                    }}>{item.deliveryTime}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;