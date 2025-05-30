import './globals.css'; // ✅ This line is required to load Tailwind CSS

export const metadata = {
  title: 'Baraka Soles',
  description: 'Blessed steps, beautifully styled.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
