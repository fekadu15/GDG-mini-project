import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', background: '#007bff', color: '#fff' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
        🛒 Cart ({totalItems})
      </Link>
    </nav>
  );
}