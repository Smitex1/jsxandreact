import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import product from './product';

const firstName = 'cuisine limited'; 

  const App = () => {
    return (
      <div>
        {firstName ? (
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Name />
                <Price />
                <Description />
              </Card.Body>
            </Card>
            <p>Hello, {firstName}!</p>
            <Image />
          </div>
        ) : (
          <p>Your one and only foreign rice</p>
        )}
      </div>
    );
  };

export default App;
