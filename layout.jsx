import './style.css';

export const metadata = {
  metadataBase: new URL(
    'https://laka-account-store.vercel.app'
  ),

  title: 'LAKA ACCOUNT STORE | Free Fire Accounts Sri Lanka',

  description:
    'Explore Free Fire account listings in Sri Lanka. Browse account levels, ranks, prices and collections at LAKA ACCOUNT STORE.',

  keywords: [
    'LAKA ACCOUNT STORE',
    'Free Fire Sri Lanka',
    'Free Fire Accounts',
    'LAKA Gaming',
    'HEXORA'
  ],

  alternates: {
    canonical: '/'
  },

  robots: {
    index: true,
    follow: true
  },

  verification: {
    google: 'KuZ5QtTkqKhoPtDyCk0IX7WRGC50BFfb8-zYNIvJ-OM'
  },

  other: {
    'google-adsense-account': 'ca-pub-4387730896055342'
  },

  openGraph: {
    title: 'LAKA ACCOUNT STORE',
    description: 'Your Account. Your Legend.',
    url: 'https://laka-account-store.vercel.app',
    siteName: 'LAKA ACCOUNT STORE',
    images: ['/logo.jpeg'],
    type: 'website'
  }
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4387730896055342"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <header>
          <a href="/">
            <img src="/logo.jpeg" alt="LAKA" />
            LAKA <span>ACCOUNT STORE</span>
          </a>
          <a href="/admin">Admin</a>
        </header>

        {children}

        <footer>
          LAKA ACCOUNT STORE · Developed by HEXORA
        </footer>
      </body>
    </html>
  );
}
