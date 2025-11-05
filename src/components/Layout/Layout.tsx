import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
