import { Inter } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Dealer App",
  description: "Filter Vehicle Type and Model Year",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
