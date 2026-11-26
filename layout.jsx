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
    role: 'MAIN ADMIN',
    phone: '+94 76 545 1547',
    whatsapp: '94765451547',
    photo: '/lakshitha.jpeg',
    position: '50% 22%'
  },
  {
    name: 'Githma',
    role: 'SECOND ADMIN',
    phone: '+94 77 126 1277',
    whatsapp: '94771261277',
    photo: '/githma.jpeg',
    position: '55% 40%'
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

        {/* WEBSITE HEADER */}

        <header>
          <a href="/">
            <img src="/logo.jpeg" alt="LAKA" />
            LAKA <span>ACCOUNT STORE</span>
          </a>

          <a href="/admin">Admin</a>
        </header>

        {/* WEBSITE CONTENT */}

        {children}

        {/* ADMIN CONTACT SECTION */}

        <section
          id="contact"
          style={{
            maxWidth: '1100px',
            margin: '40px auto',
            padding: '24px',
            textAlign: 'center'
          }}
        >

          <h2 style={{
            color: '#00E5FF',
            fontSize: '26px',
            fontWeight: 800,
            letterSpacing: '1px'
          }}>
            OUR OFFICIAL ADMINS
          </h2>

          <p style={{
            color: '#94A3B8',
            marginTop: '8px'
          }}>
            Contact our official administrators
            for inquiries and support.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '20px',
            margin: '25px 0'
          }}>

            {admins.map(admin => (

              <div
                key={admin.name}
                style={{
                  background:
                    'linear-gradient(145deg, #0B172B, #101F35)',
                  border: '1px solid #008CFF',
                  borderRadius: '20px',
                  padding: '25px',
                  color: '#ffffff',
                  boxShadow: '0 5px 25px #00000040'
                }}
              >

                {/* CIRCULAR PROFILE PHOTO */}

                <img
                  src={admin.photo}
                  alt={admin.name}
                  loading="lazy"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: admin.position,
                    border: '2px solid #00E5FF',
                    boxShadow: '0 0 15px #00E5FF55',
                    display: 'block',
                    margin: '0 auto 15px'
                  }}
                />

                {/* ADMIN NAME */}

                <h2 style={{
                  color: '#ffffff',
                  fontSize: '23px',
                  margin: '8px 0'
                }}>
                  {admin.name}
                </h2>

                {/* ADMIN ROLE */}

                <p style={{
                  color: '#00E5FF',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '2px'
                }}>
                  {admin.role}
                </p>

                {/* CONTACT NUMBER */}

                <p style={{
                  margin: '18px 0',
                  fontSize: '17px'
                }}>
                  <a
                    href={`tel:+${admin.whatsapp}`}
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none'
                    }}
                  >
                    {admin.phone}
                  </a>
                </p>

                {/* WHATSAPP CONTACT BUTTON */}

                <a
                  href={`https://wa.me/${admin.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...waButton,
                    display: 'block'
                  }}
                >
                  Chat on WhatsApp
                </a>

              </div>

            ))}

          </div>

          {/* WHATSAPP GROUP SECTION */}

          <div style={{
            background: '#0B172B',
            border: '1px solid #128C4A',
            borderRadius: '18px',
            padding: '25px',
            marginTop: '25px'
          }}>

            <h2 style={{
              color: '#25D366',
              fontSize: '22px'
            }}>
              JOIN OUR COMMUNITY
            </h2>

            <p style={{
              color: '#94A3B8',
              margin: '12px 0 20px'
            }}>
              Join our official WhatsApp group
              for the latest account listings,
              updates and offers.
            </p>

            <a
              href={groupLink}
              target="_blank"
              rel="noopener noreferrer"
              style={waButton}
            >
              Join Official WhatsApp Group
            </a>

          </div>

        </section>

        {/* FLOATING WHATSAPP BUTTON */}

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
            background: '#128C4A',
            boxShadow: '0 4px 20px #00000055'
          }}
        >
          WhatsApp
        </a>

        {/* WEBSITE FOOTER */}

        <footer>
          LAKA ACCOUNT STORE · Developed by HEXORA
        </footer>

      </body>
    </html>
  );
}
