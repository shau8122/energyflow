import { StaticImageData } from 'next/image';
import {create} from 'zustand';

export type OrderType = {
  quantity: number;
  img: StaticImageData;
  title: string;
  price: number;
};

export type Store = {
  order: OrderType[];
  totalOrder: number;
};

export const useStore = create<{
  store: Store;
  addOrder: (order: OrderType) => void;
  removeOrder: (order: OrderType) => void;
}>((set, get) => ({
  store: {
    order: [],
    totalOrder: 0,
  },
  addOrder: (newOrder) =>
    set((state) => ({
      store: {
        ...state.store,
        order: [...state.store.order, newOrder],
        totalOrder: state.store.totalOrder + newOrder.quantity,
      },
    })),
  removeOrder: (orderToRemove) =>
    set((state) => {
      const updatedOrders = state.store.order.filter(
        (order) => order.title !== orderToRemove.title
      );

      return {
        store: {
          ...state.store,
          order: updatedOrders,
          totalOrder: updatedOrders.length,
        },
      };
    }),
}));

