// CSS
import "#1_css/_map.scss";
// NEXT
import type { Metadata } from "next";
//
//
//
//
//
export const metadata: Metadata = {
  title: "Chifoumi",
  description: "Pierre - Papier - Ciseaux",
  icons: {
    icon: '/0_assets/icon-st-b.svg',
  },
};
//
//
//
//
//
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> 
      <body>
        {children}
      </body>
    </html>
  );
}
