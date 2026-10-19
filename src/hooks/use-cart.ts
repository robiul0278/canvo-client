import { useAppSelector } from "@/store/store";
import { CartItem } from "@/store/cartSlice";

export function useCart() {
  const items = useAppSelector((state) => state.cart.items);
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return { items, isOpen, total, count } as { items: CartItem[]; isOpen: boolean; total: number; count: number };
}
