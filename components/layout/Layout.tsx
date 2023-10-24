import { ReactNode } from 'react';

import Gnb from 'components/gnb/Gnb';

import styles from 'components/layout/Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Gnb />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
