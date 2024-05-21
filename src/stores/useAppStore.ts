import { createNotificationSlice, NotificationSliceType } from './notificationSlice';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { RecipesSliceType, createRecipeSlice } from './recipeSlice'
import { CreateFavoritesSlice, FavoritesSliceType } from './favoritesSlice'



export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools(((...a)=>({
    ...createRecipeSlice(...a),
    ...CreateFavoritesSlice(...a),
    ...createNotificationSlice(...a)
}))))