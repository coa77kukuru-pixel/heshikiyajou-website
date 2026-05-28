import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="footer-bg"
        style={{
          backgroundImage:
            "url('https://jinzai.okinawa/wp-content/uploads/2026/04/hesikiyajo_yuya-%E6%B2%96%E7%B8%84%E7%90%89%E7%90%83%E8%88%9E%E8%B8%8A.webp')",
        }}
      ></div>
      <div className="footer-inner">
        <div className="footer-main">
          <div className="f-brand">
            <Link href="/">
              平敷屋門勇也<br />
              琉球舞踊家・沖縄芝居役者<br />
              琉球舞踊道場
            </Link>
            <p>〒904-2172 沖縄県沖縄市泡瀬</p>
            <div className="f-sns">
              <a
                href="https://www.instagram.com/heshikiyajouyuuya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="f-links">
            <div className="f-col">
              <Link href="/">HOME</Link>
              <Link href="/ryukyu-buyou">琉球舞踊とは</Link>
              <Link href="/first-time">はじめての方へ</Link>
            </div>
            <div className="f-col">
              <Link href="/champuryu">チャンプ流ぅ芸能団</Link>
              <Link href="/sousaku">創作舞踊集団</Link>
              <Link href="/yuibana">道場</Link>
              <Link href="/contact">お問合せ</Link>
            </div>
          </div>
        </div>
        <div className="f-bottom">
          <div className="seal-small">勇也</div>
          <div className="copy">&copy; Heshikiyajou Yuya. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
