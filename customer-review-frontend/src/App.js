import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Customer Review System
      </Typography>
      {!selectedProduct ? (
        <ProductList selectProduct={setSelectedProduct} />
      ) : (
        <ProductDetail product={selectedProduct} goBack={() => setSelectedProduct(null)} />
      )}
    </Container>
  );
};

export default App;
