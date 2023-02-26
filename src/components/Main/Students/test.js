import React, { useState, useEffect } from 'react';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/Users/mohammadshaadshaikh/Desktop/CODE/src/components/Main/Students/data/students.json')
      .then(response => {
        const contentType = response.headers.get('Content-Type');
        console.log(contentType); // "application/json"
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className=''>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.images[0]} alt={item.title} />
          <p>{item.description}</p>
          <h3>Winning Team Members:</h3>
          <ul>
            {item.names.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Test;
