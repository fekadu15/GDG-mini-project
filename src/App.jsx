import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Badge, Container } from "@mui/material";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            <Badge badgeContent={cart.length} color="error">
              Cart
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
