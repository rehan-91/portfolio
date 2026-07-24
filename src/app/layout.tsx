import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const SITE_NAME = DATA.name;
const SITE_TITLE = DATA.seo.title;
const SITE_DESCRIPTION = DATA.seo.description;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [...DATA.seo.keywords],

  authors: [
    {
      name: SITE_NAME,
      url: DATA.url,
    },
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  alternates: {
    canonical: DATA.url,
  },

  openGraph: {
    title: SITE_TITLE,
    description: `Explore the portfolio of ${SITE_NAME}, a Laravel Full Stack Developer with 6+ years of experience in enterprise software, CRM systems, banking platforms, AI integrations and scalable web applications.`,
    url: DATA.url,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Laravel Full Stack Developer • Enterprise Applications • Banking • AI • React",
    creator: DATA.seo.twitter,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
