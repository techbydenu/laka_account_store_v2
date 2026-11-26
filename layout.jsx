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

const groupLink =
  'https://chat.whatsapp.com/L1qx9jklMrJG06YbiCgaGj?s=cl&p=i&iam=2';

const admins = [
  {
    name: 'Lakshitha',
    role: 'Main Admin',
    phone: '+94 76 545 1547',
    whatsapp: '94765451547'
  },
  {
    name: 'Githma',
    role: 'Second Admin',
    phone: '+94 77 126 1277',
    whatsapp: '94771261277'
  }
];

const waButton = {
  display: 'inline-block',
  background: '#128C4A',
  color: '#ffffff',
  padding: '12px 20px',
  borderRadius: '10px',
  textDecoration: 'none',
  fontWeight: 700,
  textAlign: 'center'
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

        <section style={{
          maxWidth: '1100px',
          margin: '40px auto',
          padding: '24px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#00E5FF' }}>
            CONTACT OUR TEAM
          </h2>

          <p>Contact our official administrators.</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '20px',
            margin: '24px 0'
          }}>
            {admins.map(admin => (
              <div key={admin.name} style={{
                background: '#0B172B',
                border: '1px solid #008CFF',
                borderRadius: '16px',
                padding: '25px',
                color: '#ffffff'
              }}>
                <h2>{admin.name}</h2>

                <p style={{ color: '#00E5FF' }}>
                  {admin.role}
                </p>

                <p>
                  <a
                    href={`tel:+${admin.whatsapp}`}
                    style={{ color: '#ffffff' }}
                  >
                    {admin.phone}
                  </a>
                </p>

                <a
                  href={`https://wa.me/${admin.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={waButton}
                >
                  Chat on WhatsApp
                </a>
              </div>
            ))}
          </div>

          <a
            href={groupLink}
            target="_blank"
            rel="noopener noreferrer"
            style={waButton}
          >
            Join Official WhatsApp Group
          </a>
        </section>

        <a
          href="https://wa.me/94765451547"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact main admin on WhatsApp"
          style={{
            ...waButton,
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999,
            borderRadius: '50px',
            boxShadow: '0 4px 20px #0005'
          }}
        >
          WhatsApp
        </a>

        <footer>
          LAKA ACCOUNT STORE · Developed by HEXORA
        </footer>
      </body>
    </html>
  );
}
