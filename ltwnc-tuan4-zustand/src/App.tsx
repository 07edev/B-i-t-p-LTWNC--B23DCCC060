import { useEffect } from 'react'
import { Cart } from './features/cart/Cart'
import { FavoritesPanel } from './features/favorites/FavoritesPanel'
import { ProductsList } from './features/products/ProductsList'
import { fetchProducts } from './features/products/productsSlice'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { useFavoritesStore } from './features/favorites/favoritesStore'

export default function App() {
  const dispatch = useAppDispatch()
  const status = useAppSelector((state) => state.products.status)
  const cartCount = useAppSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))
  const favoriteCount = useFavoritesStore((state) => state.favoriteIds.length)

  useEffect(() => { if (status === 'idle') void dispatch(fetchProducts()) }, [dispatch, status])

  return <><header className="site-header"><a className="brand" href="#products">Mộc.</a><p>Redux Toolkit × Zustand</p><nav><a href="#favorites">♥ {favoriteCount} yêu thích</a><a href="#cart">Giỏ {cartCount}</a></nav></header>
    <main><section className="intro"><p className="eyebrow">Ứng dụng mua sắm</p><h1>Chọn món bạn thích,<br />thêm ngay vào giỏ.</h1><p>Sản phẩm và giỏ hàng được quản lý bằng Redux Toolkit; danh sách yêu thích được tách riêng bằng Zustand.</p></section>
      <div className="shop-layout"><div><ProductsList /><FavoritesPanel /></div><Cart /></div>
      <section className="note"><h2>Nhận xét: Zustand và Redux Toolkit</h2><div className="comparison-note"><span>Zustand rất gọn nhẹ, ít boilerplate, phù hợp cho state yêu thích nhỏ và độc lập.</span><span>API trực tiếp giúp thêm, bỏ hoặc kiểm tra sản phẩm yêu thích nhanh, dễ đọc.</span><span>Ngược lại, Zustand ít quy ước nên nhóm lớn cần tự thống nhất cấu trúc store.</span><span>Redux Toolkit phù hợp hơn với cart và products vì state có nhiều luồng cập nhật rõ ràng.</span><span>RTK có DevTools, middleware và <code>createAsyncThunk</code> hỗ trợ debug, gọi API tốt hơn.</span><span>Vì vậy ứng dụng này dùng Zustand cho favorites và Redux Toolkit cho dữ liệu mua sắm chính.</span></div></section>
    </main></>
}
