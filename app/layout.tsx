import type { Metadata } from "next";
import { 
  Inter, 
  Geist, 
  Roboto, 
  Montserrat, 
  Poppins, 
  Playfair_Display, 
  Instrument_Serif, 
  Merriweather, 
  Bricolage_Grotesque, 
  Plus_Jakarta_Sans, 
  Manrope, 
  Space_Grotesk, 
  Work_Sans, 
  PT_Serif, 
  Geist_Mono, 
  Space_Mono, 
  Quicksand, 
  Nunito 
} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Avery Tan — UI/UX Designer in Singapore",
  description: "UI/UX designer in Singapore shaping high-impact product experiences for fintech, B2B, and consumer apps. Systems-driven, outcome-focused.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body 
        className={`
          min-h-screen bg-slate-950 text-white antialiased
          ${inter.variable} 
          ${geist.variable} 
          ${roboto.variable} 
          ${montserrat.variable} 
          ${poppins.variable} 
          ${playfair.variable} 
          ${instrumentSerif.variable} 
          ${merriweather.variable} 
          ${bricolage.variable} 
          ${jakarta.variable} 
          ${manrope.variable} 
          ${spaceGrotesk.variable} 
          ${workSans.variable} 
          ${ptSerif.variable} 
          ${geistMono.variable} 
          ${spaceMono.variable} 
          ${quicksand.variable} 
          ${nunito.variable}
        `}
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"' }}
      >
        <Script src="https://cdn.tailwindcss.com" />
        <Script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" defer />
        <Script id="unicorn-studio-init">
          {`
            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          `}
        </Script>
        <Script id="lucide-init">
          {`
            window.addEventListener('DOMContentLoaded', () => {
              if (window.lucide && window.lucide.createIcons) {
                window.lucide.createIcons();
              }
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
