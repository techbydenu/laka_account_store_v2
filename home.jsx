'use client';

import { useEffect, useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Home() {
  const [items, S] = useState([]);
  const [q, Q] = useState('');
  const [filter, F] = useState('all');
  const [error, E] = useState('Loading accounts…');

  const [gallery, setGallery] = useState(null);
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);

  useEffect(() => {
    const db = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );

    async function load() {
      const { data, error } = await db
        .from('accounts')
        .select('*')
        .order('created_at', { ascending: false });

      S(data || []);
      E(error
        ? 'Catalog unavailable. Database setup may be pending.'
        : ''
      );
    }

    load();
    const timer = setInterval(load, 15000);

    return () => clearInterval(timer);
  }, []);

  function openGallery(account) {
    if (!account.images?.length) return;

    setGallery({
      title: account.title,
      images: account.images
    });

    setIndex(0);
  }

  function closeGallery() {
    setGallery(null);
    setIndex(0);
  }

  function nextPhoto() {
    setIndex(i =>
      Math.min(i + 1, gallery.images.length - 1)
    );
  }

  function prevPhoto() {
    setIndex(i => Math.max(i - 1, 0));
  }

  useEffect(() => {
    if (!gallery) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    function handleKey(e) {
      if (e.key === 'Escape') {
        setGallery(null);
      }

      if (e.key === 'ArrowRight') {
        setIndex(i =>
          Math.min(i + 1, gallery.images.length - 1)
        );
      }

      if (e.key === 'ArrowLeft') {
        setIndex(i => Math.max(i - 1, 0));
      }
    }

    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [gallery]);

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#00000099',
    color: '#fff',
    border: '1px solid #ffffff55',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    fontSize: '25px',
    cursor: 'pointer',
    zIndex: 2
  };

  return (
    <main>

      {/* HERO SECTION */}

      <section className="hero">
        <img
          src="/logo.jpeg"
          alt="Original LAKA artwork"
        />

        <div>
          <small>GAMING CATALOG · SRI LANKA</small>
          <h1>LAKA ACCOUNT STORE</h1>
          <p>Your Account. Your Legend.</p>

          <a className="cta" href="#catalog">
            Browse accounts
          </a>
        </div>
      </section>

      {/* ACCOUNT COLLECTION */}

      <h2 id="catalog">Account collection</h2>

      <div className="tools">
        <input
          placeholder="Search accounts, rank or level"
          value={q}
          onChange={e => Q(e.target.value)}
        />

        <select
          value={filter}
          onChange={e => F(e.target.value)}
        >
          {[
            'all',
            'Available',
            'Reserved',
            'Sold Out'
          ].map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <p>
        {error || (!items.length ? 'No listings yet.' : '')}
      </p>

      <div className="grid">

        {items
          .filter(a =>
            (filter === 'all' || a.status === filter) &&
            JSON.stringify(a)
              .toLowerCase()
              .includes(q.toLowerCase())
          )
          .map(a => (

            <article className="card" key={a.id}>

              {/* DISPLAY PHOTO ONLY */}

              {a.images?.length > 0 && (
                <button
                  type="button"
                  onClick={() => openGallery(a)}
                  aria-label={`View ${a.images.length} photos`}
                  style={{
                    position: 'relative',
                    width: '100%',
                    display: 'block',
                    padding: 0,
                    border: 'none',
                    background: '#071222',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >

                  <img
                    src={a.images[0]}
                    alt={a.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      aspectRatio: '16 / 9',
                      objectFit: 'cover',
                      display: 'block',
                      margin: 0
                    }}
                  />

                  {a.images.length > 1 && (
                    <span style={{
                      position: 'absolute',
                      right: '10px',
                      bottom: '10px',
                      background: '#000000CC',
                      color: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 700
                    }}>
                      +{a.images.length - 1} Photos
                    </span>
                  )}

                </button>
              )}

              {a.images?.length > 0 && (
                <button
                  type="button"
                  onClick={() => openGallery(a)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '8px',
                    background: '#0B2038',
                    color: '#67E8F9',
                    border: '1px solid #164E63',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  View All {a.images.length} Photos
                </button>
              )}

              <p className="status">{a.status}</p>

              <h2>{a.title}</h2>

              <p>
                Level {a.level} · {a.rank} · EVO {a.evo}
              </p>

              <p>{a.description}</p>

              <h2>
                Rs. {Number(a.price).toLocaleString()}
              </h2>

              {a.status === 'Available' && (
                <a
                  className="cta"
                  href={
                    'https://wa.me/94765451547?text=' +
                    encodeURIComponent(
                      'Inquiry: ' + a.title + ' / ' + a.id
                    )
                  }
                >
                  WhatsApp inquiry
                </a>
              )}

            </article>

          ))}

      </div>

      <p>
        <small>
          Independent catalog. Account transfers may
          violate game terms; verify permission before
          any transaction. No online checkout.
        </small>
      </p>

      {/* FULL SCREEN PHOTO GALLERY */}

      {gallery && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Account photo gallery"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#030712FA',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >

          {/* GALLERY HEADER */}

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px',
            borderBottom: '1px solid #ffffff22'
          }}>

            <div>
              <strong>{gallery.title}</strong>

              <div style={{
                color: '#67E8F9',
                fontSize: '14px',
                marginTop: '5px'
              }}>
                {index + 1} / {gallery.images.length}
              </div>
            </div>

            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close gallery"
              style={{
                background: '#1E293B',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                fontSize: '26px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

          </div>

          {/* SWIPE AREA */}

          <div
            onTouchStart={e => {
              touchStart.current =
                e.touches[0].clientX;
            }}

            onTouchEnd={e => {
              if (touchStart.current === null) return;

              const distance =
                touchStart.current -
                e.changedTouches[0].clientX;

              if (distance > 45) nextPhoto();
              if (distance < -45) prevPhoto();

              touchStart.current = null;
            }}

            onTouchCancel={() => {
              touchStart.current = null;
            }}

            style={{
              position: 'relative',
              flex: 1,
              minHeight: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              touchAction: 'pan-y'
            }}
          >

            <img
              key={index}
              src={gallery.images[index]}
              alt={`Photo ${index + 1}`}
              draggable={false}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                userSelect: 'none'
              }}
            />

            {index > 0 && (
              <button
                type="button"
                aria-label="Previous photo"
                onClick={prevPhoto}
                style={{
                  ...arrowStyle,
                  left: '10px'
                }}
              >
                ‹
              </button>
            )}

            {index < gallery.images.length - 1 && (
              <button
                type="button"
                aria-label="Next photo"
                onClick={nextPhoto}
                style={{
                  ...arrowStyle,
                  right: '10px'
                }}
              >
                ›
              </button>
            )}

          </div>

          {/* THUMBNAIL GALLERY */}

          <div style={{
            padding: '12px',
            background: '#0B1220'
          }}>

            <p style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#94A3B8',
              margin: '0 0 10px'
            }}>
              Swipe left or right to view photos
            </p>

            <div style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '6px'
            }}>

              {gallery.images.map((url, i) => (

                <button
                  type="button"
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`View photo ${i + 1}`}
                  style={{
                    flexShrink: 0,
                    width: '65px',
                    height: '48px',
                    padding: 0,
                    overflow: 'hidden',
                    borderRadius: '6px',
                    background: '#000',
                    border: index === i
                      ? '2px solid #00E5FF'
                      : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >

                  <img
                    src={url}
                    alt={`Thumbnail ${i + 1}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />

                </button>

              ))}

            </div>

          </div>

        </div>
      )}

    </main>
  );
}
