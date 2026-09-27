import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { removeFromCart, updateQuantity } from './cartSlice'

export function Cart() {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return <aside className="cart" id="cart" aria-labelledby="cart-title">
    <div className="section-heading"><div><p className="eyebrow">Redux Toolkit</p><h2 id="cart-title">Giỏ hàng <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span></h2></div></div>
    {items.length === 0 ? <p className="empty-state">Giỏ hàng của bạn đang trống.</p> : <>
      <ul className="cart-list">{items.map((item) => <li key={item.id}>
        <span className={`cart-image ${item.color}`} aria-hidden="true">{item.image}</span>
        <div className="item-info"><strong>{item.name}</strong><small>{item.price.toLocaleString('vi-VN')} ₫</small>
          <div className="quantity" aria-label={`Số lượng ${item.name}`}><button onClick={() => dispatch(updateQuantity({ productId: item.id, quantity: item.quantity - 1 }))} aria-label="Giảm số lượng">−</button><span>{item.quantity}</span><button onClick={() => dispatch(updateQuantity({ productId: item.id, quantity: item.quantity + 1 }))} aria-label="Tăng số lượng">+</button></div>
        </div>
        <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))} aria-label={`Xóa ${item.name}`}>×</button>
      </li>)}</ul>
      <div className="cart-total"><span>Tạm tính</span><strong>{total.toLocaleString('vi-VN')} ₫</strong></div>
    </>}
  </aside>
}
