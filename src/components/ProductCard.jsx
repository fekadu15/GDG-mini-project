import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";

function ProductCard({ product, addToCart }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
