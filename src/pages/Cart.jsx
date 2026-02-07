import { Typography, Stack } from "@mui/material";
import CartItem from "../components/CartItem";

function Cart({ cart, setCart }) {
  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 8 }}>
        Your cart is empty
      </Typography>
    );
  }

  return (
    <Stack spacing={3}>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          increase={increase}
          decrease={decrease}
          remove={remove}
        />
      ))}
      <Typography variant="h5" align="right">
        Total: ${total}
      </Typography>
    </Stack>
  );
}

export default Cart;
