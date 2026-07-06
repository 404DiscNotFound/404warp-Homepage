import { Outlet } from 'react-router-dom';
import AmbientBackground from './AmbientBackground';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10 pt-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}