import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0', gap: '20px' }}>
      <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
        <p style={{ margin: 0 }}>Price: ${item.price}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => updateQuantity(item.id, -1)} style={btnStyle}>-</button>
        <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)} style={btnStyle}>+</button>
      </div>
      <div style={{ width: '80px', textAlign: 'right', fontWeight: 'bold' }}>
        ${item.price * item.quantity}
      </div>
      <button 
        onClick={() => removeFromCart(item.id)} 
        style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Remove
      </button>
    </div>
  );
}

const btnStyle = { padding: '5px 10px', cursor: 'pointer' };