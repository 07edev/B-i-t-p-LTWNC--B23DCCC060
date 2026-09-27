import { addToCart } from '../cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useFavoritesStore } from './favoritesStore'

export function FavoritesPanel() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.items)
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds)
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const favorites = products.filter((product) => favoriteIds.includes(product.id))

  return <section className="favorites-panel" aria-labelledby="favorites-title">
    <div><p className="eyebrow">Zustand · Bài tuần 4</p><h2 id="favorites-title">Sản phẩm yêu thích <span>{favorites.length}</span></h2></div>
    <ul>{favorites.length === 0 ? <li className="empty-state">Chưa có sản phẩm yêu thích.</li> : favorites.map((product) => <li key={product.id}>
      <span>{product.image}</span><div><strong>{product.name}</strong><small>{product.price.toLocaleString('vi-VN')} ₫</small></div>
      <button className="quick-cart" onClick={() => dispatch(addToCart(product))}>Thêm giỏ</button>
      <button className="remove-button" onClick={() => toggleFavorite(product.id)} aria-label={`Bỏ ${product.name} khỏi yêu thích`}>×</button>
    </li>)}</ul>
  </section>
}
