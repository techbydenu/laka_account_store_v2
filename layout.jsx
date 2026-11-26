import './style.css';

export const metadata = {
  title: 'LAKA ACCOUNT STORE',
  description: 'Gaming account catalog',
  other: {
    'google-adsense-account': 'ca-pub-4387730896055342'
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
