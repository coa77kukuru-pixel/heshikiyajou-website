'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/ryukyu-buyou', label: '琉球舞踊とは' },
  { href: '/first-time', label: 'はじめての方へ' },
  { href: '/champuryu', label: 'チャンプ流ぅ芸能団' },
  { href: '/sousaku', label: '創作舞踊集団' },
  { href: '/yuibana', label: '道場' },
  { href: '/contact', label: 'お問合せ' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* MOBILE DRAWER */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`} id="nav-drawer">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? 'active' : ''}
            onClick={close}
          >
            {l.label}
          </Link>
        ))}
        <div className="drawer-seal">勇也</div>
      </div>

      {/* NAV */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="main-nav">
        <div className="brand">
          <Link href="/">
            平敷屋門 勇也
            <small>Heshikiya-jou Yuya ・ Ryukyu Dancer</small>
          </Link>
        </div>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          aria-label="メニュー"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </>
  );
}
