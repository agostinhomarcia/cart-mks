'use client';

import CartProvider from '@/provider/cart';

import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './globalStyle';

const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <body>
        <QueryClientProvider client={queryClient}>
          <CartProvider>{children}</CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
