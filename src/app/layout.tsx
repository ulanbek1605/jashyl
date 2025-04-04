import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



export const metadata: Metadata = {
  title: "Jashyl Bonus",
  description: "Фондаматы Jashyl Bonus — удобный способ сдачи пластиковых и алюминиевых отходов с бонусами за переработку. Спасай природу и получай вознаграждение!",
  keywords: [
    "фондаматы",
    "переработка отходов",
    "экология Кыргызстан",
    "Jashyl Bonus",
    "сдать бутылки",
    "бонусы за пластик",
    "умные фондаматы",
    "переработка пластика",
    "эко бонусы",
    "сдача алюминиевых банок"
  ],
  openGraph: {
    title: "Jashyl Bonus — Экология с выгодой",
    description: "Сдавай пластиковые и алюминиевые отходы в фондаматы и получай бонусы. Вклад в чистую планету — с наградой!",
    url: "https://jashyl-bonus.kg", 
    siteName: "Jashyl Bonus",
    images: [
      {
        url: "/images/img/opengraph.jpg", 
        width: 1200,
        height: 630,
        alt: "Jashyl Bonus — сдача отходов с бонусами",
      },
    ],
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
