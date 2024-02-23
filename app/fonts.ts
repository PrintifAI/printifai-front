import { Montserrat, Ramabhadra, Roboto, Roboto_Flex } from 'next/font/google';

export const robotoFlex = Roboto_Flex({
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});
export const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['500'],
});
export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});
export const ramabhadra = Ramabhadra({
    subsets: ['latin'],
    variable: '--font-ramabhadra',
    weight: '400',
});
