import { addToCart } from '../cart/cartSlice'
import { useAppDispatch } from '../../app/hooks'
import type { Product } from './productsSlice'
import { useFavoritesStore } from '../favorites/favoritesStore'

type Props = { product: Product }

export function ProductCard({ product }: Props) {
  const dispatch = useAppDispatch()
  const isFavorite = useFavoritesStore((state) => state.favoriteIds.includes(product.id))
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)

  return <article className="product-card">
    <div className={`product-image ${product.color}`} aria-hidden="true">{product.image}</div>
    <div className="product-content">
      <p className="category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="price">{product.price.toLocaleString('vi-VN')} ₫</p>
      <div className="card-actions">
        <button className="cart-button" onClick={() => dispatch(addToCart(product))}>Thêm giỏ</button>
        <button className={`heart-button ${isFavorite ? 'active' : ''}`} onClick={() => toggleFavorite(product.id)} aria-pressed={isFavorite} aria-label={`${isFavorite ? 'Bỏ' : 'Thêm'} ${product.name} ${isFavorite ? 'khỏi' : 'vào'} yêu thích`}>
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>
    </div>
  </article>
}
