import React, { createContext, useContext, useState } from "react";
import { CartItem, Order } from "../types/navigation";
import { demoOrders } from "../constants/data";

type OrderContextType = {
  orders: Order[];
  createOrder: (items: CartItem[], totalAmount: number) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(demoOrders);

  const createOrder = (items: CartItem[], totalAmount: number) => {
    if (items.length === 0) return;

    const newOrder: Order = {
      id: Date.now().toString().slice(-6),
      restaurantName: items[0].restaurantName,
      items,
      totalAmount,
      status: "Preparing",
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }

  return context;
};