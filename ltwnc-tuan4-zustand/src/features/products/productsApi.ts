import type { Product } from './productsSlice'

const mockProducts: Product[] = [
  { id: 1, name: 'Áo sơ mi Linen', category: 'Thời trang nam', price: 490000, color: 'sand', image: '👔' },
  { id: 2, name: 'Túi da Mini', category: 'Phụ kiện', price: 650000, color: 'leather', image: '👜' },
  { id: 3, name: 'Tai nghe Wave', category: 'Công nghệ', price: 1290000, color: 'lilac', image: '🎧' },
  { id: 4, name: 'Bình nước Everyday', category: 'Đời sống', price: 320000, color: 'sage', image: '🥤' },
]

/** API giả lập: thay hàm này bằng fetch() khi kết nối backend thật. */
export const getProducts = async (): Promise<Product[]> => {
  await new Promise((resolve) => window.setTimeout(resolve, 450))
  return mockProducts
}
