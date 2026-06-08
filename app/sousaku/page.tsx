'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './sousaku.module.css';

export default function SousakuPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DanceGroup',
    name: '創作舞踊集団 結華',
    alternateName: 'Yuibana',
    description: '平敷屋門勇也が会長を務める創作舞踊集団。2010年設立。伝統の所作を礎に、結婚式やイベント、観光ステージなど、おもてなしのプロとしての舞台出演を行っている。',
    foundingDate: '2010',
    founder: {
      '@type': 'Person',
      name: '平敷屋門勇也',
      url: 'https://next-app-cyan-eight.vercel.app/',
    },
    url: 'https://next-app-cyan-eight.vercel.app/sousaku',
    sameAs: ['https://www.instagram.com/yuibana.2011/'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="subhero" id="hero">
        <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
          <div style={{ flex: 1, background: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-花笠-四ツ竹.webp') center/cover no-repeat" }}></div>
          <div style={{ flex: 1, background: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-創作エイサー.webp') center/cover no-repeat" }}></div>
        </div>
        <div className="inner">
          <div className="crumb reveal">結華 ・ Since 2010</div>
          <h1 className="reveal stagger-1">創作舞踊集団<small>Creative Dance Collective</small></h1>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>01</b></div>
          <div className="sec-title">伝統を礎に、<br/>新しい舞踊を結ぶ<small>— About Yuibana —</small></div>
        </div>
        <div className={styles.about}>
          <div className={`reveal-left ${styles.photo}`} role="img" aria-label="創作舞踊集団 結華のメンバー集合写真" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団結華.webp')" }}>
            <div className={styles.frame}></div>
          </div>
          <div className="reveal-right">
            <div className={styles.en}>Creative Dance Collective</div>
            <h2>「結華」――<br/>結んで、咲かせて</h2>
            <p>2010年、21歳で沖縄に戻った平敷屋門 勇也が設立した、創作舞踊集団「結華」。古典舞踊の所作を礎としながら、現代の感性で表現する、新しい琉球舞踊の場。</p>
            <a className={`ig-pill ${styles.igPill}`} href="https://www.instagram.com/yuibana.2011/" target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor"/>
                </svg>
              </span>
              <span className="handle">@yuibana.2011</span>
            </a>
          </div>
        </div>
      </section>

      {/* GLOBAL */}
      <section className={`${styles.global} sec-dark`} id="global">
        <div className="sec-head reveal">
          <div className="sec-num" style={{ color: '#d4a23a' }}>Section <b>02</b></div>
          <div className="sec-title">琉球舞踊を身近に<br />感じてもらえる存在に<small>— Global Activities —</small></div>
        </div>

        <div className={styles.globalGrid}>
          <div className={`reveal-left ${styles.globalPhoto}`} role="img" aria-label="創作舞踊集団 結華 沖縄らしい花笠と四ツ竹を使った舞踊写真" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-花笠-四ツ竹.webp')" }}></div>
          <div className="reveal-right">
            <p>20代――自身の団体を立ち上げ、創作舞踊と向き合い続けた時期。その挑戦は沖縄県内にとどまらず、ハワイをはじめとする海外へ広がっていった。</p>
            <p>沖縄県系移民の多いハワイの地で、琉球舞踊の舞台に立つということ。それは、世代を越え、海を越えて、沖縄の心を「文化の架け橋」として届けることでもありました。</p>
            <p>結華の創作舞踊は、伝統の所作を礎としつつ、現代の感性で再構築された世界。いつか、自分たちの表現で、世界の舞台に立てるように。</p>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className={styles.works} id="works">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>03</b></div>
          <div className="sec-title">フォトギャラリー<small>— Photo Gallery —</small></div>
        </div>
        <div className={styles.worksGrid}>
          <div className={`${styles.w} ${styles.w1} reveal`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-花笠-四ツ竹.webp" alt="創作舞踊集団 結華 四ツ竹と花笠を用いた琉球舞踊の舞台写真" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w2} reveal stagger-1`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/万国津梁館-結華.webp" alt="万国津梁館での創作舞踊集団 結華のパフォーマンス写真" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w3} reveal stagger-2`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-創作エイサー.webp" alt="創作舞踊集団 結華による創作エイサーの演舞写真" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w4} reveal stagger-1`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/万国津梁館-創作舞踊-創作エイサー-結華.webp" alt="万国津梁館での結華による創作エイサー舞台写真" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w5} reveal stagger-2`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/平敷屋門勇也-沖縄琉球舞踊-男踊り-1.webp" alt="平敷屋門勇也 琉球舞踊・男踊りの力強い演技写真" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w6} reveal stagger-3`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-四ツ竹.webp" alt="創作舞踊集団 結華 四ツ竹の舞踊シーン" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w7} reveal stagger-1`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/平敷屋門勇也-琉舞道場-創作舞踊集団結.webp" alt="創作舞踊集団 結華 舞台のフィナーレを飾る集合写真" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w8} reveal stagger-2`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/IMG_0705.webp" alt="創作舞踊集団 結華 イベントでの記念写真" loading="lazy" /></div>
        </div>
      </section>

      {/* CREATIONS */}
      <section className={styles.programs} id="creations">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>04</b></div>
          <div className="sec-title">手がける、創作の世界<small>— Creations —</small></div>
        </div>
        <div className={styles.pgmGrid}>
          <div className={`${styles.pgm} reveal`}>
            <div className={styles.num}>No. 01</div>
            <h3>創作舞踊集団【結華】</h3>
            <div className={styles.kana}>Creative Dance Group ・ Yuibana</div>
            <p>仲間それぞれの可能性を、舞台の上で結び、咲かせる。結婚式やお祝いの場、観光客に向けたステージなど、おもてなしのプロとして大切なひと時を華やかせます。</p>
          </div>
        </div>
        
        <div className="reveal" style={{ marginTop: '80px', padding: '0 50px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--ink)', marginBottom: '20px', fontWeight: 500, letterSpacing: '.1em', textAlign: 'center' }}>
            プロモーションPV<br className="sp-br" /><span className="pc-inline">　　</span>サンチュー（山中）
          </div>
          <div className={styles.videoWrapper}>
            <iframe src="https://www.youtube.com/embed/AF-oZ1S-YJc?si=3Axg7o2FDlgO7mpE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} reveal`} id="cta">
        <h2>共演・公演の依頼について</h2>
        <p>創作公演、コラボレーション、海外ツアーなど、<br/>あらゆる舞台のご相談を承っております。</p>
        <Link className={`btn ${styles.btn}`} href="/contact">お問合せはこちら →</Link>
      </section>
    </>
  );
}
