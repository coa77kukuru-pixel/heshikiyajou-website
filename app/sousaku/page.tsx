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

  return (
    <>
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
          <div className={`reveal-left ${styles.photo}`} style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団結華.webp')" }}>
            <div className={styles.frame}></div>
          </div>
          <div className="reveal-right">
            <div className={styles.en}>Creative Dance Collective</div>
            <h2>「結華」――<br/>結んで、咲かせて</h2>
            <p>2010年、21歳で沖縄に戻った平敷屋門 勇也が設立した、創作舞踊集団「結華」。古典舞踊の所作を礎としながら、現代の感性で再構築する、新しい琉球舞踊の場。</p>
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
          <div className="sec-title">琉球舞踊を身近に感じてもらえる存在に<small>— Global Activities —</small></div>
        </div>

        <div className={styles.globalGrid}>
          <div className={`reveal-left ${styles.globalPhoto}`} style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-花笠-四ツ竹.webp')" }}></div>
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
          <div className={`${styles.w} ${styles.w1} reveal`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-花笠-四ツ竹.webp" alt="結華 花笠 四ツ竹" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w2} reveal stagger-1`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/万国津梁館-結華.webp" alt="万国津梁館 結華" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w3} reveal stagger-2`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-創作エイサー.webp" alt="結華 創作エイサー" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w4} reveal stagger-1`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/万国津梁館-創作舞踊-創作エイサー-結華.webp" alt="万国津梁館 創作エイサー" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w5} reveal stagger-2`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/平敷屋門勇也-沖縄琉球舞踊-男踊り-1.webp" alt="平敷屋門勇也 男踊り" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w6} reveal stagger-3`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/創作舞踊集団-結華-四ツ竹.webp" alt="結華 四ツ竹" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w7} reveal stagger-1`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/平敷屋門勇也-琉舞道場-創作舞踊集団結.webp" alt="結" loading="lazy" /></div>
          <div className={`${styles.w} ${styles.w8} reveal stagger-2`}><img src="https://jinzai.okinawa/wp-content/uploads/2026/04/IMG_0705.webp" alt="Gallery Photo" loading="lazy" /></div>
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
          <div className={`${styles.pgm} reveal stagger-1`}>
            <div className={styles.num}>No. 02</div>
            <h3>子ども創作舞踊集団【結】</h3>
            <div className={styles.kana}>Yui ・ Children&apos;s Group</div>
            <p>こども達と創る舞台。平敷屋門勇也 琉舞道場で学ぶ生徒のうち選抜メンバーが舞台出演を目指します。実践の場を経験。</p>
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
