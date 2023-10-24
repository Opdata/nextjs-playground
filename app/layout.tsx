import { ReactNode } from 'react';
import type { Metadata } from 'next';

import Layout from 'components/layout/Layout';

import 'styles/globals.css';

export const metadata: Metadata = {
  viewport: {
    // width=device-width, initial-scale=1, maximum-scale=1
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Next,js PlayGround',
  description: 'Welcome to Next.js PlayGround',
  keywords: ['Next.js', 'TypeScript', 'PlayGround'],
  authors: [{ name: 'Opdata' }],

  // ... openGraph, 등 구체적인 메타데이터 설정 가능
  // default 혹은 dynamic metadata 설정 가능
};

type RootLayout = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayout) => {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
