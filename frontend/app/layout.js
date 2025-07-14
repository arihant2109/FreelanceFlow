// app/layout.tsx or app/layout.jsx
import './globals.css'; // import global styles
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export const metadata = {
  title: 'Freelance Flow',
  description: 'Manage clients and projects efficiently',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {/* Shared layout UI */}
        {/* <NavBar />
        <SideBar /> */}
        
        <main className="ml-[18%] p-6">{children}</main>
      </body>
    </html>
  );
}
