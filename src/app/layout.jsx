import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'WebStudio',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
