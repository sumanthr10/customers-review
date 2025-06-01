import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, TextField, Grid } from '@mui/material';

const ProductDetail = ({ product, goBack }) => {
  const [review, setReview] = useState({ content: '', rating: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/products/${product.id}/reviews`, { review });
      alert('Review added successfully');
      setReview({ content: '', rating: '' });
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div>
      <Button onClick={goBack} variant="contained" style={{ marginBottom: '20px' }}>
        Back to Products
      </Button>

      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1">{product.description}</Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom>
        Reviews
      </Typography>
      {product.reviews.map((review) => (
        <Card key={review.id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="body1">{review.content}</Typography>
            <Typography variant="caption" color="textSecondary">
              Rating: {review.rating}/5
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Leave a Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Review Content"
              multiline
              rows={4}
              fullWidth
              value={review.content}
              onChange={(e) => setReview({ ...review, content: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Rating (out of 5)"
              type="number"
              fullWidth
              value={review.rating}
              onChange={(e) => setReview({ ...review, rating: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit Review
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ProductDetail;
