import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/frontend/Navbar";
import Footer from "../components/frontend/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Devix",
  description: "Devix Company Profile.",
  keywords: "devix, devix company, devix company profile, devix website, company profile, compro, company website, website, company, jasa website, pembuatan website, bisnis, website company, website perusahaan, website profesional, website bisnis, website e-commerce, website publikasi, website konsultasi, website manajemen, website, dashboard, website iot, website kalkulator, website saas, website layanan, website personal, website efisiensi, website profesional, website company profile, website, company, website devix, website devix company, website devix company profile, website devix tech, website devix technology, website devix indonesia, website devix jawa barat, website devix tasikmalaya, website devix tamansari, website devix mugarsari, website devix company profile, website devix company, website devix tech, website devix technology, website devix indonesia, website devix jawa barat, website devix tasikmalaya, website devix tamansari, website devix mugarsari, website devix company profile, website devix company, website devix tech, jasa pembuatan website",
  author: "Devix Team",
  openGraph: {
    title: "Devix",
    type: "website",
    site_name: "Devix",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
