import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { cartItems, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Your cart is empty.</h2>
        
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>product Cart</h1>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <div style={{ textAlign: 'right', marginTop: '30px' }}>
          <h3>Total Amount: <span style={{ color: '#28a745' }}>${totalPrice}</span></h3>
          <button style={{ padding: '12px 25px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
            pay
          </button>
        </div>
      </div>
    </div>
  );
}