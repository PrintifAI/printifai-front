import { ReactNode, createContext, useState } from 'react';
import { CartItem } from '../types/cartTypes';

type ContextValue = {
    cart: CartItem[];
    setCart: (newCart: CartItem[]) => void;
};

export const CartContext = createContext<ContextValue>({
    cart: [],
    setCart: () => {},
});

type Props = {
    children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const handleChange = (newCart: CartItem[]) => {
        setCart(newCart);
    };

    const value = {
        cart,
        setCart: handleChange,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
