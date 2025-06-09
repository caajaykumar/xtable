import { useState } from 'react';

export default function DateViewsTable() {
  const [data, setData] = useState([
    { date: '2022-09-01', views: 100, article: 'Article 1' },
    { date: '2023-09-01', views: 100, article: 'Article 1' },
    { date: '2023-09-02', views: 150, article: 'Article 2' },
    { date: '2023-09-02', views: 120, article: 'Article 3' },
    { date: '2020-09-03', views: 200, article: 'Article 4' }
  ]);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      // First sort by date (latest first)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      if (dateB.getTime() !== dateA.getTime()) {
        return dateB.getTime() - dateA.getTime();
      }
      
      // If dates are same, sort by views (higher first)
      return b.views - a.views;
    });
    
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      // First sort by views (higher first)
      if (b.views !== a.views) {
        return b.views - a.views;
      }
      
      // If views are same, sort by date (latest first)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    
    setData(sortedData);
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const buttonContainerStyle = {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center'
  };

  const buttonStyle = {
    padding: '8px 16px',
    marginRight: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f8f9fa',
    fontWeight: 'bold',
    color: '#333'
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left'
  };

  const rowStyle = {
    backgroundColor: 'white'
  };

  const evenRowStyle = {
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Date and Views Table</h1>
      
      <div style={buttonContainerStyle}>
        <button 
          onClick={sortByDate}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Sort by Date
        </button>
        <button 
          onClick={sortByViews}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Sort by Views
        </button>
      </div>
      
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Views</th>
            <th style={thStyle}>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr 
              key={index} 
              style={index % 2 === 0 ? rowStyle : evenRowStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e9ecef'}
              onMouseOut={(e) => e.target.style.backgroundColor = index % 2 === 0 ? 'white' : '#f9f9f9'}
            >
              <td style={tdStyle}>{item.date}</td>
              <td style={tdStyle}>{item.views}</td>
              <td style={tdStyle}>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}