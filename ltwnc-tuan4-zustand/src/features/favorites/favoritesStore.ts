import { create } from 'zustand'

type FavoritesState = {
  favoriteIds: number[]
  toggleFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
}

/** Store Zustand riêng của bài tuần 4; chỉ lưu ID, còn Product do Redux quản lý. */
export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favoriteIds: [],
  toggleFavorite: (productId) => set((state) => ({
    favoriteIds: state.favoriteIds.includes(productId)
      ? state.favoriteIds.filter((id) => id !== productId)
      : [...state.favoriteIds, productId],
  })),
  isFavorite: (productId) => get().favoriteIds.includes(productId),
}))
