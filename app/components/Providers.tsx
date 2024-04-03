'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { CartProvider } from '../../providers/CartProvider';

type Props = {
    children: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>{children}</CartProvider>
        </QueryClientProvider>
    );
};
