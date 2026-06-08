'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Champuryu() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PerformingGroup',
    name: 'チャンプ流ぅ芸能団',
    alternateName: 'Champuryu Geinou-dan',
    description: '琉球舞踊家の平敷屋門勇也、民謡歌手の仲宗根創、古典音楽の知念勝三からなる若手芸能家ユニット。2017年結成。沖縄伝統芸能をベースに、唄・三線・踊り・即興コントを融合した唯一無二のステージを展開している。',
    foundingDate: '2017',
    member: [
      { '@type': 'Person', name: '平敷屋門勇也', roleName: 'リーダー・琉球舞踊' },
      { '@type': 'Person', name: '仲宗根創', roleName: '唄三線・民謡' },
      { '@type': 'Person', name: '知念勝三', roleName: '三線・古典音楽' },
    ],
    url: 'https://next-app-cyan-eight.vercel.app/champuryu',
    sameAs: [
      'https://www.instagram.com/champuryu_geinoudan/',
      'https://www.facebook.com/chanpryuu/',
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="subhero" id="hero">
        <div className="hero-bg" role="img" aria-label="チャンプ流ぅ芸能団のメンバー（仲宗根創・知念勝三・平敷屋門勇也）の宣伝用ビジュアル写真" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/チャンプ流ぅ芸能団-仲宗根創-知念勝三-平敷屋門勇也.webp')" }}></div>
        <div className="inner">
          <div className="crumb reveal">うちなー芸能 ・ Since 2017</div>
          <h1 className="reveal stagger-1">チャンプ流ぅ芸能団<small>Champuryu Geinou-dan</small></h1>
          <div className="reveal stagger-2" style={{ marginTop: '30px' }}>
            <Link className="btn" href="/contact">【出演依頼のお問合せはコチラ】</Link>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section id="intro">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>01</b></div>
          <div className="sec-title">3人で、うちなーの今を<small>— About Us —</small></div>
        </div>
        <div className={styles.intro}>
          <div className={`reveal-left ${styles.photo}`} role="img" aria-label="チャンプ流ぅ芸能団の3人（平敷屋門勇也・仲宗根創・知念勝三）の自然なオフショット写真" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/chanpuryu.webp')" }}></div>
          <div className="reveal-right">
            <div className={styles.en}>Three players, one stage</div>
            <h2>「自分たちで、<br />楽しいものを創作していく」</h2>
            <p>唄三線・古典音楽・琉球舞踊。それぞれの分野で伝統を背負う3人の若手芸能家が、2017年、ひとつの場に集った。即興コント、歌、踊り。ジャンルを越えて、子どもから年配まで楽しめる、唯一無二のうちなー芸能の舞台を編んでいる。</p>
            <p>最年少ながら、リーダーとして全体を律する平敷屋門 勇也。来年、結成10周年。沖縄から、世界へ。</p>
            <a className={styles['ig-pill']} href="https://www.instagram.com/champuryu_geinoudan/" target="_blank" rel="noopener noreferrer">
              <span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg></span>
              <span className="handle">@champuryu_geinoudan</span>
            </a>
          </div>
        </div>
      </section>

      {/* ANNIVERSARY */}
      <section className={styles.anniv} id="anniversary" style={{ padding: '140px 80px' }}>
        <div className={styles['anniv-inner']}>
          <div className={`${styles.num} reveal-left`}>10<small>th</small></div>
          <div className={`${styles.info} reveal-right`}>
            <div className={styles.label}>10th Anniversary ・ Featured Stage</div>
            <h3>来年、結成10周年<br />今年6月、鶴見へ</h3>
            <p>沖縄から東京・鶴見へ、唄と三線と舞踊を運びます。<br />2026年6月、節目を前にした特別な凱旋公演が決定しています。</p>
          </div>
          <div className={`${styles.badge} reveal stagger-2`}>凱旋公演 ・ FEATURED</div>
        </div>
      </section>

      {/* MEMBERS */}
      <section className={styles.members} id="members">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>02</b></div>
          <div className="sec-title">3人のメンバー<small>— The Trio —</small></div>
        </div>
        <div className={styles['mem-grid']}>
          <div className={`${styles['mem-card']} reveal`}>
            <div className={styles.role}>Buyou ・ 琉球舞踊</div>
            <div className={styles.name}>平敷屋門 勇也</div>
            <div className={styles['name-en']}>Heshikiya-jou Yuya</div>
            <p>玉城流光乃会・赤嶺啓子琉舞道場。最年少リーダーとして全体を律する。創作舞踊集団「結華」会長。</p>
            <div className={styles['mem-social']}>
              <a href="https://www.instagram.com/heshikiyajouyuuya/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg></a>
              <a href="https://www.facebook.com/youya.heshiki" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            </div>
          </div>
          <div className={`${styles['mem-card']} reveal stagger-1`}>
            <div className={styles.role}>Min'you ・ 沖縄民謡</div>
            <div className={styles.name}>仲宗根 創</div>
            <div className={styles['name-en']}>Nakasone Hajime</div>
            <p>唄三線。地謡として自らの歌で芸能団の場を温める、沖縄の歌い手。</p>
            <div className={styles['mem-social']}>
              <a href="https://www.instagram.com/nakasonehajime/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg></a>
              <a href="https://www.facebook.com/chanpryuu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            </div>
          </div>
          <div className={`${styles['mem-card']} reveal stagger-2`}>
            <div className={styles.role}>Sanshin ・ 古典音楽</div>
            <div className={styles.name}>知念 勝三</div>
            <div className={styles['name-en']}>Chinen Shouzou</div>
            <p>古典音楽の三線奏者。伝統の弦が、現代の場に新たな響きを生む。</p>
            <div className={styles['mem-social']}>
              <a href="https://www.instagram.com/champuryu_geinoudan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg></a>
              <a href="https://www.facebook.com/chanpryuu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className={styles.vision} id="vision">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>03</b></div>
          <div className="sec-title">未来の伝統を今つくる<small>— Our Vision —</small></div>
        </div>
        <div className={styles['vision-content']}>
          <h3 className="reveal" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.6, marginBottom: '40px', fontWeight: 500, letterSpacing: '.1em', color: 'var(--ink)' }}>
            繋がれてきたものに感謝し<br />
            “未来の伝統を今つくる”
          </h3>
          <p className="reveal stagger-1" style={{ fontFamily: 'var(--serif)', fontSize: '15px', lineHeight: 2.2, marginBottom: '60px', color: 'var(--ink-2)' }}>
            先人達が残してくれた、伝統芸能をこの先も繋いでいく為にも<br />
            <strong style={{ fontSize: '17px', color: 'var(--crimson)', margin: '12px 0', display: 'inline-block', fontWeight: 500 }}>“僕ら自身がどう楽しんでいくか”</strong><br />
            舞台で面白く、楽しく感じてもらえる為にはと常に考え、カタチにすること<br />
            今の時代に求められている芸能を創っていく。
          </p>
          <div className="reveal stagger-2">
            <div style={{ fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--ink)', marginBottom: '20px', fontWeight: 500, letterSpacing: '.1em' }}>動画で３人の想いを見る</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div className={styles['video-wrapper']}>
                <iframe src="https://www.youtube.com/embed/yCkSXg0sUL0?si=t6LDVWOv-eTe86sK" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className={styles['video-wrapper']}>
                <iframe src="https://www.youtube.com/embed/GjYGzqJnMy8?si=YR2kgqnlMSMgCMrY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className={`${styles.concept} reveal`} id="concept">
        <div className={styles['concept-inner']}>
          <div className={styles['concept-mark']}>"</div>
          <p>
            観客の皆さんの笑顔や笑い声に僕たちがパワーを頂いています。<br />
            『舞台を見ている時、日常を忘れて自然と笑顔になれる』<br /><br />
            笑って、泣いて、心が温かく元気になる。“心のぬちぐすい（命の薬）”ですね。<br />
            舞台の可能性は単なる表現では終わらない。<br /><br />
            沖縄の先人たちが、戦後もずっと残し続けたように僕たちも前へ進み<br />
            “未来の伝統を今つくる”<br /><br />
            僕たちにとっても、皆様にとっても<br />
            チャンプ流ぅ芸能団の表現が“面白く、楽しい”モノでありたい。<br />
            この先も、愛され続ける沖縄の伝統芸能を繋いでいけたら嬉しい。
          </p>
          <div className={styles.attr}>
            Words from the leader
            <b>平敷屋門 勇也 ・ Champuryu Geinou-dan</b>
          </div>
        </div>
      </section>

      <div className={`${styles['closing-photo']} reveal`}>
        <img src="https://jinzai.okinawa/wp-content/uploads/2026/04/chanpuryu-mothersday-scaled.webp" alt="チャンプ流ぅ芸能団による母の日公演での舞台パフォーマンス写真" />
      </div>
    </>
  );
}
