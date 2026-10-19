import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  variant?: { color: string; size: string };
  image?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && JSON.stringify(item.variant) === JSON.stringify(action.payload.variant)
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<{ id: string; variant?: CartItem["variant"] }>) {
      state.items = state.items.filter(
        (item) => !(item.id === action.payload.id && JSON.stringify(item.variant) === JSON.stringify(action.payload.variant))
      );
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number; variant?: CartItem["variant"] }>) {
      const item = state.items.find(
        (i) => i.id === action.payload.id && JSON.stringify(i.variant) === JSON.stringify(action.payload.variant)
      );
      if (item) item.quantity = action.payload.quantity;
    },
    clearCart(state) {
      state.items = [];
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
