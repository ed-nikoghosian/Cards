import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <Description />
    </div>
  );
};

export default MainLayout;
