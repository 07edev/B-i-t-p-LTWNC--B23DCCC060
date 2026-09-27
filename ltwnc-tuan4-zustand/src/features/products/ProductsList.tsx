import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchProducts } from './productsSlice'
import { ProductCard } from './ProductCard'

export function ProductsList() {
  const dispatch = useAppDispatch()
  const { items, status, error } = useAppSelector((state) => state.products)

  if (status === 'loading') return <p className="feedback">Đang tải sản phẩm…</p>
  if (status === 'failed') return <div className="feedback"><p>{error}</p><button onClick={() => dispatch(fetchProducts())}>Thử lại</button></div>

  return <section className="products" aria-label="Danh sách sản phẩm">
    {items.map((product) => <ProductCard product={product} key={product.id} />)}
  </section>
}
