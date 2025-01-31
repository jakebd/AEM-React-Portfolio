import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="layout">
    <Header />
    <main className="layout-main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
