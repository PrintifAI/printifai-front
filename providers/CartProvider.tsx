import { ReactNode, createContext, useEffect, useState } from 'react';
import { CartItem } from '../types/cartTypes';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { LOCAL_STORAGE_CART_KEY } from '../constants/LocalStorageKeys';

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
    const [cart, setCart] = useState<CartItem[]>(
        getLocalStorage(LOCAL_STORAGE_CART_KEY) || [],
    );

    const handleChange = (newCart: CartItem[]) => {
        setCart(newCart);
    };

    useEffect(() => {
        setLocalStorage(LOCAL_STORAGE_CART_KEY, cart);
    }, [cart]);

    const value = {
        cart,
        setCart: handleChange,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
